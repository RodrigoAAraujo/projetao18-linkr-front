import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BackendLink } from "../settings/urls.js"
import SearchBar from "./SearchBar.js"
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

export default function HeaderNavigation(){
    const [logout, setLogout] = useState(false)

    //const user = localStorage.getItem("user")

    function logoutAction(){

    }

    return(
        <HeaderStyle logout={logout}>
            <h1>linkr</h1>
            <SearchBar></SearchBar>
            <div className="user" onClick={() => setLogout(!logout)}>
                {logout?
                    <BiChevronUp/>:
                    <BiChevronDown/>
                }
                

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjizFCh-SE-AM_5LdvTcADq1gT0vNNBVoAw&usqp=CAU"/>
            </div>
            <section>
                <h2 onClick={() => logoutAction()}>Logout</h2>
            </section>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    background-color: #151515;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;
    position: relative;

    h1{
        font-family: 'Passion One', cursive;
        color: #FFFFFF;
        font-size: 45px;
        font-weight: 700;


    }
    .user{
        display: flex;
        align-items: center;

        cursor: pointer;

        svg{
            color: #FFFFFF;
            font-size: 34px;
        }
        img{
            width: 53px;
            aspect-ratio: 1;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    section{
        position: absolute;
        right: ${props => props.logout? "0px": "-150px"};
        bottom: -43px;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 43px;
        width: 150px;
        background-color: #171717;
        border-radius: 0px 0px 0px 20px;

        h2{
            cursor: pointer;
            color: #FFFFFF;
            font-family: 'Lato', sans-serif;
            font-size: 15px;
            font-weight: 700;
        }
    }

`