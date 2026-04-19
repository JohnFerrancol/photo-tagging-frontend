import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useGame = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/games`);

      if (!response.ok) throw new Error();

      const gamesData = await response.json();
      setGames(gamesData.games);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 5000);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, loading };
};

export default useGame;
