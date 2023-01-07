import styled from "styled-components"
import HeaderNavigation from "../components/HeaderNavigation.js"
import Posts from "../components/Posts.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext, authContext } from "react"


export default function Timeline() {

    const [boolPublish, setBoolPublish] = useState(false)
    const [form, setForm] = useState({ value: "", description: "", bool: true })
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        
    }

    return (
        <>
            <HeaderNavigation/>

            <Container>
                <EnglobaConteudo>

                    <Title>timeline</Title>
                    <PostagemUsuario>
                        <EnglobaFotoUsuario> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjizFCh-SE-AM_5LdvTcADq1gT0vNNBVoAw&usqp=CAU" /> </EnglobaFotoUsuario>
                        <EnglobaForm>
                            <div>What are you going to share today?</div>
                            <LinkInput placeholder="http://..." />
                            <DescricaoInput placeholder="Awesome article about #javascript" />
                            <PublishButton disabled={boolPublish}>Publish</PublishButton>
                        </EnglobaForm>
                    </PostagemUsuario>
                    
                   <Posts/>

                </EnglobaConteudo>
            </Container>
        </>
    )

}


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 71px;
background-color: #333333;
@media (max-width: 735px){
    padding-top: 0;
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
height: 280px;
width: 100%;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
display: flex;
flex-direction: row;
padding: 18px;
@media (max-width: 735px){
    border-radius: 0;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    height: 172px;
}
`
const EnglobaFotoUsuario = styled.div`
height: 100%;
width: 50px;
img{
    height: 50px;
    width: 50px;
    border-radius: 26.5px;
}
@media (max-width: 735px){
    display: none;
}
`

const EnglobaForm = styled.form`
display: flex;
flex-direction: column;
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

width: 90%;
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
shadow-box: none;
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
height: 100px;
background: #EFEFEF;
border-radius: 5px;
border: none;
shadow-box: none;
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
@media (max-width: 735px){
    height: 22px;
}
`




