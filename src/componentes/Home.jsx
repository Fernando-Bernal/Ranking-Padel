import React from 'react';
import { Link } from 'react-router-dom';
import Position from './Position';
import styled from 'styled-components';
import cancha from '../assets/canchaPadel.webp';
import Fechas from './Fechas';
import pelota from '../assets/pelota.png';

const Home = () => {


  return (
    <Contairner>
      <Position />
      <Fechas />
      <Link to="/admin">
        <Img src={pelota} alt="" />
      </Link>
    </Contairner>
  );
};

export default Home;


const Contairner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${cancha});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  position: relative;
  z-index: -1;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 20px;
  }
  
`;

const Img = styled.img`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;



//erwin.daza@gmail.com