import './styles/App.css';
import { Outlet } from 'react-router';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="font-inter bg-[#fcfaf8] text-[#202020] min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
