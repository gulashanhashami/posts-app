
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
const StyledDiv=styled.div`
.contain{
    width:98%;
    height:90vh
   
    margin:auto;
    overflow-y: scroll;
    border:1px solid grey;
    display:grid;
    grid-template-columns: repeat(3, 32%);
    justify-content:space-between;
}
.card{
    padding:2%;
    margin-top:2vh;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    // border:1px solid red;

}
input{
    margin-top:5vh;
    width:40%;
    height:5vh;
    margin-left:.1%;
}
button{
    width:7%;
    height:5.9vh;
    background-color: black;
    color:white;
}

`;
export const Posts=()=>{
const [postData, setPostData] =useState([]);
const [sdata, setSdata] = useState("");

useEffect(()=>{
    getData();
}, [])

   const getData=()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
        // console.log(data.data)
        setPostData(data.data)
     })
   }

   function result(){
   var arr=postData.filter((value)=>{
    if(sdata===""){
        return value;
    }
    else if(value.title.toLowerCase().includes(sdata.toLocaleLowerCase())){
        return value;
    }
    
   })
   setPostData(arr)
   
   }
   console.log(postData)
   


    return (
        <StyledDiv>
        <input type="text" onChange={(e)=>{setSdata(e.target.value)}} placeholder="Search" />
        <button onClick={result}>Search</button>
        <div className="contain">
        {postData.map((list)=>{
            return (
                <div className="card" key={list.id}>
                  <p>Title: {list.title}</p>
                  <p>Body :{list.body}</p>
                </div>
            )
        })}
        </div>
        </StyledDiv>
    )
}