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
        const res = await fetch(`${API_URL}/api/v1/leaderboards/${gameId}`);
        if (!res.ok) throw new Error('Failed to fetch leaderboard');

        const data = await res.json();
        setLeaderboardData(data);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchLeaderboard();
  }, [gameId]);

  return { leaderboardData, loading, error };
};

export default useLeaderboard;
