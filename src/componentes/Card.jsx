import React from "react";
import styled from "styled-components";
function Card(nombre, padel, cruzado, truco, siete, pt) {
	return (
		<>
			<DivCard>
				<DivSectionCard>
					<h2>{nombre}</h2>
				</DivSectionCard>
				<DivSectionCard>
					{" "}
					<Span>Padel</Span>
					<p>{padel}</p>
					<Span>Cruzado</Span>
					<p>{cruzado}</p>
				</DivSectionCard>
				<DivSectionCard>
					<Span>Truco</Span>
					<p>{truco}</p>
					<Span>Siete</Span>
				</DivSectionCard>
				<DivSectionCard>
					<Span>Truco</Span>
					<p>{truco}</p>
					<Span>Siete</Span>
					<p>{siete}</p>
				</DivSectionCard>
				<DivSectionCard>
					<Span>Total</Span>
					<p>{pt}</p>
				</DivSectionCard>
			</DivCard>
		</>
	);
}

export default Card;

const DivCard = styled.div`
	position: relative;
	z-index: -5;
	display: flex;
    flex-direction: column;

	background-color: yellow;
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
	box-sizing: border-box;
	@media (min-width: 768px) {
		padding: 20px;
	}
`;
const DivSectionCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

const Span = styled.span`
    font-weight: bold;
    font-size: 0.7rem;
    color: #6905c6;
    margin: 0 10px;
`;