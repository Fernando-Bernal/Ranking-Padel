import React from 'react';

const players = [
  { id: 1, name: 'Jugador 1', points: { competencia1: 10, competencia2: 5, competencia3: 8, competencia4: 3 } },
  { id: 2, name: 'Jugador 2', points: { competencia1: 7, competencia2: 12, competencia3: 4, competencia4: 9 } },
  { id: 3, name: 'Jugador 3', points: { competencia1: 2, competencia2: 6, competencia3: 11, competencia4: 15 } },
  { id: 4, name: 'Jugador 4', points: { competencia1: 9, competencia2: 3, competencia3: 6, competencia4: 8 } }
];

const Home = () => {
  const getTotalPoints = (player) => {
    const { competencia1, competencia2, competencia3, competencia4 } = player.points;
    return competencia1 + competencia2 + competencia3 + competencia4;
  };

  return (
    <div>
      <h1>Puntos de los jugadores</h1>
      <div>
        <button>Temporadas pasadas</button>
        <button>Totales historicos</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Competencia 1</th>
            <th>Competencia 2</th>
            <th>Competencia 3</th>
            <th>Competencia 4</th>
            <th>Total acumulado</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.points.competencia1}</td>
              <td>{player.points.competencia2}</td>
              <td>{player.points.competencia3}</td>
              <td>{player.points.competencia4}</td>
              <td>{getTotalPoints(player)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Campeon de la temporada: </h3>
        <span>nombre</span>
      </div>
    </div>
  );
};

export default Home;




//erwin.daza@gmail.com