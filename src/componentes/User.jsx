import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { StartFirebase } from "../services/index";
import { ref, update } from "firebase/database";
import { updatePassword, updateProfile } from "firebase/auth";
import { getUserById } from "../redux/actions";
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/actions";
import styled from "styled-components";

const MyAccountBtn = styled.button`
	background-color: #1abc9c;
	color: white;
	padding: 5px 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	height: 45px;
	margin: 7px 10px;
	&:hover {
		background-color: #148f77;
	}
`;
const ContactWrapper = styled.div`
	margin-left: 3%;
	padding: 30px;
	background-color: rgb(218 218 218 / 72%);
	max-width: 500px;
	box-sizing: border-box;
	border-radius: 10px;
	@media (max-width: 768px) {
		margin: 0 20px;
		width: auto;
	}
`;
const Input = styled.input`
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: #f1f1f1;
	margin-bottom: 10px;
	width: 100%;
	font-size: 16px;
	color: #666;
`;
const ContactLabel = styled.label`
	font-size: 16px;
	font-weight: 600;
	display: block;
	padding: 9px 0;
	text-shadow: 1px 1px 1px #666;
`;

function User() {
	const [userForm, setUserForm] = useState({});
	const dispatch = useDispatch();
	const { user, logout } = UserAuth();

	const handleChanges = (e) => {
		setUserForm({ ...userForm, [e.target.name]: e.target.value });
	};
	const db = StartFirebase();

	const changeName = async () => {
		if (userForm.name !== undefined) {
			const idUser = await user?.uid;
			await updateProfile(user, { displayName: userForm.name });
			await update(ref(db, "usuarios/" + idUser), {
				nombre: userForm.name,
			});
			setUserForm({ ...userForm, name: "" });
		}
	};

	const handleLogout = async (e) => {
		e.preventDefault();
		try {
			await logout();
			dispatch(clearUser());
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		dispatch(getUserById(user?.uid));
	}, [user]);

	return (
		<div>
			<div>
				<h1>Usuario</h1>
				<h2>Nombre: {user?.displayName}</h2>
				
			</div>
			//fomulario para cambiar los campos del usuario
			<ContactWrapper>
				<form>
					<ContactLabel>Nombre</ContactLabel>
					<Input
						type="text"
						name="name"
						placeholder="Nombre"
						value={userForm.name}
						onChange={(e) => handleChanges(e)}
					/>
					<MyAccountBtn onClick={changeName}>Cambiar nombre</MyAccountBtn>
                    <ContactLabel>Password</ContactLabel>
					<Input
						type="password"
						name="password"
						placeholder="Contraseña"
						value={userForm.password}
						onChange={handleChanges}
					/>
					<MyAccountBtn onClick={() => updatePassword(user, userForm.password)}>
						Cambiar contraseña
					</MyAccountBtn>
					<MyAccountBtn onClick={(e) => handleLogout(e)}>
						Logout
					</MyAccountBtn>
				</form>
			</ContactWrapper>
		</div>
	);
}

export default User;
