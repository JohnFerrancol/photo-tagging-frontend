import { useParams } from 'react-router';
import { useRef, useState, useEffect } from 'react';
import useGame from '../hooks/useGame';
import useTimer from '../hooks/useTimer';
import LoadingComponent from '../components/shared/LoadingComponent';
import FetchFailure from '../components/shared/FetchFailure';
import GameHeader from '../components/game/GameHeader';
import GameImage from '../components/game/GameImage';
import MarkersLayer from '../components/game/MarkersLayer';
import CharacterDropdown from '../components/game/CharacterDropdown';

const GamePage = () => {
  const { gameId } = useParams();

  const imageRef = useRef(null);

  // Game States
  const { gameData, loading, error, guessCharacter } = useGame(gameId);
  const [markers, setMarkers] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);

  // Timer States
  const [isRunning, setIsRunning] = useState(false);
  const { time, reset } = useTimer(isRunning);

  const foundNames = markers.filter((m) => m.status === 'correct').map((m) => m.label);

  useEffect(() => {
    const init = async () => {
      reset();
      setIsRunning(true);
    };

    init();
  }, []);

  // Event handler used to obtain the normalised x and y coordinates of the positions clicked and opens the dropdown for the user to select the character
  const handleClick = (e) => {
    // Obtain the normalised x and y coordinates: xPercent and yPercent
    const rect = imageRef.current.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const xPercent = clickX / rect.width;
    const yPercent = clickY / rect.height;

    setClickPosition({ x: xPercent, y: yPercent });
    setOpenDropdown(true);
  };

  // Event Handlers used to handle the dropdown menu and verify the guess from the backend
  const handleSelectCharacter = async (characterName) => {
    if (!clickPosition) return;

    // Verify the guess by checking with the backend
    const correct = await guessCharacter({
      characterName,
      x: clickPosition.x,
      y: clickPosition.y,
    });

    // If it is correct, update the markers array with a correct guess
    if (correct) {
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        {
          id: crypto.randomUUID(),
          x: clickPosition.x,
          y: clickPosition.y,
          label: characterName,
          status: 'correct',
        },
      ]);
    } else {
      // If it is wrong, update the markers array with a wrong guess and remove it after 1 second for user feedback
      const wrongId = crypto.randomUUID();

      setMarkers((prevMarkers) => [
        ...prevMarkers,
        {
          id: wrongId,
          x: clickPosition.x,
          y: clickPosition.y,
          label: characterName,
          status: 'wrong',
        },
      ]);

      // Remove the wrong guess after 1 second
      setTimeout(() => {
        setMarkers((prevMarkers) => prevMarkers.filter((markers) => markers.id !== wrongId));
      }, 1000);
    }

    // Remove the dropdown and current clicked position state
    setOpenDropdown(false);
    setClickPosition(null);
  };

  useEffect(() => {
    if (gameData && foundNames.length === gameData.characters.length) {
      const endGame = async () => {
        setIsRunning(false);
      };

      endGame();
    }
  }, [foundNames]);

  if (loading) {
    return <LoadingComponent message="Loading Game" />;
  }

  if (error) {
    return <FetchFailure message="Failed to load game" />;
  }

  return (
    <div className="flex flex-col gap-2 px-4 py-5">
      <GameHeader gameData={gameData} foundNames={foundNames} time={time} />

      <GameImage imageUrl={gameData.imageUrl} imageRef={imageRef} onClick={handleClick}>
        <MarkersLayer markers={markers} />

        <CharacterDropdown
          openDropdown={openDropdown}
          clickedPosition={clickPosition}
          characters={gameData.characters}
          foundNames={foundNames}
          handleSelectCharacter={handleSelectCharacter}
        />
      </GameImage>
    </div>
  );
};

export default GamePage;
