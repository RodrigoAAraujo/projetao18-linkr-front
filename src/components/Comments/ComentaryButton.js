import { AiOutlineComment} from 'react-icons/ai/index.js';
import styled from 'styled-components';

export default function CommentaryButton() {
    const comments = ["nossa que bom", "ficou top", "parabens"]

    return(
        <CommentaryDiv>
            <AiOutlineComment/>
            <a>{comments.length} comments</a>
        </CommentaryDiv>
    )
}

const CommentaryDiv = styled.div`
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
        -webkit-touch-callout: none;  
        -webkit-user-select: none;    
        -khtml-user-select: none;     
        -moz-user-select: none;       
        -ms-user-select: none;        
        user-select: none;           
    }
    a{
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF; 
        -webkit-touch-callout: none;  
        -webkit-user-select: none;    
        -khtml-user-select: none;     
        -moz-user-select: none;       
        -ms-user-select: none;        
        user-select: none;    
    }

`