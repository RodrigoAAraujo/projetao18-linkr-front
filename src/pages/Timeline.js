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

export default function Timeline() {
    const [boolPublish, setBoolPublish] = useState(false)
    const [atualizador, setAtualizador] = useState(0)
    const [resposta, setResposta] = useState(null)
    const [link, setLink] = useState("")
    const [comentary, setCommentary] = useState("")
    const navigate = useNavigate();
    const[user, setUser] = useContext(AuthContext)   
    const [render, setRender] = useState(false)
    
    useEffect(() => {
        if (localStorage.getItem("user")) {
            const data = JSON.parse(localStorage.getItem("user"))

            setUser(data)

            axios.get(`${BackendLink}timeline`, {headers: {Authorization: `Bearer ${data.token}`}} )
                .then(res => setResposta(res.data))
                .catch(err => console.log(err))
        }else{
            navigate("/")
        }
    }, [render])

    function sendPost(e){
        e.preventDefault()

        setBoolPublish(true)

        axios.post(`${BackendLink}timeline`, {link, comentary} ,{headers: {Authorization: `Bearer ${user.token}`}})
            .then(() => {
                console.log("boa")
                setRender(!render)
                setLink("")
                setCommentary("")
                setBoolPublish(false)
            })
            .catch(() => setBoolPublish(false))

    }

    if(user === false){
        navigate("/")
    }


    console.log(resposta)
    return (
        <>
            <HeaderNavigation/>

            <Container>
                <EnglobaConteudo>

                    <Title>timeline</Title>
                    <PostagemUsuario>
                        <EnglobaFotoUsuario> <img src={user.image_url}/> </EnglobaFotoUsuario>
                        <form onSubmit={(e) => sendPost(e)}>
                            <div>What are you going to share today?</div>
                            <LinkInput placeholder="http://..." required name="link" onChange={(e) => setLink(e.target.value)} value={link}/>
                            <DescricaoInput placeholder="Awesome article about #javascript" name="description" onChange={(e) => setCommentary(e.target.value)} value={comentary}/>
                            <PublishButton type="submit" disabled={boolPublish}>
                                {(boolPublish === false) ? "Publicar" : "Publicando..."}
                            </PublishButton>
                        </form>
                    </PostagemUsuario>

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

}


const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top: 53px;
background-color: #333333;
@media (max-width: 735px){
    padding-top: 0;
}

form{
    display: flex;
    flex-direction: column;
    width: 90%;

div{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    @media (max-width: 735px){
        display: flex; 
        align-items: center;
        justify-content: center;
    }
}
}
`
const EnglobaConteudo = styled.div`

width: 710px;
display: flex;
flex-direction: column;
@media (max-width: 735px){
    width: 100%;
}

`
const PostagemUsuario = styled.div`
margin-bottom: 30px;
width: 100%;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
display: flex;
flex-direction: row;
padding: 18px;

@media (max-width: 735px){
    border-radius: 0;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
    height: 172px;
}
`
const EnglobaFotoUsuario = styled.div`
height: 100%;
width: 50px;
margin-right: 18px;
img{
    height: 50px;
    width: 50px;
    border-radius: 26.5px;
}
@media (max-width: 735px){
    display: none;
}
`

const Title = styled.p`
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
margin: 0 0 43px 0;
@media (max-width: 735px){
    margin: 0 0 23px 17px;
}
`
const LinkInput = styled.input`
width: 100%;
height: 40px;
background: #EFEFEF;
border-radius: 5px;
border: none;
padding-left: 2%;
margin-top: 2%;
::placeholder,
::-webkit-input-placeholder {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #949494;
    @media (max-width: 735px){
        font-size: 13px;
    }
}
@media (max-width: 735px){
    height: 30px;
}
`
const DescricaoInput = styled.textarea`
width: 100%;
max-width: 100%;
height: 100px;
background: #EFEFEF;
border-radius: 5px;
border: none;
padding-top: 2%;
padding-left: 2%;
margin-top: 1%;
::placeholder,
::-webkit-input-placeholder {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    color: #949494;
    @media (max-width: 735px){
        font-size: 15px;
    }
}
@media (max-width: 735px){
    height: 47px;
}
`
const PublishButton = styled.button`
background: #1877F2;
border-radius: 5px;
width: 112px;
height: 31px;
border: none;
color: white;
cursor: pointer;
margin: 6px 0 0 0;
align-self: flex-end;
@media (max-width: 735px){
    height: 22px;
}
`
export {Container, EnglobaConteudo, Title};




