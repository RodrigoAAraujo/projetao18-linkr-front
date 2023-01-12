import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Global.js";
import styled from "styled-components";
import { BackendLink } from "../settings/urls.js";

export function RegisterForm(){
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [url, setUrl] = useState("")
    const [load, setLoad] = useState(false)

    function submit(e){
        e.preventDefault()
        setLoad(true)

        const URL = BackendLink+"signup"

        const body = {
            email,
            username,
            password,
            image_url: url
        }
        const promise = axios.post(URL, body)
        
        promise.then((a)=>{
            console.log(a)
            navigate("/")
        })
        promise.catch((a)=>{
            setLoad(false)
            console.log(a)
            const msg = a.response.data;
            console.log(msg)
            alert(msg)
        })
    }

    return(
        <FormStyle onSubmit={submit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e=> setUsername(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e=> setPassword(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="text"
                placeholder="Picture Url"
                value={url}
                onChange={e=> setUrl(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <button 
                type="submit"
                disabled={load === true ? "disabled" : ""}
            >{load === false ? "Sign Up" : <Loading/>}</button>
            
            <button
                className="switch"
                disabled={load === true ? "disabled" : ""}
                onClick={()=> navigate("/")}
            >Switch back to log in
            </button>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    margin: 35px;
    width: 100%;

    input{
        border: none;
        padding: 14px;
        border-radius: 8px;
        margin-block: 6px;
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 16px;
    }
    input::placeholder{
        color: #9F9F9F;
    }
    button{
        border: none;
        padding: 10px;
        border-radius: 8px;
        margin-block: 6px;
        background-color: #1877F2;
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 22px;
        color: white;
    }
    .switch{
        background-color: transparent;
        padding: 2px;
        font-size: 16px;
        text-decoration-line: underline;
    }
`