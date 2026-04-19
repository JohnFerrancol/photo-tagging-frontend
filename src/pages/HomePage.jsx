import { useContext } from 'react';
import GameContext from '../context/GameContext';
import GameLink from '../components/GameLink';
import { OrbitProgress } from 'react-loading-indicators';

const HomePage = () => {
  const { games, loading } = useContext(GameContext);

  if (loading) {
    return (
      <div class="flex justify-center mt-15 items-center gap-2">
        <OrbitProgress color="#dc4c3e" size="larger" />
        <span className="text-xl font-bold">Loading Games</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 mt-20 px-10">
      <h1 className="text-center font-bold text-3xl">Choose a Game</h1>
      <div className="mt-5 grid grid-cols-3 gap-6">
        {games.map((game) => (
          <GameLink key={game.id} id={game.id} name={game.name} imageUrl={game.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
