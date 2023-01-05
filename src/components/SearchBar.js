import styled from "styled-components"
import { IoSearchOutline} from "react-icons/io5";
import {DebounceInput} from 'react-debounce-input';
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendLink } from "../settings/urls";

export default function SearchBar(){
    const [userInput,  setUserInput] = useState("")
    const [users, setUsers] = useState(null)

    //const user = localStorage.getItem("user")

    useEffect(() =>{
        if(userInput !== ""){
            axios.get(`${BackendLink}users/${userInput}`, {headers: {Authorization: `Bearer ${/*user.token*/users}`}})
                .then(res =>{
                    setUsers(res)
                    console.log(res)
                })
                .catch(err =>{
                    console.log(err)
                })
        }
        

    }, [userInput])

    return(
        <SearchBarStyle>
            <DebounceInput placeholder="search for people" minLength={3} debounceTimeout={300} onChange={(e) => setUserInput(e.target.value)}></DebounceInput>
            <IoSearchOutline/>
        </SearchBarStyle>
    )
}

const SearchBarStyle = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    min-width: 350px;
    height: 45px;
    justify-content: space-between;
    padding: 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    svg{
        color: #C6C6C6;
        font-size: 24px;
    }

    input{
        border: none;
        outline: none;
        height: 20px;
        width: 100%;
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 400;
        color: #767676;

        ::placeholder{
            font-family: 'Lato', sans-serif;
            font-size: 19px;
            font-weight: 400;
            color: #C6C6C6;
        }
    }
`

