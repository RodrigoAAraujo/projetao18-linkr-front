import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { BackendLink } from "../settings/urls.js";
import { AuthContext } from "./Global.js";

export default function ConfirmationScreen({back, postId, render}){
    const [user] = useContext(AuthContext)


    function deletePost(){
        axios.delete(`${BackendLink}posts/${postId}`,{headers : {Authorization: `Bearer ${user.token}`}})
            .then(() => {
                render.setRender(!render.render)
                back()
            })
            .catch(err => console.log(err))
    }

    return(
        <Fogger>
            <div>
                <h5>
                    Are you sure you want
                    to delete this post?
                </h5>
                <section>
                    <button className="white-back" onClick={() => back()}>No, go back </button>
                    <button onClick={() => deletePost()}>Yes, delete it</button>
                </section>
        
            </div>
        </Fogger>
    )
    
}

const Fogger = styled.div`
    position: fixed;
    top: 0; left: 0;

    width: 100%;
    height: 100%;
    z-index: 100;

    background-color: #FFFFFFE5;

    display: flex;
    align-items: center;
    justify-content: center;

    div{
        background-color: #333333;
        border-radius: 50px;
        padding:  50px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h5{
            font-family: 'Lato';
            font-size: 34px;
            font-weight: 700;
            color: #FFFFFF;
        }
        button{
            font-family: 'Lato';
            font-size: 18px;
            font-weight: 700;
            padding: 8px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #1877F2;
            color: #FFFFFF;

            :hover{
                opacity: 0.9;
            }

        }
        section{
            display: flex;
            margin-top: 40px;
            width: 40%;
            justify-content: space-between;

            .white-back{
                background-color: #FFFFFF;
                color:#1877F2;
            }
        }
        
    }
;
`