import axios from 'axios';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi/index.js';
import styled from 'styled-components';
import { BackendLink } from '../../settings/urls.js';

export default function NewComment() {
    const [comment, setComment] = useState();

    //Variaveis temporarias
    const post_id = 5;
    const user_id = 13;
    const token = 'fb0e860b-b04f-4a16-81a5-ab9d90fdf33f'

    function sendComment(){
        const promise = axios.post(`${BackendLink}posts/comments`, 
        {
            "postId": post_id,
            "userId": user_id,
            "comment": comment
        }, {headers: {
            "Authorization": `Bearer ${token}`
        }})
        promise.then((p) => console.log(p))
        promise.catch((err) => console.log(err))
    }

    return(
        <Content>
            <img/>
            <div className="inputArea">
                <input 
                onChange={e=> setComment(e.target.value)}
                placeholder="Write a comment..."/>
                <FiSend onClick={() => sendComment()}/>
            </div>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;

    input{
        width: 80%;
        height: 39px;
        background: #252525;
        border-radius: 8px;
        position: absolute;
    }

    svg{
        font-size: 22px;
        color: #FFFFFF;
        z-index: 3;
        position: absolute;
        right: 0;
    }

    .inputArea{
        display: flex;
        position: relative;
        background-color: yellow;
    }
`