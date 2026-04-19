import { Link, useParams } from 'react-router';
import useGames from '../hooks/useGames';
import useLeaderboard from '../hooks/useLeaderboard';
import LoadingComponent from '../components/shared/LoadingComponent';
import FetchFailure from '../components/shared/FetchFailure';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';
import LeaderboardLink from '../components/leaderboard/LeaderboardLink';

const LeaderboardPage = () => {
  const { gameId } = useParams();
  const { games } = useGames();
  const { leaderboardData, loading, error } = useLeaderboard(gameId);

  if (loading) {
    return <LoadingComponent message="Loading Leaderboard" />;
  }

  if (error) {
    return <FetchFailure message="Failed to load leaderboard" />;
  }

  return (
    <div className="flex flex-col gap-2 mt-20 px-10">
      <div className="flex items-center justify-between">
        <h1 className="text-center font-bold text-3xl text-[#dc4c3e]">Leaderboard</h1>

        <div className="justify-center flex gap-3">
          {games.map((game) => (
            <LeaderboardLink
              key={game.id}
              gameName={game.name}
              gameId={game.id}
              currentGameId={leaderboardData.game.id}
            />
          ))}
        </div>
      </div>

      <LeaderboardTable
        gameName={leaderboardData.game.name}
        leaderboard={leaderboardData.leaderboard}
      />
    </div>
  );
};

export default LeaderboardPage;
