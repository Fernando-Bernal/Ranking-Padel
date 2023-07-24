import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getFechas } from "../redux/actions";

function Fechas() {
	const dispatch = useDispatch();
	const results = useSelector((state) => state.resultados);
	const [fecha, setFecha] = useState(["1", "2", "3", "4", "5", "6"]);
	const [currentPage, setCurrentPage] = useState(0);
	const resultsPerPage = 3;

	useEffect(() => {
		dispatch(getFechas(`Fecha${fecha[0]}`));
	}, []);

	console.log(results);

	const selectedDates = fecha.slice(
		currentPage * resultsPerPage,
		(currentPage + 1) * resultsPerPage
	);

	useEffect(() => {
		getResultsForDates(selectedDates);
	}, [currentPage]);

	const getResultsForDates = (selectedDates) => {
		return selectedDates.map((date) => {
			return results.find((result) => result.fecha === date);
		});
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const anterior = "<";
	const posterior = ">";

	return (
		<DivContainer>
			<DivTitulo>RESULTADOS POR FECHAS</DivTitulo>
			<DivFecha>
				<BtnFecha disabled={currentPage === 0} onClick={handlePrevPage}>
					{anterior}
				</BtnFecha>
				{selectedDates.map((date) => (
					<BtnFecha
						key={date}
						active={date === fecha[currentPage]}
						onClick={() => {
							dispatch(getFechas(`Fecha${date}`));
						}}
					>
						{date}
					</BtnFecha>
				))}
				<BtnFecha
					disabled={
						currentPage === Math.ceil(fecha.length / resultsPerPage) - 1
					}
					onClick={handleNextPage}
				>
					{posterior}
				</BtnFecha>
			</DivFecha>

      {results.map((fecha) => (
        <DivTabla key={fecha.id}>
          <table>
            <thead>
              <tr>
                <Th>Competencia</Th>
                <Th>Jugador 1</Th>
                <Th>Jugador 2</Th>
                <Th>Resultado</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>{fecha.Categoria}</Td>
                <Td>{fecha.Jugador1}</Td>
                <Td>{fecha.Jugador2}</Td>
                <Td>{fecha.Resultado}</Td>
              </tr>
            </tbody>
          </table>
        </DivTabla>
      ))}

   
		</DivContainer>
	);
}

export default Fechas;

const DivContainer = styled.div`
	position: relative;
	z-index: 1;
	background-color: rgb(15, 35, 61);
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-radius: 10px;

`;

const DivFecha = styled.div`
	width: 90%;
	height: auto;
	position: relative;
	display: flex;
	justify-content: space-around;
	margin: auto;
	margin-bottom: 20px;
	margin-top: 20px;
`;

const BtnFecha = styled.button`
	width: 40px;
	height: 40px;
	position: relative;
	border-radius: 100px;
	background-color: #f8f9fa;
	color: #343a40;
	font-weight: bold;
	font-size: 0.8rem;
	border: none;
	box-shadow: 0 0 6px #ffd042;
	cursor: pointer;
	outline: none;


	&:active {
		background-color: #c9df1d;
		color: #f8f9fa;
	}

  &:focus {
    background-color: #c9df1d;
    color: #f8f9fa;
  }
`;

const DivTitulo = styled.h2`
	position: relative;
	margin: 10px auto;
	text-align: center;
	font-size: 1.4rem;
	font-weight: bold;
	color: #dbdee1;
`;

const DivTabla = styled.div`
	width: 90%;
	height: auto;
	position: relative;
	margin: auto;
	border-radius: 10px;
	background-color: #f8f9fa;
	box-shadow: 0 0 10px #ccb367;
	margin-bottom: 20px;
	overflow: auto;

	@media (min-width: 768px) {
		width: 70%;
		font-size: 1rem;
	}
`;

const Td = styled.td`
	font-size: 0.7rem;
	text-align: center;
	vertical-align: middle;
  font-weight: bold;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;

const Th = styled.th`
  font-size: 0.6rem;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  padding: 5px;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;