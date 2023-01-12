import HeaderNavigation from "../components/HeaderNavigation.js";
import UserInfo from "../components/UserInfo.js";
import styled from "styled-components";
import Post from "../components/Post.js";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Global.js";
import axios from "axios";
import { BackendLink } from "../settings/urls.js";

export default function UsersPosts() {
    const navigate = useNavigate()
    const [user, setUser] = useContext(AuthContext)
    const { id } = useParams()
    const [UserPosts, setUsersPosts] = useState(null)

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


    console.log(user)
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
    }, [])

    if(user === false){
        navigate("/")
    }

    return (
        <>
            <HeaderNavigation />
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
        </>
    )
}

const UsersPostsDisplay = styled.main`
    margin-top: 60px;
    display: flex;
    justify-content: center;

    .interactions{
        margin-top: 30px;
    }

    .container{
        max-width: 1000px;
    }
    .posts{
        width: 70%;
    }

`