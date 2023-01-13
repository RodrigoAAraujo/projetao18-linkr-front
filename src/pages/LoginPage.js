import styled from "styled-components"
import { LoginForm } from "../components/LoginForm.js"

export default function LoginPage(){

    return(
        <LoginPageStyle>
            <div className="title">
                <h1>linkr</h1>
                <h2>save, share and discover<br/>the best links on the web</h2>
            </div>
            <div className="form-wrapper">
                <LoginForm/>
            </div>
        </LoginPageStyle>
    )
}

const LoginPageStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 735px){
    flex-direction: column;
    }

    .title{
        width: 65%;
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #151515;
        @media (max-width: 735px){
        flex-direction: column;
        width: 100%;
        height: 35%;
        align-items: center;
    }

        h1{
            margin-left: 15%;
            font-family: 'Passion One';
            font-weight: 700;
            font-size: 86px;
            letter-spacing: 0.05em;
            @media (max-width: 735px){
                margin-left: 0;
                font-size: 74px;
            }        
        }
        h2{
            margin-left: 15%;
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 36px;
            @media (max-width: 735px){
                margin-left: 0;
                font-size: 18px;
            }
        }
    }
    .form-wrapper{
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 735px){
            width: 100%;
            align-items: flex-start;
        }
    }
`;