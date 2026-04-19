import useGames from '../hooks/useGames';
import LoadingComponent from '../components/shared/LoadingComponent';
import FetchFailure from '../components/shared/FetchFailure';
import GameLink from '../components/home/GameLink';

const HomePage = () => {
  const { games, loading, error } = useGames();

  if (loading) {
    return <LoadingComponent message="Loading Games" />;
  }

  if (error) {
    return <FetchFailure message="Failed to load games" />;
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
