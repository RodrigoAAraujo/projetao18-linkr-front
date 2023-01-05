import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { AuthContext, GlobalProvider, sessionRenew } from "./components/Global";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";

function App() {
  const [, setUser] = useContext(AuthContext)

  useEffect(()=>{
    try {
      const getUser = JSON.parse(window.localStorage.getItem('user'))
      if (getUser){
        setUser(getUser)
        sessionRenew(getUser.token)
      }
    } catch (error) {
      alert(error)
    }
  },[])

  return (
    <AppStyle>
      <GlobalStyle/>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
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