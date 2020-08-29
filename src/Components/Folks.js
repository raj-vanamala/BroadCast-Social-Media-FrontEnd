import React,{ useEffect } from 'react'
import {  loadBuddyListBackend , UnFollowHandle } from '../Actions/HANDLES_ACTIONS'
import { Card ,ListGroup,Spinner,Button } from 'react-bootstrap'
import {connect} from 'react-redux'

function Folks({user,loadBuddyList,buddyList,unFollowHandle2}) {

    useEffect(()=>{

        loadBuddyList(user.handle);

    },[loadBuddyList , user.handle])

    const unFollowHandle = (handle) =>{

        unFollowHandle2(user.handle , handle);

    }

    return (
        <>
        <Card style={{ width: '18rem',fontFamily:"cursive"}}>
            <Card.Header style={{color : "blueViolet",fontWeight : "bolder"}}>BroadCast Buddies</Card.Header>
            <ListGroup variant="flush">
                {
                    (buddyList.length === 0)?
                    <Spinner animation="grow" role="status" variant="info" style={{marginLeft:"50%"}}>Loading...</Spinner>
                    :
                    buddyList.map((obj,id) =>
                        <ListGroup.Item key = {id}>
                        <Button variant="outline-info" size="sm" onClick={()=>unFollowHandle(obj)}>UnFollow</Button>
                        {obj}
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </Card>
        </>
    )
}


const mapStateToProps = (state) => {

    return {

        user : state.credentials_reducer,
        buddyList : state.handles_reducer.buddyList
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        loadBuddyList : (handle) => dispatch(loadBuddyListBackend(handle)),
        unFollowHandle2 : (userHandle , handle) => dispatch(UnFollowHandle(userHandle , handle))

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Folks)