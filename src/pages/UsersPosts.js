import HeaderNavigation from "../components/HeaderNavigation.js";
import UserInfo from "../components/UserInfo.js";
import styled from "styled-components";
import Post from "../components/Post.js";

export default function UsersPosts(){

    const UserPosts =
        {
            user:{
                username: "Pablo",
                image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhze-QNnca2liBrhRj4CjswGZSkqbhvSDJsQ&usqp=CAU"
            },
            posts:[
                {
                    link: "https://discord.com/",
                    comentary: "Olha essa plataforma que legal #discord",
                    likes: "123",
                    liked: true
                }
            ]
    
        }
    

    return(
        <>
            <HeaderNavigation/>
            <UsersPostsDisplay>
                <UserInfo photo={UserPosts.user.image_url} name={UserPosts.user.username}/>
                <div className="interactions">
                    <div className="posts">
                        {UserPosts.posts.map((p) => <Post postInfo ={p} userInfo={UserPosts.user}/>)} 

                    </div>
                    <div>

                    </div>
                </div>
            </UsersPostsDisplay>
        </>
    )
}

const UsersPostsDisplay = styled.main`
    margin-top: 60px;

    .interactions{
        margin-top: 48px;
    }

`