import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import {Logout} from "./Global.js"
import SearchBar from "./SearchBar.js"
import { BiChevronUp, BiChevronDown } from "react-icons/bi/index.esm.js";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./Global.js"

export default function HeaderNavigation(){
    const [logoutOn, setLogoutOn] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useContext(AuthContext)

    return(
        <HeaderStyle logout={logoutOn}>
            <section>
                <h1 onClick={() => navigate("/timeline")}>linkr</h1>
                <SearchBar></SearchBar>
                <div className="user" onClick={() => setLogoutOn(!logoutOn)}>
                    {logoutOn?
                        <BiChevronUp/>:
                        <BiChevronDown/>
                    }
                    

                    <img src={user.image_url}/>
                </div>
            </section>
            <section className="logout" onClick={() => Logout(setUser)}>
                <h2>Logout</h2>
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
    padding: 0px 14px;
    position: relative;
    z-index: 10;
    position: relative;

    @media (max-width: 600px){
        margin-bottom: 65px;
    }

    h1{
        font-family: 'Passion One', cursive;
        color: #FFFFFF;
        font-size: 45px;
        font-weight: 700;
        cursor: pointer;

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
        background-color:#151515;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .logout{
        position: absolute;
        right: 0px;
        bottom: ${props => props.logout? "-43px": "0px"};;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 43px;
        width: 150px;
        background-color: #171717;
        border-radius: 0px 0px 0px 20px;
        z-index: -3;
        cursor: pointer;
        transition: 0.1s;

        :hover{
            background-color: #252525;
        }

        h2{
            color: #FFFFFF;
            font-family: 'Lato', sans-serif;
            font-size: 15px;
            font-weight: 700;
        }
    }

`