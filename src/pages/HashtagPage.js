import { useParams } from "react-router";
import styled from "styled-components"
import HeaderNavigation from "../components/HeaderNavigation.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../components/Global.js"
import axios from "axios";
import { BackendLink } from "../settings/urls.js"
import Post from "../components/Posts/Post.js"
import TrendingContainer from "../components/TrendingContainer.js"
import {Container, EnglobaConteudo, Title} from "./Timeline.js"

export default function HashtagPage() {
    const [boolPublish, setBoolPublish] = useState(false)
    const [atualizador, setAtualizador] = useState(0)
    const [resposta, setResposta] = useState(null)
    const [link, setLink] = useState("")
    const [comentary, setCommentary] = useState("")
    const navigate = useNavigate();
    const[user, setUser] = useContext(AuthContext)   
    const [render, setRender] = useState(false)
    const { hashtag } = useParams();
    
    useEffect(() => {
        if (localStorage.getItem("user")) {
            const data = JSON.parse(localStorage.getItem("user"));
            setUser(data);
            axios.get(`${BackendLink}timeline`, {headers: {Authorization: `Bearer ${data.token}`}} )
                .then(res => setResposta(res.data))
                .catch(err => console.log(err))
        }else{
            navigate("/")
        };
    }, [render])

    if(user === false){
        navigate("/")
    };

    console.log(resposta)
    return (
        <>
            <HeaderNavigation/>
            <Container>
                <EnglobaConteudo>
                    <Title># react</Title>
                    <div>Aqui será a HashtagPage da hashtag {hashtag}</div>
                    {resposta?resposta.map((p) => 
                    <Post postInfo={{id: p.id,link: p.link,comentary: p.comentary}} 
                        userInfo={{username :p.username, image_url: p.image_url}} 
                        renderer={{render, setRender}}
                    />): null}        
                </EnglobaConteudo>
                <TrendingContainer/>
            </Container>
        </>
    )
};





