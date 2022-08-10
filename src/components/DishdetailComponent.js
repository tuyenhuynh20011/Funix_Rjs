import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import CommentForm from './CommentComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
       
class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
          isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render(){

        const RenderComments = ({comments}) => {
            const comment = comments.map((comment1)=>{
                return(
                    <Fade in>
                    <p>{comment1.comment}</p>
                    <p>{"-- "+comment1.author+ ", "+dateFormat(comment1.date,"dd/mm/yyyy")}</p>
                    </Fade>
                )
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4 style={{textAlign: "left"}}>Comments</h4>
                    <Stagger in>
                        {comment} 
                    </Stagger>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>    
                </div>
            )
        }
        
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.dish != null) 
        return(
            <div className="container">
               <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div> 
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
                </div>
                    <RenderComments comments = {this.props.comments} postComment= {this.props.postComment} dishId={this.props.dish.id}/>
                    <CommentForm dishId={this.props.dish.id} postComment={this.props.postComment} isModalOpen={this.state.isModalOpen} toggleModal={this.toggleModal} />
            </div>
            </div>
        );
    else
        return(
            <div></div>
        );
    }
    
}
export default DishDetail;