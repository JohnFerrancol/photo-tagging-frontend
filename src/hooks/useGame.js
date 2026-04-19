import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useGame = (gameId) => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!gameId) return;

    const fetchGame = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/games/${gameId}`);
        if (!response.ok) throw new Error('Failed to fetch game');

        const gameData = await response.json();

        setGameData(gameData.game);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchGame();
  }, [gameId]);

  return { gameData, loading, error };
};

export default useGame;
