import styled from "styled-components";

export const Titulo = styled.h1`
 color: pink;
`

export const MainHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
padding: 2%;

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
 }
  button:hover {
    background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color:#dfdfdf;
  }
`
