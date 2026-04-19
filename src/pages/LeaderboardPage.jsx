import { useParams } from 'react-router';

const LeaderboardPage = () => {
  const { gameId } = useParams();
  return (
    <div>
      <h1>Leaderboard Page</h1>
      <p>{gameId}</p>
    </div>
  );
};

export default LeaderboardPage;
