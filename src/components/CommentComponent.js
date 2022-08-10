import React from 'react';
import {Button, Row, Col, Label,Modal,ModalHeader,ModalBody} from 'reactstrap';
import { Control,LocalForm} from 'react-redux-form';
function   handleSubmit(props,values) {
    props.toggleModal();
    props.postComment(props.dishId, values.rating, values.author, values.comment);
  }

function CommentForm (props) {

        return(
            <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
            <ModalHeader toggle={props.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) =>handleSubmit(props,values)}>
                    <Row className="form-group">
                        <Col>
                        <Label htmlFor="rating">Rating</Label>
                        <Control.select model=".rating" id="rating" className="form-control"  defaultValue={1}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text model=".author" id="author"
                                     className="form-control" />

                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col>
                        <Label htmlFor="comment">Comment</Label>
                        <Control.textarea model=".comment" id="comment"
                                    rows="6" className="form-control" />
                        </Col>
                    </Row>
                    <Button type="submit" className="bg-primary">
                        Submit
                    </Button>
                </LocalForm>
            </ModalBody>
           </Modal>
        );   
        
   //}

}
export default CommentForm;