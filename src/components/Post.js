import { ReactTagify } from "react-tagify"
import styled from "styled-components"

export default function Post({ postInfo, userInfo }) {

    const tagStyle = {
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: '17px',
        cursor: 'pointer'
    };


    return (
        <PostStyle>
            <div className="user-likes">
                <img src={userInfo.image_url} />


            </div>
            <div className="post">
                <h3>{userInfo.username}</h3>
                <ReactTagify tagStyle={tagStyle}>
                    {postInfo.comentary}
                </ReactTagify>
                


            </div>
        </PostStyle>
    )
}

const PostStyle = styled.div`
    background-color:#171717;
    display: flex;
    font-family: 'Lato', sans-serif;;
    padding: 17px;
    border-radius: 16px;

    .user-likes{
        margin-right: 18px;
        img{
            width: 50px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 50%;
        }
        
    }

    .post{
        color: #B7B7B7;

        h3{
            font-size: 17px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
`
