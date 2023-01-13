import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BackendLink } from "../../settings/urls.js"
import { AuthContext } from "../Global.js"
import Comment from "./Comment.js"
import NewComment from "./NewComment.js"

export default function ComentaryTab(props) {
    const {postId} = props;
    const [comments, setComments] = useState()
    const [userId, setUserId] = useState(0);
    //const [user] = useContext(AuthContext)
    
    //variaveis de teste 
    const token = 'fb0e860b-b04f-4a16-81a5-ab9d90fdf33f'

    function verifyComments(){
        const promise = axios.get(`${BackendLink}posts/comments/${postId}`, 
        {headers: {
            "Authorization": `Bearer ${token/*user.token*/}`
        }})
        promise.then((c) => {
            setComments(c.data.comments)
            setUserId(c.data.user_id)
        })
        promise.catch((err) => {console.log(err);alert("Sessão expirada! Por favor, logar novamente!")})
    }

    useEffect(() => {
        verifyComments()
    }, [])

    if(!comments){
        return(
            <Container>
                Carregando comentários
            </Container>
        )
    }

    return(
        <Container>
            {comments.map((c) => 
            <Comment comment={c.comment} username={c.username} image_url={c.image_url}/>
            )}
            <NewComment/>
        </Container>
    )
}

const Container = styled.div`
    background-color: #1E1E1E;
    font-family: 'Lato', sans-serif;
    padding: 17px;
    border-radius: 16px;
    margin-bottom: 16px;
    width: 100%;
    max-width: 735px;

    @media (max-width: 735px){
        border-radius: 0px;
        width: 100%;
    }
`
