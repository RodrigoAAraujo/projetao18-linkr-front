import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { apiURL, AuthContext } from "./components/Global";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";
import axios from "axios";

function App() {
  const [, setUser] = useContext(AuthContext)
  

  useEffect(()=>{
      const getUser = JSON.parse(window.localStorage.getItem('user'))
      if (getUser){
        setUser(getUser)
        setInterval(() => {
          const URL = apiURL+"renew"
          const config = {
            headers: { "Authorization": "Bearer "+getUser.token }
          }
          const promise = axios.post(URL, {}, config)
          promise.catch((a)=>{
              const msg = a.response;
              alert(msg)
              Logout()
          })
          promise.then(()=>{
            console.log("renovado")
          })
      }, 10000);

      }
  },[])

  function Logout(){
    alert("logout")
    setUser(false)
    window.localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <AppStyle>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
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