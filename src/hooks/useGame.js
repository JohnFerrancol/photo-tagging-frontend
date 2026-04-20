import { useState, useEffect, useRef } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useGame = (gameId) => {
  const [sessionId, setSessionId] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Using a hasStarted ref to ensure that startGame only runs once per mount
  const hasStarted = useRef(false);

  // Reset the reference when the gameId changes
  useEffect(() => {
    hasStarted.current = false;
  }, [gameId]);

  useEffect(() => {
    if (!gameId || hasStarted.current) return;

    hasStarted.current = true;

    const fetchGame = async () => {
      const response = await fetch(`${API_URL}/api/v1/games/${gameId}`);
      if (!response.ok) throw new Error('Failed to fetch game');

      const gameData = await response.json();

      setGameData(gameData.game);
    };

    const startGame = async () => {
      const response = await fetch(`${API_URL}/api/v1/games/${gameId}/start`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Start game failed');

      const sessionData = await response.json();
      setSessionId(sessionData.session.id);
    };

    const init = async () => {
      try {
        await Promise.all([fetchGame(), startGame()]);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    init();
  }, [gameId]);

  const guessCharacter = async (bodyData) => {
    if (!sessionId) {
      console.warn('Session is not ready');
      return false;
    }

    try {
      const response = await fetch(`${API_URL}/api/v1/games/${gameId}/guess`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...bodyData, sessionId }),
      });

      if (!response.ok) throw new Error('Guess failed');

      const guessData = await response.json();
      return guessData.correct;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const finishGame = async (playerName, clientEndTime) => {
    if (!sessionId) {
      console.warn('Session is not ready');
      return null;
    }

    try {
      const response = await fetch(`${API_URL}/api/v1/games/${gameId}/finish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, playerName, clientEndTime }),
      });

      const data = await response.json();

      if (!response.ok) {
        return data;
      }

      return data.data;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return { gameData, loading, error, guessCharacter, finishGame };
};

export default useGame;
