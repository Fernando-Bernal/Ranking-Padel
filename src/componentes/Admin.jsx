import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { StartFirebase } from "../services/index";
import { ref, set, update } from "firebase/database";
import { crearFecha } from "../redux/actions";

function validate(data) {
	let errors = {};
	if (data.Jugador1 === "") {
		errors.Jugador1 = "El nombre del jugador es obligatorio";
	} else errors.Jugador1 = "";
	if (data.Jugador2 === "") {
		errors.Jugador2 = "El nombre del jugador es obligatorio";
	} else errors.Jugador2 = "";
	if (data.Resultado === "") {
		errors.Resultado = "El resultado es obligatorio";
	} else errors.Resultado = "";
	if (data.Puntos === "") {
		errors.Puntos = "Los puntos son obligatorios";
	} else errors.Puntos = "";
	return errors;
}

function Admin() {
	const dispatch = useDispatch();
	const fechas = useSelector((state) => state.fechas);
	const competencias = useSelector((state) => state.competencias);
	const [numFecha, setNumFecha] = useState("");
	const [errors, setErrors] = useState({});
	const [data, setData] = useState({
		Categoria: "Padel",
		Jugador1: "",
		Jugador2: "",
		Resultado: "",
		Puntos: "",
    Fecha: "",
	});

	//que handleNewFecha me agregue el valor del ContactInput en la db llamando a crearFecha  y que se agregue a la lista de fechas
	const handleNewFecha = async (e) => {
		e.preventDefault();
		dispatch(crearFecha(numFecha));
	};

	const handleChange = (e) => {
		setNumFecha(e.target.value);
	};

	function handleChangeDatos(e) {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...data,
				[e.target.name]: e.target.value,
			})
		);
	}
	
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const db = StartFirebase();
      await set(ref(db, `Torneo1/${data.Fecha}/${data.Categoria}`), {
        Categoria: data.Categoria,
        Jugador1: data.Jugador1,
        Jugador2: data.Jugador2,
        Resultado: data.Resultado,
        Puntos: data.Puntos,
      });
    } catch (error) {
      console.log(error);
           
    }
  };

	return (
		<Container>
			<h1>Admin</h1>
			<DivFecha>
				<h2>Añade una fecha</h2>
				<span>Fecha anterior {fechas[fechas.length - 1]}</span>
				<ContactInput
					type="text"
					name="Fecha"
					onChange={(e) => handleChange(e)}
				/>
				<button onClick={handleNewFecha}>Añadir</button>
			</DivFecha>
			<DivCarga>
				<h2>Carga de datos</h2>
				<form>
          <DivSections>
            <ContactLabel htmlFor="Fecha">Fecha: </ContactLabel>
            <Select name="Fecha" onChange={(e) => handleChangeDatos(e)}>
              {fechas.map((fecha) => (
                <option value={fecha}>{fecha}</option>
              ))}
            </Select>
          </DivSections>
					<DivSections>
						<ContactLabel htmlFor="Categoria">Categoria: </ContactLabel>
						<select name="Categoria" onChange={(e) => handleChangeDatos(e)}>
							{competencias.map((competencia) => (
								<option value={competencia}>{competencia}</option>
							))}
						</select>
					</DivSections>
					<DivSections>
						<ContactLabel htmlFor="Jugador1">Jugador 1:</ContactLabel>
						<Select name="Jugador1" onChange={(e) => handleChangeDatos(e)}>
							<option disabled selected value>
								{" "}
								-- Elije un jugador --{" "}
							</option>
							<option value="Fer">Fer</option>
							<option value="Javi">Javi</option>
							<option value="Hugo">Hugo</option>
							<option value="Benja">Benja</option>
						</Select>
					</DivSections>
					<DivSections>
						<ContactLabel htmlFor="Jugador2">Jugador 2: </ContactLabel>
						<Select name="Jugador2" onChange={(e) => handleChangeDatos(e)}>
							<option disabled selected value>
								{" "}
								-- Elije un jugador --{" "}
							</option>
							<option value="Fer">Fer</option>
							<option value="Javi">Javi</option>
							<option value="Hugo">Hugo</option>
							<option value="Benja">Benja</option>
						</Select>
					</DivSections>
          <DivSections>
				<ContactLabel htmlFor="Resultado">Resultado</ContactLabel>
				<ContactInput
					type="text"
					name="Resultado"
					onChange={(e) => handleChangeDatos(e)}
				/>
        </DivSections>
        <DivSections>
				<ContactLabel htmlFor="Puntos">Puntos</ContactLabel>
				<ContactInput
					type="number"
					name="Puntos"
					onChange={(e) => handleChangeDatos(e)}
          />
        </DivSections>
				{/* {errors.Jugador1 === "" &&
          errors.Jugador2 === "" &&
          errors.Resultado === "" &&
        errors.Puntos === "" ? ( */}
				<Button onClick={handleSubmit}>Cargar</Button>
				{/* // ) : (
          //   <p>Debes completar los campos</p>
        // )} */}
        </form>
			</DivCarga>
		</Container>
	);
}

export default Admin;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  background-color: #88a3e7;
  width: 100vw;
`;

const DivFecha = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DivCarga = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ContactLabel = styled.label`
	font-size: 1.5rem;
	display: inline-block;
	padding: 13px 0;
	color: #110b0b;
	text-shadow: 1px 1px 1px #666;
`;

const ContactInput = styled.input`
	width: 50%;
  font-size: 1.5rem;
	border-radius: 10px;
	height: 30px;
`;

const DivSections = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #334cf1;
  color: #fff;
  font-weight: bold;
 `;

 const Select = styled.select`
  width: 50%;
  font-size: 0.9rem;
  border-radius: 10px;
  height: 30px;
  `;