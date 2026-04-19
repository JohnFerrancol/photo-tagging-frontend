import { Link } from 'react-router';

const LeaderboardLink = ({ gameId, gameName, currentGameId }) => {
  return (
    <Link
      to={`/leaderboards/${gameId}`}
      className={`rounded-md py-1 px-2 text-md shadow-md ${
        gameId === currentGameId
          ? 'bg-[#dc4c3e] text-white border-2 border-[#dc4c3e]'
          : 'bg-white text-[#dc4c3e] border-2 border-[#dc4c3e]'
      }`}
    >
      {gameName}
    </Link>
  );
};

export default LeaderboardLink;
