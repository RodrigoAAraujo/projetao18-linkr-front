import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { BackendLink } from "../../settings/urls.js"
import { AuthContext } from "../Global.js"

export default function EditPost({edit, postId, render}){
    const [comentary, setComentary] = useState("")
    const [user] = useContext(AuthContext)

    function editSend(e){
        e.preventDefault()

        axios.put(`${BackendLink}posts/${postId}`,{comentary}, {headers : {Authorization: `Bearer ${user.token}`}})
            .then(edit(false), render.setRender(!render.render) )
            .catch()
    }

    return( 
        <EditStyle>
            <form onSubmit={(e) => editSend(e)}>
                <textarea required onChange={(e) => setComentary(e.target.value)} value={comentary}></textarea>
                <div>
                    <button className="simple-back" type="button" onClick={() => edit(false)}>Go Back</button>
                    <button type="submit">Edit Post</button>
                </div>
            </form>
        </EditStyle>
    )
}

const EditStyle = styled.div`
    background-color: #FFFFFF;
    border-radius: 7px;
    width: 100%;
    margin-top: 8px;


    form{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 14px;
    }

    textarea{
        max-width: 80%;

        font-family: 'Lato';
        font-size: 14px;
        font-weight: 400;    
    }

    div{
        width: 15%;
        align-self: center;
        display: flex;
        flex-direction: column;

        button{
            padding: 4px 10px;
            border: none;
            border-radius: 5px;
            background-color: #1877F2;
            color: #FFFFFF;
            margin-bottom: 8px;
            cursor: pointer;

            :hover{
                opacity: 0.8;
            }
        }

        .simple-back{
            background-color: #FFFFFF;
            color: #1877F2;
        }
    }
`