import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalProvider } from "./components/Global";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";

function App() {
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