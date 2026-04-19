import { useContext } from 'react';
import { useParams } from 'react-router';
import GameContext from '../context/GameContext';

const GamePage = () => {
  const { gameId } = useParams();

  return (
    <div>
      <h1>Game Page</h1>
      <p>{gameId}</p>
    </div>
  );
};

export default GamePage;
