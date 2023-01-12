import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ReactTagify } from "react-tagify"
import styled from "styled-components"
import { BackendLink } from "../../settings/urls.js";
import { AuthContext } from "../Global.js";
import LikeButton from "./LikeButton.js";
import { FaPencilAlt } from "react-icons/fa/index.esm.js";
import { FaTrash } from "react-icons/fa/index.esm.js";
import ConfirmationScreen from "../ConfirmationScreen.js";

export default function Post({ postInfo, userInfo, renderer}) {

    const [linkMeta,setLinkData]= useState(null)
    const [user] = useContext(AuthContext)
    const [mine, setMine] = useState(false)
    const [confirmation, setConfirmation] = useState(false)

    console.log(postInfo)

    const tagStyle = {
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: '17px',
        cursor: 'pointer'
    };

    useEffect(()=>{
        const body ={
            link: postInfo.link
        }

        axios.post(`${BackendLink}posts/links`, body ,{headers : {Authorization: `Bearer ${user.token}`}})
            .then(res => {setLinkData(res.data); console.log(res.data)})
            .catch(err => console.log(err))

        if(userInfo.username === user.username){
            setMine(true)
        }

    },[postInfo])

    
    return (
        <PostStyle>
            <div className="user-likes">
                <img src={userInfo.image_url} />
                <LikeButton postId={postInfo.id}/>
            </div>
            <div className="post">
                <section>
                    <h3>{userInfo.username}</h3>
                    {mine?
                        <div>
                            <FaPencilAlt/>
                            <FaTrash onClick={() => setConfirmation(true)}/>
                        </div>: 
                    null}
                </section>
                <ReactTagify tagStyle={tagStyle}>
                    {postInfo.comentary}
                </ReactTagify>
                {linkMeta === null? null :
                    <LinkInfo>
                        <a href={linkMeta.url} target="_blank">
                            <div>
                                <h4>{linkMeta.title}</h4>
                                <p>{linkMeta.description}</p> 
                                <a>{linkMeta.url}</a>     
                            </div>   
                            <img src={linkMeta.image}/>       
                        </a>
                    </LinkInfo>
                }
            </div>
            {confirmation? <ConfirmationScreen back={setConfirmation} postId={postInfo.id} render={renderer}/>: null}
        </PostStyle>
    )
}

const PostStyle = styled.div`
    background-color:#171717;
    display: flex;
    font-family: 'Lato', sans-serif;
    padding: 17px;
    border-radius: 16px;
    margin-bottom: 16px;

    @media (max-width: 735px){
        border-radius: 0px;
        width: 100%;
    }

    .user-likes{
        margin-right: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10%;
        img{
            width: 50px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 50%;
            margin-bottom: 19px;
        }
        
    }

    .post{
        color: #B7B7B7;

        width: 100%;
        h3{
            font-size: 17px;
            font-weight: 400;
            color: #FFFFFF;
        }
        section{
            display: flex;
            justify-content: space-between;
            margin-bottom: 7px;

            svg{
                cursor: pointer;
                color: #FFFFFF;
                font-size: 18px;
                margin-right: 12px;
            }
        }
    }
`
const LinkInfo = styled.div`

    display: flex;
    border-radius: 11px;
    border: 1px solid #4D4D4D;
    margin-top: 15px;
    cursor: pointer;
    width: 100%;

    a{
        display: flex;
        text-decoration:none;
        color: #FFFFFF;
        width: 100%;
    }

    :hover{
        div{
            a{
                color: #1877F2;
            }
        }
        
    }

    div{
        padding: 24px 19px;
        h4{
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            font-weight: 400;
            color: #CECECE;

        }
        p{
            font-family: 'Lato', sans-serif;
            font-size: 11px;
            font-weight: 400;
            color: #9B9595;
            margin: 6px 0px;
        }
        a{
            font-family: 'Lato', sans-serif;
            font-size: 11px;
            font-weight: 400;

            
        }
    }

    
    img{
        border-radius: 0px 11px  11px 0px;
        aspect-ratio: 1;
        object-fit: cover;
        width: 100%;
        max-width:200px;
    }
`