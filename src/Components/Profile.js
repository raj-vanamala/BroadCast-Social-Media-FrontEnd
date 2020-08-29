import  React, { useEffect, useState }  from "react";
import { Card, Row, Col, Container,Button,Modal,Form } from "react-bootstrap";
import { connect } from "react-redux";
import { 
    loadMyPostsCount , 
    loadMyFollowingCount,
    updateNameInDatabase,
    updateMobileInDatabase,
    updateEmailInDatabase
    } from '../Actions/PROFILE_ACTION_CREATOR'

function Profile({
    currentUser , 
    loadMyPostsCount , 
    loadMyFollowingCount , 
    postCount , 
    followingCount,
    updateNameInDatabase,
    updateMobileInDatabase,
    updateEmailInDatabase
    }) 
    {

    const [showModal1,setShowModalValue1] = useState(false)
    const [showModal2,setShowModalValue2] = useState(false)
    const [showModal3,setShowModalValue3] = useState(false)
    const [name , setName] = useState("")
    const [mobile , setMobile] = useState("")
    const [email , setEmail] = useState("")
    
    useEffect(()=>{

        loadMyPostsCount(currentUser.handle);
        loadMyFollowingCount(currentUser.handle);
        
    },[loadMyPostsCount , loadMyFollowingCount , currentUser.handle,followingCount])

    const handleClose = () => {

        setShowModalValue1(false)
        setShowModalValue2(false)
        setShowModalValue3(false)
        setName('')
        setMobile('')
        setEmail('')

    }

    const changeValue = (event) => {
        let target = event.target;
        
        if(target.name === 'Name') {
            console.log(target.value);
            setName(target.value)
        } 
        else if(target.name === 'Mobile'){
            console.log(target.value);
            setMobile(target.value)
        }
        else if(target.name === 'Email'){
            console.log(target.value);
            setEmail(target.value)
        }
    }

    const updateName = () => {

        setShowModalValue1(true)
    }

    const updateMobile = () => {

        setShowModalValue2(true)
    }
    
    const updateEmail = () => {

        setShowModalValue3(true)
    }

    const updateDetails = () => {

        if(name !== "")
            updateNameInDatabase(currentUser.handle ,name)
        else if(mobile !== "")
            updateMobileInDatabase(currentUser.handle ,mobile)
        else
            updateEmailInDatabase(currentUser.handle ,email)
        
        handleClose()
    }

    return (
            <Container style={{fontFamily:"cursive"}}>
                <Card border="info" >
                <Card.Header style = {{color : "blueViolet"}}><b>Profile</b></Card.Header>
                <img style={{width : "100px",height : "100px"}} src="../Assets/sample.jpg" alt="" />
                <Card.Body>
                <Row>
                    <Col lg={4}>
                        <Card.Text style = {{color : "blueViolet"}}>
                            <b>Name</b>
                        </Card.Text>
                    </Col> 
                    <Col lg={6}>
                        <Card.Text>
                            {currentUser.firstName}
                        </Card.Text>
                    </Col>
                    <Col lg={2}>
                        <Button variant="outline-info" size="sm" onClick={updateName}>Edit</Button>
                    </Col>
                    <Col lg={4}>
                        <Card.Text style = {{color : "blueViolet"}}>
                            <b>Handle</b>
                        </Card.Text>
                    </Col>
                    <Col lg={8}>
                        <Card.Text>
                            {currentUser.handle}
                        </Card.Text>
                    </Col>
                    <Col lg={4}>
                        <Card.Text style = {{color : "blueViolet"}}>
                            <b>Status</b>
                        </Card.Text>
                    </Col>
                    <Col lg={8}>
                        <Card.Text>
                            {currentUser.status}
                        </Card.Text>
                    </Col>
                    <Col lg={4}>
                        <Card.Text style = {{color : "blueViolet"}}>
                            <b>Mobile</b>
                        </Card.Text>
                    </Col>
                    <Col lg={6}>
                        <Card.Text>
                            {currentUser.mobile}
                        </Card.Text>
                    </Col>
                    <Col lg={2}>
                        <Button variant="outline-info" size="sm" onClick={updateMobile}>Edit</Button>
                    </Col>
                    <Col lg={4}>
                        <Card.Text style = {{color : "blueViolet"}}>
                            <b>Email</b>
                        </Card.Text>
                    </Col>
                    <Col lg={6}>
                        <Card.Text>
                            {currentUser.email}
                        </Card.Text>
                    </Col>
                    <Col lg={2}>
                        <Button variant="outline-info" size="sm" style={{marginTop:"10px"}} onClick={updateEmail}>Edit</Button>
                    </Col>
                    <Col lg={4}>
                        <Card.Text style = {{color : "blueViolet"}}>
                            <b>Following</b>
                        </Card.Text>
                    </Col>
                    <Col lg={8}>
                        <Card.Text>
                            {followingCount}
                        </Card.Text>
                    </Col>
                    <Col lg={4}>
                        <Card.Text style = {{color : "blueViolet"}}>
                            <b>MyPosts</b>
                        </Card.Text>
                    </Col>
                    <Col lg={8}>
                        <Card.Text>
                            {postCount}
                        </Card.Text>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
            <Modal show={showModal1} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" name = 'Name' onChange={changeValue}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-info" onClick= {updateDetails}>
                            Update
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={showModal3} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Email" name = 'Email' onChange={changeValue}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-info" onClick= {updateDetails}>
                            Update
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={showModal2} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Mobile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group controlId="formBasicMobile">
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile" name = 'Mobile' onChange={changeValue}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-info" onClick= {updateDetails}>
                            Update
                        </Button>
                    </Modal.Footer>
            </Modal>
            </Container>
    )
}

const mapStateToProps = (state , ownProps) => {

    return {
        currentUser : state.credentials_reducer,
        postCount : state.profile_reducer.PostsCount,
        followingCount : state.profile_reducer.FollowingCount
        
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        loadMyPostsCount : (handle) => dispatch(loadMyPostsCount(handle)),
        loadMyFollowingCount : (handle) => dispatch(loadMyFollowingCount(handle)),
        updateNameInDatabase : (handle , name) => dispatch(updateNameInDatabase(handle ,name)),
        updateMobileInDatabase : (handle ,mobile) => dispatch(updateMobileInDatabase(handle ,mobile)),
        updateEmailInDatabase : (handle ,email) => dispatch(updateEmailInDatabase(handle ,email)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)