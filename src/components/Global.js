import { createContext, useContext, useState } from "react"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"
import { useNavigate } from "react-router-dom";

export const apiURL = 'http://localhost:3000/'

//Pode-se criar quantos Contexts forem necessarios e manter
//tudo simples enquanto usarmos apenas esse GlobalProvider
//segue exemplo comentado--->

export const AuthContext = createContext([false, () => {}])
// export const CartContext = createContext([[], () => {}])

export const GlobalProvider = ({children}) => {
    const [user, setUser] = useState(false);
    // const [cart, setCart] = useState([]);

    return (
        // <CartContext.Provider value={[cart, setCart]}>
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
        // </CartContext.Provider>
    )
}


export const Loading = (props) => {
    return <ThreeDots
        height={props.height === undefined ? 24 : props.height} 
        width={props.width === undefined ? 50 : props.height} 
        radius={props.radius === undefined ? 9 : props.height}
        color={props.color === undefined? "#ffffff" : props.color} 
        ariaLabel="three-dots-loading"
        visible={true}
    />
}

export function startSessionRenewer(token){
    setInterval(() => {
        const URL = apiURL+"renew"

        const config = {
          headers: { "Authorization": "Bearer "+token }
        }

        const promise = axios.post(URL, {}, config)
        
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
            logout()
        })
    }, 60000);
}

export function logout(){
    const [, setUser] = useContext(AuthContext)
    const navigate = useNavigate()
    setUser(false)
    window.localStorage.removeItem("user")
    navigate("/")
}