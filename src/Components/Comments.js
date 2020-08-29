import React from 'react';
import {Button,InputGroup,FormControl} from 'react-bootstrap'
import { useState } from 'react'

export default function Comments() {

    const [comment,setComment] = useState("");
    const [commentsList,setCommentsList] = useState([]);

    const handleChange = (event) => {

        let target = event.target;
        setComment(target.value)
    }

    const handleSubmit = () => {
    
        setCommentsList([...commentsList,comment])
        setComment("")
    }

    return (
        <div>
            <h6>Comments</h6>
            {
                commentsList.map((obj,id)=>
                    <p>{obj}</p>
                )
            }
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Comment Here!!"
                aria-describedby="basic-addon2"
                name="comment"
                value={comment}
                onChange = {handleChange}
                />
                <InputGroup.Append>
                <Button variant="outline-success" onClick={handleSubmit}>Comment</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}