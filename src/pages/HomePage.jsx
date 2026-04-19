import useGames from '../hooks/useGames';
import LoadingComponent from '../components/LoadingComponent';
import GameLink from '../components/GameLink';

const HomePage = () => {
  const { games, loading } = useGames();

  if (loading) {
    return <LoadingComponent data="Games" />;
  }

  return (
    <div className="flex flex-col gap-2 mt-20 px-10">
      <h1 className="text-center font-bold text-3xl text-[#dc4c3e]">Choose a Game</h1>
      <div className="mt-5 grid grid-cols-3 gap-6">
        {games.map((game) => (
          <GameLink key={game.id} id={game.id} name={game.name} imageUrl={game.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
