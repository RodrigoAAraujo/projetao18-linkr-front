import styled from "styled-components"

export default function Comment(props) {
    const {image_url, username, comment} = props 

    return(
        <Content>
            <img src={image_url}/>
            <div>
                <div className="topbar">
                    <p>{username}</p>
                    <p>• following</p>
                </div>
                <div className="text">
                    <p>{comment}</p>
                </div>
            </div>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 68px;
    
    img{
        border-radius: 50%;
        background-color: yellow;
        height: 39px;
        width: 39px;
        margin-right: 18px;
    }

    .topbar{
        display: flex;
        align-items: center;
        margin-bottom: 4px;

        p:nth-child(1){
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: #F3F3F3;
            margin-right: 5px;
        }
        p:nth-child(2){
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #565656;
        }
    }

    .text{
        p{
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #ACACAC; 
        }
    }
`