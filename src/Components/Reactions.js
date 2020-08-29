import React from 'react';
import { useState } from 'react'

export default function Reactions() {

    const [likeCount,setLikeCount] = useState(0);
    const [disLikeCount,setDisLikeCount] = useState(0);
    const [loveCount,setLoveCount] = useState(0);

    const likeIncrement = () => {
        setLikeCount(likeCount + 1)
    }

    const disLikeIncrement = () => {
        setDisLikeCount(disLikeCount + 1)
    }

    const loveIncrement = () => {
        setLoveCount(loveCount + 1)
    }

    return(
        <div>
            <span role="img" aria-label="itsAlike" style={{marginRight : "30px"}} onClick={likeIncrement}>{likeCount}👍</span>
            <span role="img" aria-label="itsADislike" style={{marginRight : "30px"}} onClick={disLikeIncrement}>{disLikeCount}👎</span>
            <span role="img" aria-label="itsALove" style={{marginRight : "30px"}} onClick={loveIncrement}>{loveCount}❤️</span>
        </div>
    )
}