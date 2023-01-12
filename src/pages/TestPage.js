import { useState } from "react"
import styled from "styled-components"
import CommentaryButton from "../components/Comments/ComentaryButton.js"
import ComentaryTab from "../components/Comments/ComentaryTab.js";

export default function TestPage() {
    const [isOpen, setIsOpen] = useState(true);

    return(
        <Container>
            {(isOpen 
            ?
            <> 
            <Post>
                <CommentaryButton onClick={() => {setIsOpen(!isOpen);console.log("abriu")}}/>
                <ComentaryTab/>
            </Post>
            
            </>
            :
            <Post>
                <CommentaryButton onClick={() => {setIsOpen(!isOpen);console.log("abriu")}}/>
            </Post> 
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Post = styled.div`
    background-color: #171717;
    width: 90vw;
    height: 276px;
    background: #171717;
    border-radius: 16px;
    z-index: 10;
`