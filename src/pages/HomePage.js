import { useContext } from "react"
import styled from "styled-components";
import { AuthContext } from "../components/Global.js"
import LoginPage from "./LoginPage.js";
import { useNavigate } from "react-router-dom";
import HeaderNavigation from "../components/HeaderNavigation.js";


export default function HomePage(){
    const navigate = useNavigate();
    const [user,] = useContext(AuthContext);

    if (user === false){
        navigate("/")
    }

    return(
        <HomePageStyle>
            <HeaderNavigation/>
            HomePage
        </HomePageStyle>
    )
}


const HomePageStyle = styled.div`
    span{
        font-weight: bold; /* Hashtags das publicações */ 
    }
`