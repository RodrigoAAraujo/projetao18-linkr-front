import axios from "axios"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { BackendLink } from "../settings/urls.js"
import SearchBar from "./SearchBar.js"

export default function HeaderNavigation(){
    //const {token} = useContext(TokenContext)

    useEffect(()=>{
        axios.get(BackendLink, {headers: {Authorization: `Bearer `}})
            .catch(err =>{
                console.log(err)
            })
    }, [])

    return(
        <HeaderStyle>
            <h1>linkr</h1>
            <SearchBar></SearchBar>
            <div>

            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    background-color: #151515;
    height: 72px;
    display: flex;
    align-items: center;

    h1{
        font-family: 'Passion One', cursive;
        color: #FFFFFF;
        font-size: 45px;
        font-weight: 700;


    }

`