import styled from "styled-components"
import { IoSearchOutline} from "react-icons/io5/index.esm.js";
import {DebounceInput} from 'react-debounce-input';
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendLink } from "../settings/urls.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Global.js";
import { useContext } from "react";

export default function SearchBar(){
    const [userInput,  setUserInput] = useState("")
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const [user] = useContext(AuthContext)


    useEffect(() =>{
        if(userInput !== ""){
            axios.get(`${BackendLink}users/${userInput}`, {headers: {Authorization: `Bearer ${user.token}`}})
                .then(res =>{
                    res.data.map((u) => u.user)
                })
                .catch(err =>{
                    console.log(err)
                })
        }
        else{
            setUsers([])
        }
    }, [userInput])

    function goToUserPage(e){
        e.preventDefault()
        if(users.length !== 0) {
            navigate(`/users/${users[0].id}`)
        }
    }

    return(
        <SearchBarStyle>
            <form onSubmit={(e) => goToUserPage(e)}>
                <DebounceInput  className="desktop" placeholder= "search for people" 
                    minLength={3} debounceTimeout={300} onChange={(e) => setUserInput(e.target.value)} value={userInput}>
                </DebounceInput>
                <DebounceInput className="mobile" placeholder= "search for people and friends" 
                    minLength={3} debounceTimeout={300} onChange={(e) => setUserInput(e.target.value)} value={userInput}>
                </DebounceInput>
                <button>
                    <IoSearchOutline />
                </button>
            </form>
            {users.length === 0? null : <UsersDisplay users={users} input={setUserInput}/>}
        </SearchBarStyle>
    )
}

function UsersDisplay({users, input}){
    const navigate = useNavigate()
    
    return(
        <UsersDisplayStyle>
            {users.map((u) => 
                <div onClick={() => {
                    navigate(`/users/${u.id}`); 
                    input("")
                }}>
                    <img src={u.image_url}/>
                    <h2>{u.username}</h2>
                </div>
            )}
        </UsersDisplayStyle>
    )
}

const SearchBarStyle = styled.div`
    position: relative;
    border-radius: 8px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 12;
    width: 50%;
    max-width: 700px;
    

    @media (max-width: 600px){
        position: absolute;
        top:72px;
        left: 0px;
        width: 100%;
        justify-content: center;
        margin: 10px 0px;
        z-index: -5;

        .mobile{
            display: block;
        }
        .desktop{
            display: none;
        }
   }

   @media(min-width: 600px){
        .mobile{
            display: none;
        }
        .desktop{
            display: block;
        }
   }



    svg{
        color: #C6C6C6;
        font-size: 24px;
        cursor: pointer;
    }

    input{
        border: none;
        outline: none;
        height: 24px;
        width: 100%;
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 400;
        color: #767676;
        cursor: text;

        ::placeholder{
            font-family: 'Lato', sans-serif;
            font-size: 19px;
            font-weight: 400;
            color: #C6C6C6;
        }

    }
    form{
        padding: 0px 14px;
        background-color: #FFFFFF;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        border-radius: 8px;

        @media (max-width: 600px){
            width: 95%;
        }

        button{
            background-color: #FFFFFF;
            border: none;
        }
    }
`


const UsersDisplayStyle = styled.div`
    background-color:#E7E7E7;
    position: absolute;
    left: 0px;
    top: 39px;
    padding: 10px 0px;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    z-index: -5;

    @media (max-width: 600px){
        width: 95%;
        margin-left: 2.5%;
    }

    div{
        padding: 5px;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.2s;


        img{
            width: 39px;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 50%;

        }

        :hover{
            background-color: #C7C7C7;
        }

        h2{
            font-family: 'Lato', sans-serif;
            font-size: 19px;
            font-weight: 400;
            color: #515151;
        }
    }
`

