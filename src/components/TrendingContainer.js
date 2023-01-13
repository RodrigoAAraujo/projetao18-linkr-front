import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BackendLink } from "../settings/urls.js";

export default function TrendingContainer() {
    const [hashtags, setHashtags] = useState([]);
    useEffect(() => {
        const promise = axios.get(`${BackendLink}trending`);
        console.log(`${BackendLink}trending`);
		promise.then(response => {
            console.log(response);
            setHashtags(response.data);
        });
        promise.catch((err)=>{console.log(err.message)})
	}, []);
    return (
        <Container>
            <h1>trending</h1>
            <hr/>
            {hashtags.map(hashtag=> <div># {hashtag.name}</div>)}
        </Container>
    );
  }
  const Container = styled.div`
  background-color: #171717;
  width: 301px;
  max-height: 406px;
  box-sizing: border-box;
  padding-top: 9px;
  padding-bottom: 23px;
  border-radius: 16px;
  margin-left: 25px;
  margin-top: 100px;
  h1{
    margin-left: 16px;
    font-size: 27px;
    font-weight: bold;
  }
  hr{
    margin-top: 12px;
    margin-bottom: 22px;
  }
  div{
    margin-bottom: 7px;
    margin-left: 16px;
    font-size: 19px;
    font-weight: bold;
  }
  
;
  `;