import { Link, useLocation } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/';
  const isGame = path.startsWith('/games/');
  const isLeaderboard = path.startsWith('/leaderboards/');

  return (
    <nav className="relative flex w-full justify-center items-center bg-[#dc4c3e] text-white px-8 py-5 shadow-xl">
      <div className="mr-auto flex items-center">
        {(isGame || isLeaderboard) && (
          <Link
            className="text-lg font-semibold flex gap-2 items-center border-2 border-transparent hover:border-white px-3 py-1 rounded-lg transition-colors"
            to="/"
          >
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        )}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold whitespace-nowrap">
        Odin Photo Tagging
      </div>

      <div className="ml-auto flex items-center">
        {(isHome || isGame) && (
          <Link
            className="text-lg font-semibold border-2 border-transparent hover:border-white px-3 py-1 rounded-lg transition-colors"
            to="/leaderboards/1"
          >
            Leaderboards
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
