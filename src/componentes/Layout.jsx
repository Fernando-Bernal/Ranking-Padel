import React from "react";
import Login from "./Login";
import Register from "./Register";
import styled from "styled-components";

const BackgroundRadiant = styled.div`
background-image: linear-gradient(rgba(23, 139, 135, 0.564), rgba(87, 172, 169, 0.132));
height: 100vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap-reverse;
@media (max-width: 768px) {
	display: flex;
	height: auto;
	padding: 15px 0;
	font-size: small;
}
`;

function Layout() {
	return (
		<>
		<div>
			<BackgroundRadiant>
				<Register />
				<Login />
			</BackgroundRadiant>
		</div>
		</>
	);
}

export default Layout;