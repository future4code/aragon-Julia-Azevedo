import styled from "styled-components";

export const TituloPerfis = styled.h1`
color: pink;
display: flex;
flex-direction: column;
align-items: center;
`

export const Container = styled.figure`
display: flex;
flex-direction: column;
align-items: center;

 h3 {
     color:grey;
 }

 button{
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color:#ededed;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	color:grey;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    margin: 1%;
 }
  button:hover {
    background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color:#dfdfdf;
  }
`