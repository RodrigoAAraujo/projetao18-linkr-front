import styled from "styled-components"
import { useEffect, useState } from "react"
import {AiOutlineHeart ,AiFillHeart} from "react-icons/ai/index.esm.js"
import axios from 'axios'
import LikeButton from "./LikeButton.js"

export default function Posts(props){

    const [boolLike, setBoolLike] = useState(false)
    const [resposta, setResposta] = useState('')

    function mudaLike(){
        setBoolLike(!boolLike)
    }

    useEffect(() => {

        const URL = "http://localhost:8080/timeline"
    
        //adaptar config pra receber o token correto
        const config = {
          headers: {
            Authorization: `Bearer tokenpadrao`
          }
        }
        const requisicao = axios.get(URL, config);
    
        //ainda falta colocar a verificaçao do token
        
        requisicao.then((res) => {
          setResposta(res.data)
          console.log(res.data, "resposta do servidor no get /posts", resposta)
        });
    
        requisicao.catch((err) => {
          console.log("deu erro!")
          console.log(err)
        })
    
      }, []);

      console.log(resposta, "resposta")

      if(resposta !== ''){

          return (

              resposta.map(item =>
                  <ContainerPost>
                      <EnglobaFotoUsuarioPost>
                          <img src={item.img} />
                          <LikeButton postId={item.id}/>
                      </EnglobaFotoUsuarioPost>
                      <ConteudoPostagem>
                          <NomeUsuario>{item.username}</NomeUsuario>
                          <DescricaoPost>{item.comentary}</DescricaoPost>
                          <EnglobaConteudoLink onClick>
                              <EnglobaTextosLink>
                                  <TituloLink>{item.metadata.title}</TituloLink>
                                  <DescricaoLink>{item.metadata.description}</DescricaoLink>
                                  <Link>{item.metadata.url}</Link>
                              </EnglobaTextosLink>
                              <ImagemLink> <img src={item.metadata.image} /> </ImagemLink>
                          </EnglobaConteudoLink>
                      </ConteudoPostagem>
                  </ContainerPost>
              )


          )

      }
    

    
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
    margin-top: 15px;
    font-size: 20px;
    cursor: pointer;
}
.cheio{
    color: red;
    margin-top: 15px;
    font-size: 20px;
    cursor: pointer;
}
p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #FFFFFF;
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