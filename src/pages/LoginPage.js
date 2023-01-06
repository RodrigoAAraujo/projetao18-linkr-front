import styled from "styled-components"
import { LoginForm } from "../components/LoginForm"



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

    .title{
        width: 65%;
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #151515;

        h1{
            margin-left: 15%;
            font-family: 'Passion One';
            font-weight: 700;
            font-size: 86px;
            letter-spacing: 0.05em;
        }
        h2{
            margin-left: 15%;
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 36px;
        }
    }
    .form-wrapper{
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;