import styled from "styled-components"
import {AiOutlineHeart} from "react-icons/ai/index.esm.js"

export default function Posts(){

    return (
        <ContainerPost>
            <EnglobaFotoUsuarioPost>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjizFCh-SE-AM_5LdvTcADq1gT0vNNBVoAw&usqp=CAU" />
                <AiOutlineHeart className="vazio"/>
            </EnglobaFotoUsuarioPost>
            <ConteudoPostagem>
                <NomeUsuario>Nome do usuario que postou</NomeUsuario>
                <DescricaoPost>Descrição do post - Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</DescricaoPost>
                <EnglobaConteudoLink onClick>
                    <EnglobaTextosLink>
                        <TituloLink>Como aplicar o Material UI em um projeto React</TituloLink>
                        <DescricaoLink>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</DescricaoLink>
                        <Link>https://medium.com/@pshrmn/a-simple-react-router</Link>
                    </EnglobaTextosLink>
                    <ImagemLink> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjizFCh-SE-AM_5LdvTcADq1gT0vNNBVoAw&usqp=CAU" /> </ImagemLink>
                </EnglobaConteudoLink>
            </ConteudoPostagem>
        </ContainerPost>
    )

}

const EnglobaFotoUsuarioPost = styled.div`
height: 100%;
width: 50px;
display: flex;
flex-direction: column;
align-items: center;
img{
    height: 50px;
    width: 50px;
    border-radius: 26.5px;
}
.vazio{
    color: white;
    margin-top: 12px;
    font-size: 20px;
}
p{
    
}
`
const ContainerPost = styled.div`
margin-bottom: 10px;
width: 100%;
height: 275px;
display: flex;
flex-direction: row;
background: #171717;
border-radius: 16px;
padding: 18px;
@media (max-width: 735px){
    border-radius: 0px;
    height: 230px;
}
`
const ConteudoPostagem = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: 100%;
margin-left: 18px;
`
const NomeUsuario = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
color: #FFFFFF;
@media (max-width: 735px){
    font-size: 17px;
    line-height: 20px;
}
`
const DescricaoPost = styled.p`
padding: 8px 0 3px 0;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
color: #B7B7B7;
margin-bottom: 7px;
@media (max-width: 735px){
    font-size: 15px;
    line-height: 18px;
}
`
const EnglobaConteudoLink = styled.div`
display: flex;
flex-direction: row;
border: 1px solid #4D4D4D;
border-radius: 11px;
width: 97%;
height: 160px;
@media (max-width: 735px){
    height: 120px;
}
`
const EnglobaTextosLink = styled.div`
width: 70%;
height: 100%;
display: flex;
flex-direction: column;
padding: 22px 25px 22px 22px;
@media (max-width: 735px){
    padding: 5px 7px 5px 5px;
}
`
const TituloLink = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 19px;
color: #CECECE;
margin-bottom: 8px;
@media (max-width: 735px){
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 3px;
}
`
const DescricaoLink = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 13px;
color: #9B9595;
@media (max-width: 735px){
    font-size: 10px;
    line-height: 11px;
}
`
const Link = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #CECECE;
margin-top: 13px;
@media (max-width: 735px){
    font-size: 10px;
    line-height: 11px;
    margin-top: 6px;
}
`
const ImagemLink = styled.div`
width:30%;
height: 100%;
img{
    width: 100%;
    height: 100%;
    border-radius: 0px 12px 13px 0px;
}
`