import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Card ,ListGroup,Spinner,Button } from 'react-bootstrap'
import { loadHandlesBackend ,followHandle } from '../Actions/HANDLES_ACTIONS'

function FindHandles({user , handles , FindHandles , followHandle2}) {

    useEffect(()=>{
        
        FindHandles(user.handle)

    },[FindHandles,user.handle])

    const followHandle = (handle) => {

        followHandle2(user.handle , handle);

    }

    return (
        <>
        <Card style={{ width: '18rem',fontFamily:"cursive" }}>
            <Card.Header style={{color : "blueViolet",fontWeight : "bolder"}}>BroadCast Handles</Card.Header>
            <ListGroup variant="flush">
                {
                    (handles.length === 0)?
                    <Spinner animation="grow" role="status" variant="info" style={{marginLeft:"50%"}}>Loading...</Spinner>
                    :
                    handles.map((handle,id) =>
                        <ListGroup.Item key = {id}>
                        <Button variant="outline-info" size="sm" onClick = {()=>followHandle(handle)}>Follow</Button>
                        {handle}
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
        handles : state.handles_reducer.handles
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        FindHandles : (handle) => dispatch(loadHandlesBackend(handle)),
        followHandle2 : (userHandle , handle) => dispatch(followHandle(userHandle , handle))

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(FindHandles)