import { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai/index.js';
import styled from 'styled-components';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import axios from 'axios';
import { AuthContext } from '../Global.js';
import { BackendLink } from '../../settings/urls.js';

export default function LikeButton(props){
    const [liked, isLiked] = useState(false);
    const [listLikes, setListLikes] = useState([]);
    const [userId, setUserId] = useState(0);
    const [user] = useContext(AuthContext)
    
    function verifyLike(){
        const promise = axios.get(`${BackendLink}posts/likes/${props.postId}`,
        {headers: {
            "Authorization": `Bearer ${user.token}`
        }});
        promise.then((r) => {
            isLiked(r.data.userLikedThisPost)
            setListLikes(r.data.likes)
            setUserId(r.data.userId)
        })
    }

    useEffect(() =>{
        verifyLike()
    }, [])

    function like(){
        
        if(liked === false){
            const promise = axios.post(`${BackendLink}posts/like/${props.postId}`, 
            {}, {headers: {
                Authorization: `Bearer ${user.token}`
            }})
            promise.then(() => {verifyLike();
            return isLiked(true)});
            promise.catch((err) => console.log(err))

        }
        else{
            
            const promise = axios.delete(`${BackendLink}posts/removelike/${props.postId}`, 
            
            {headers: {
                "Authorization": `Bearer ${user.token}`
            }})
            promise.then(() => {verifyLike();
                return isLiked(false)});
            promise.catch((err) => console.log(err))
        }
    };

    function tooltipMessage(){
        if (liked) {

            if (listLikes.length !== 0) {
                const newArray = listLikes.filter(i => i.id !== userId)
                switch (listLikes.length) {
                    case 1:
                        return (<p>Voc??</p>)
                    case 2:
                        return (<p>Voc?? e {newArray[0].username}</p>)
                    case 3:
                        return (<p>Voc??, {newArray[0].username} e outra pessoa</p>)
                    default:
                        return (<p>Voc??, {newArray[0].username} e outras {newArray.length - 1} pessoas</p>)
                }
            }
            
        } else{
            if (listLikes.length !== 0) {
                switch (listLikes.length) {
                    case 0:
                        return (<p>Ningu??m curtiu isso</p>)
                    case 1:
                        return (<p>{listLikes[0].username}</p>)
                    case 2:
                        return (<p>{listLikes[0].username} e {listLikes[1].username}</p>)
                    case 3:
                        return (<p>{listLikes[0].username}, {listLikes[1].username} e outra pessoa</p>)
                    default:
                        return (<p>{listLikes[0].username}, {listLikes[1].username} e outras {listLikes.length - 2} pessoas</p>)
                }
            }
              
        }
    }

    return(
        <Content>
            <LikeDiv onClick={() => like()} liked={liked}>
                {liked 
                ? 
                <AiFillHeart /> 
                : 
                <AiOutlineHeart />}    
            </LikeDiv>
            <div>
                <a id="like-box">{listLikes.length} likes</a>
                <Tooltip anchorId="like-box" content={
                    liked 
                    ? 
                    () => tooltipMessage()
                    :
                    () => tooltipMessage()
                } />  
            </div>
        </Content>
    )
}

const LikeDiv = styled.div`
    cursor: pointer;
    svg{
        font-size: 30px;
        color: ${(props) => (props.liked ? "red" : "white")};
        margin-top: 5px;
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;

    a{
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