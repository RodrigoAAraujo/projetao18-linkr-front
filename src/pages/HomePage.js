import { useContext } from "react"
import styled from "styled-components";
import { AuthContext } from "../components/Global"
import LoginPage from "./LoginPage";
import ReactHashtag from "react-hashtag";
import { useNavigate } from "react-router-dom";
import HeaderNavigation from "../components/HeaderNavigation";


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
            <ReactHashtag onHashtagClick={val => navigate(`/hashtag/${val.split("#")[1]}`)}>
                Este jeito de escrever será utilizado para destacar as hastags de cada publicação #exemplo1 #exemplo2
            </ReactHashtag>
        </HomePageStyle>
    )
}


const HomePageStyle = styled.div`
    span{
        font-weight: bold; /* Hashtags das publicações */ 
    }
`