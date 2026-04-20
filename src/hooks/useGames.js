import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGames = async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/games`);
      if (!response.ok) throw new Error('Failed to fetch games');

      if (!response.ok) throw new Error();

      const gamesData = await response.json();
      setGames(gamesData.games);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, loading, error };
};

export default useGames;
