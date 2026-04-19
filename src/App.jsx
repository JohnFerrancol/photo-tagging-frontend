import './styles/App.css';
import { Outlet } from 'react-router';

import useGame from './hooks/useGame';
import GameContext from './context/GameContext';
import Navbar from './components/Navbar';

function App() {
  const game = useGame();
  return (
    <GameContext value={game}>
      <div className="font-inter bg-[#fcfaf8] text-[#202020] min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </GameContext>
  );
}

export default App;
