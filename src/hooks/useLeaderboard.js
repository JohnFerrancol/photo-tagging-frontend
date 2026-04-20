import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useLeaderboard = (gameId) => {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!gameId) return;

    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/leaderboards/${gameId}`);
        if (!response.ok) throw new Error('Failed to fetch leaderboard');

        const leaderboardData = await response.json();
        setLeaderboardData(leaderboardData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [gameId]);

  return { leaderboardData, loading, error };
};

export default useLeaderboard;
