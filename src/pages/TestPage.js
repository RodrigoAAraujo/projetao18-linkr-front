import { useState } from "react"
import { AiOutlineComment} from 'react-icons/ai/index.js';
import styled from "styled-components"
import ComentaryTab from "../components/Comments/ComentaryTab.js";

export default function TestPage() {
    const [isOpen, setIsOpen] = useState(false);
    const comments = ["nossa que bom", "ficou top", "parabens"]

    return(
        <Container>
            <Post>
                <CommentaryButton onClick={() => setIsOpen(!isOpen)}>
                    <AiOutlineComment/>
                    <a>{comments.length} comments</a>
                </CommentaryButton>
            </Post>
            {isOpen 
            ?
               <ComentaryTab post_id={5}/> 
            :
                null
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 735px;
`

const Post = styled.div`
    background-color: #171717;
    width: 100%;
    height: 276px;
    background: #171717;
    border-radius: 16px;
`

const CommentaryButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    svg{
        font-size: 30px;
        color: #FFFFFF;
        margin-top: 5px;
    }
    p{
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF;
         
    }
    a{
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF; 
   
    }
`