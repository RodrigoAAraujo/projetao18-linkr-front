import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
<<<<<<< HEAD
import { GlobalProvider } from "./components/Global";
import LikeButton from "./components/LikeButton";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";
=======
import { apiURL, AuthContext, Login } from "./components/Global.js";
import { GlobalProvider } from "./components/Global.js";
import HeaderNavigation from "./components/HeaderNavigation.js";
import HomePage from "./pages/HomePage.js";
import SignUpPage from "./pages/SignupPage.js";
import Timeline from "./pages/Timeline.js"
import axios from "axios";
import UsersPosts from "./pages/UsersPosts.js";
import LoginPage from "./pages/LoginPage.js";
>>>>>>> 4b1cd4fdeb6f24af291f30b9f7fc6eb7039904d1

function App() {
  const [, setUser] = useContext(AuthContext)
  

  useEffect(()=>{
      const getUser = JSON.parse(window.localStorage.getItem('user'))
      if (getUser){
        setUser(getUser)
        Login(getUser.token, setUser)
      }
  },[])

  return (
    <AppStyle>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/timeline" element={<Timeline/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/test" element={<LikeButton/>}/>
          </Routes>
        </BrowserRouter>
    </AppStyle>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333333;
`