import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";

const Wrapper2 = styled.div`
	padding: 20px 30px;
	background-color: rgba(227, 235, 232, 0.771);
	width: 450px;
	max-width: 450px;
	box-sizing: border-box;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.59);
	@media (max-width: 768px) {
		max-width: 280px;
		display: block;
	}
`;
const LoginH2 = styled.h2`
	color: #333;
	text-align: center;
	margin: 0;
	padding: 0;
`;
const LoginLabel = styled.label`
	display: block;
	font-size: 20px;
	//text-shadow: rgb(102, 102, 102) 1px 1px 1px;
	padding: 13px 0px;
	@media (max-width: 768px) {
		font-size: small;
		font-weight: 500;
	}
`;

const LoginBtn = styled.button`
	margin: 20px 20px;
	border-radius: 5px;
	background-color: rgba(29, 157, 114, 0.22);
	@media (max-width: 768px) {
	margin: 15px 7px 0px;	
	}
`;

const Input = styled.input`
	width: 100%;
	border-radius: 10px;
	height: 45px;
	border: none;
`;
const LastBtnConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
		
}
`
function Register() {
	const [userForm, setUser] = useState({});
	const { createUser } = UserAuth();
	const navigate = useNavigate();

	const handleChanges = (e) => {
		setUser({ ...userForm, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			if (userForm !== undefined) {
				await createUser(userForm?.email, userForm?.password);
				navigate("/usuario");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Wrapper2>
				<LoginH2>Crear cuenta </LoginH2>
				<form onSubmit={handleSubmit}>

					<div>
						<LoginLabel>Dirección Email:</LoginLabel>
						<Input name="email" onChange={handleChanges} type="email" />
					</div>
					<div>
						<LoginLabel>Contraseña:</LoginLabel>
						<Input
							name="password"
							onChange={handleChanges}
							className="p-3 rounded-md text-black"
							type="password"
						/>
					</div>
					<LastBtnConteiner>
						<LoginBtn>Crear Cuenta</LoginBtn>
						<Link to="/">
							<LoginBtn>Volver al Menú</LoginBtn>
						</Link>
					</LastBtnConteiner>
				</form>
			</Wrapper2>
		</div>
	);
}

export default Register;
