import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';

export default function LikeButton(){  
    const [liked, isLiked] = useState(false);
    const numberLikes = 156;

    function like(){
        isLiked(!liked);
    }

    return(
        <LikeDiv onClick={like} liked={liked}>
            {liked 
            ? 
            <AiFillHeart /> 
            : 
            <AiOutlineHeart />}
            <p disabled={true}>{numberLikes} likes</p>
        </LikeDiv>
    )
}

const LikeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg{
        font-size: 40px;
        color: ${(props) => (props.liked ? "red" : "white")};
    }
    p{
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF;
        -webkit-touch-callout: none;  
        -webkit-user-select: none;    
        -khtml-user-select: none;     
        -moz-user-select: none;       
        -ms-user-select: none;        
        user-select: none;           
    }
`