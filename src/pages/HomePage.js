import { useContext } from "react"
import styled from "styled-components";
import { AuthContext } from "../components/Global"
import LoginPage from "./LoginPage";


export default function HomePage(){
    const [user,] = useContext(AuthContext);

    if (user === false){
        return <LoginPage/>
    }

    return(
        <HomePageStyle>
            HomePage
        </HomePageStyle>
    )
}


const HomePageStyle = styled.div`

`
