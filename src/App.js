import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { AuthContext, Login } from "./components/Global.js";
import SignUpPage from "./pages/SignupPage.js";
import Timeline from "./pages/Timeline.js"
import UsersPosts from "./pages/UsersPosts.js";
import LoginPage from "./pages/LoginPage.js";
import CommentaryButton from "./components/Comments/ComentaryButton.js";
import TestPage from "./pages/TestPage.js";


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
            <Route path="/test" element={<TestPage/>}/>
            <Route path="/users/:id" element={<UsersPosts/>}/>
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