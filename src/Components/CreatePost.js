import React, { useState } from 'react';
import { createPostBackend } from '../Actions/CREATE_POST_ACTIONS'
import { Form,Row,Col,Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

function CreatePost(props) {

    const [postContent,setPostContent] = useState("");


    const handleChange = (event) => {

        let target = event.target;
        setPostContent(target.value)
    }

    const handleSubmit = () => {
        
        props.createPostBackend(props.user.handle , postContent);
        setPostContent("");
    }

    return (
          <Container style={{fontFamily:"cursive"}}>
            <Form>
          <Row className="form-css">
            <Col >
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" name="postContent" value={postContent} onChange = {handleChange} maxLength="150"/>
          </Form.Group>
          <Button variant='outline-info' onClick={handleSubmit} style={{float:"right"}}><b>Create Post</b></Button>
            </Col>
          </Row>
          </Form> 
          </Container>
    )
}

const mapStateToProps = (state, ownProps) => {

    return {
      
      user : state.credentials_reducer

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

      createPostBackend : (handle , postContent) => dispatch(createPostBackend(handle , postContent))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)