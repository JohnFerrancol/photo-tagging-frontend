import App from '../App';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import LeaderboardPage from '../pages/LeaderboardPage';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:gameId', element: <GamePage /> },
      { path: 'leaderboards/:gameId', element: <LeaderboardPage /> },
    ],
  },
];

export default routes;
