import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { apiURL, AuthContext, Login } from "./components/Global.js";
import { GlobalProvider } from "./components/Global.js";
import HeaderNavigation from "./components/HeaderNavigation.js";
import HomePage from "./pages/HomePage.js";
import SignUpPage from "./pages/SignupPage.js";
import Timeline from "./pages/Timeline.js"
import axios from "axios";

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
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/timeline" element={<Timeline/>}/>
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