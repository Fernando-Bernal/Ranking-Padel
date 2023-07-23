import React from 'react';
import Position from './Position';
import styled from 'styled-components';
import cancha from '../assets/canchaPadel.webp';

const Home = () => {


  return (
    <Contairner>
      <Position />

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



//erwin.daza@gmail.com