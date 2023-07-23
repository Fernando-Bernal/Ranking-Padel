import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getJugadores } from "../redux/actions";

function Position() {
    const dispatch = useDispatch();
    const jugadores = useSelector((state) => state.jugadores);
    
    useEffect(() => {
        dispatch(getJugadores());
    }, [dispatch]);
    
    console.log(jugadores)
  return (
    <DivContainer>
        <DivTitulo>Posiciones</DivTitulo>
        <DivTabla>
            <table>
                <thead>
                    <tr>
                        <Th>Nombre</Th>
                        <Th>Padel</Th>
                        <Th>Cruzado</Th>
                        <Th>Truco</Th>
                        <Th>Siete</Th>
                        <Th>Total</Th>
                    </tr>
                </thead>
                <tbody>
                    {jugadores.map((jugador) => (
                        <tr key={jugador.nombre}>
                            <Td>{jugador.nombre}</Td>
                            <Td>{jugador.padel}</Td>
                            <Td>{jugador.cruzado}</Td>
                            <Td>{jugador.truco}</Td>
                            <Td>{jugador.siete}</Td>
                            <Td>{jugador.pt}</Td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </DivTabla>
    </DivContainer>
  )
}

export default Position

const DivContainer = styled.div`
	position: relative;
	z-index: -5;
`;

const DivTitulo = styled.h2`
	position: relative;
	margin: 10px auto;
	text-align: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: #dbdee1;
`;

const DivTabla = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	margin: auto;
	border-radius: 10px;
	background-color: #f8f9fa;
	box-shadow: 0 0 10px #6905c6;
	margin-bottom: 20px;
	overflow: auto;
    padding: 10px;

	@media (min-width: 768px) {
        
		font-size: 1rem;
	}
`;


const Td = styled.td`
	font-size: 0.7rem;
	text-align: center;
	vertical-align: middle;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;

const Th = styled.th`
    font-size: 0.7rem;
    text-align: center;
    vertical-align: middle;

    @media (min-width: 768px) {
        font-size: 1rem;
    }   
`;