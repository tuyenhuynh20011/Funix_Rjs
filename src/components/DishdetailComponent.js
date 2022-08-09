import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

       
 function CommentForm ({comment}){
    const comment1 = comment.map((comment1)=>{
        return(
            <div>
            <p>{comment1.comment}</p>
            <p>{"-- "+comment1.author+ ", "+dateFormat(comment1.date,"dd/mm/yyyy")}</p>
            </div>
        )
    });
    return(
        <div className="col-12 col-md-5 m-1">
            <h4 style={{textAlign: "left"}}>Comments</h4>
                    {comment1}
        </div>
    )
}
 
const DishDetail = (props) => {
    if (props.dish != null)
    return(
        <div className="container">
           <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div> 
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={props.dish.image} alt={props.dish.name} />
                    <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <CommentForm comment = {props.comments}/>
        </div>
        </div>
    );
else
    return(
        <div></div>
    );
}
export default DishDetail;