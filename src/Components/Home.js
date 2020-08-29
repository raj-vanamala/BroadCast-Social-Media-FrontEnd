import  React, { useEffect } from "react";
import { Container,Row,Col,Card,Spinner } from "react-bootstrap";
import {connect} from 'react-redux' 
import { loadBuddyPostsBackend,clearBuddyPosts } from '../Actions/CREATE_POST_ACTIONS'
import {  loadBuddyListBackend } from '../Actions/HANDLES_ACTIONS'

function Home({user,loadBuddyList,buddyList,loadBuddyPosts,buddyPosts,clearBuddyPosts}) {

    useEffect(()=>{
        buddyList.forEach((handle)=>loadBuddyPosts(user.handle,handle))

        return () => {
            clearBuddyPosts()
        }
        
    },[user.handle,buddyList,loadBuddyPosts,clearBuddyPosts])

    const displayPosts = () => {

        return (
            buddyPosts.map((obj,id)=>
                                <Col key={id} style = {{marginBottom : "10px"}} lg={12}>
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
            <Row>
                {
                    (buddyPosts.length === 0)?
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
        buddyList : state.handles_reducer.buddyList,
        buddyPosts : state.createPost_reducer.buddiesPosts
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        loadBuddyList : (handle) => dispatch(loadBuddyListBackend(handle)),
        loadBuddyPosts : (userHandle,handle)=>dispatch(loadBuddyPostsBackend(userHandle,handle)),
        clearBuddyPosts : () => dispatch(clearBuddyPosts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)