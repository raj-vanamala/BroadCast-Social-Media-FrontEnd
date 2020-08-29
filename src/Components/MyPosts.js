import  React ,{useEffect} from "react";
import { Card,Row,Col, Container,Spinner} from 'react-bootstrap';

import { connect } from 'react-redux'
import { loadPostsBackend } from '../Actions/CREATE_POST_ACTIONS'

function MyPosts({user,loadPostsBackend,posts}) {

    useEffect(()=>{

        loadPostsBackend(user.handle)

    },[loadPostsBackend,user.handle])

    const displayPosts = () => {

        return (
            posts.map((obj,id)=>
                                <Col key={id} lg={12} style = {{marginBottom : "10px"}} >
                                <Card border="info">
                                    <Card.Header as="h5" style={{color : "blueViolet"}}>{obj.handle}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>{obj.postContent}</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            )
        )
    }

    return (
        <Container style={{fontFamily:"cursive"}}>
            <Row >
                        {
                            (posts.length === 0)?
                            <Spinner animation="grow" role="status" variant="info" style={{marginLeft:"50%"}}>Loading...</Spinner>
                            :
                            displayPosts()
                        }
                    </Row>  
        </Container>
    )
}

const mapStateToProps = (state) => {

    return {

        user : state.credentials_reducer,
        posts : state.createPost_reducer.posts

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

        loadPostsBackend : (handle) => dispatch(loadPostsBackend(handle))

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyPosts);