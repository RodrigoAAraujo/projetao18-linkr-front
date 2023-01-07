import styled from "styled-components"

export default function UserInfo({photo, name}){
    console.log(photo)

    return(
        <UserInfoStyle>
            <img src={photo}/>
            <h2>{name}`s posts</h2>
        </UserInfoStyle>
    )
}

const UserInfoStyle = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 18px;
    }

    h2{
        font-family: 'Oswald', sans-serif;
        font-size: 43px;
        font-weight: 700;
        color: #FFFFFF;
    }
`