import HeaderNavigation from "../components/HeaderNavigation.js";
import UserInfo from "../components/UserInfo.js";
import styled from "styled-components";
import Post from "../components/Posts/Post.js";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Global.js";
import axios from "axios";
import { BackendLink } from "../settings/urls.js";
import { render } from "@testing-library/react";
import TrendingContainer from "../components/TrendingContainer.js";

export default function UsersPosts() {
    const navigate = useNavigate()
    const [user, setUser] = useContext(AuthContext)
    const { id } = useParams()
    const [UserPosts, setUsersPosts] = useState(null)
    const [render, setRender] = useState(false)

    /*const UserPosts =
    {
        user: {
            username: "Pablo",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhze-QNnca2liBrhRj4CjswGZSkqbhvSDJsQ&usqp=CAU"
        },
        posts: [
            {
                id:1,
                link: "https://www.whatsapp.com/?lang=pt_br",
                comentary: "Olha essa plataforma que legal #discord",
            }
        ]
    }*/

    useEffect(() => {
        if (localStorage.getItem("user")) {
            const data = JSON.parse(localStorage.getItem("user"))

            setUser(data)

            axios.get(`${BackendLink}posts/users/${id}`, { headers: { Authorization: `Bearer ${data.token}` } })
                .then(res => setUsersPosts(res.data))
                .catch(err => console.log(err))
        }else{
            navigate("/")
        }
    }, [id, render])

    if(user === false){
        navigate("/")
    }

    return (
        <BackGround>
            <HeaderNavigation />
            <MainScreen>

                {UserPosts === null ? null :
                    <UsersPostsDisplay>
                        <div className="container">
                            <UserInfo photo={UserPosts.user.image_url} name={UserPosts.user.username} />
                            <div className="interactions">
                                <div className="posts">
                                    {UserPosts.posts.map((p) => <Post postInfo={p} userInfo={UserPosts.user} />)}

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </UsersPostsDisplay>
                }
                <TrendingContainer/>
            </MainScreen>
            
        </BackGround>
    )
}

const BackGround = styled.div`
    background-color: #333333;
`

const MainScreen = styled.main`
    width: 95%;
    display: flex;
    justify-content: center;
    margin: 0px auto;

    @media (max-width: 735px){
        width: 100%
    }
`

const UsersPostsDisplay = styled.main`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    background-color: #333333;

    .interactions{
        margin-top: 30px;
    }

    .container{
        max-width: 1000px;
        width: 100%;
    }
    .posts{
        @media (max-width: 735px){
            width: 100%
        }
    }

`
