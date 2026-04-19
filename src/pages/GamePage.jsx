import { useParams } from 'react-router';
import { useRef, useState } from 'react';
import useGame from '../hooks/useGame';
import LoadingComponent from '../components/LoadingComponent';
import FetchFailure from '../components/FetchFailure';

const GamePage = () => {
  const { gameId } = useParams();
  const { gameData, loading, error } = useGame(gameId);

  const imageRef = useRef(null);

  const [markers, setMarkers] = useState([]);

  if (loading) {
    return <LoadingComponent message="Loading Game" />;
  }

  if (error) {
    return <FetchFailure message="Failed to load game" />;
  }

  const handleClick = (e) => {
    const rect = imageRef.current.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const xPercent = clickX / rect.width;
    const yPercent = clickY / rect.height;

    setMarkers((prev) => [...prev, { x: xPercent, y: yPercent }]);

    console.log({ x: xPercent, y: yPercent });
  };

  return (
    <div className="flex flex-col gap-2 px-4 py-5">
      <h1 className="text-center font-bold text-3xl text-[#dc4c3e]">{gameData.name}</h1>
      <h2 className="text-center text-md font-semibold">Characters to Find</h2>

      <div className="flex gap-3 justify-center flex-wrap">
        {gameData.characters.map((character) => {
          return (
            <div key={character.id} className="border-2 border-gray-300 rounded-lg shadow-lg">
              <img src={character.imageUrl} className="w-full h-25 object-cover rounded-md" />
              <h2 className="px-5 py-3 font-semibold text-center">{character.name}</h2>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <div className="relative inline-block">
          <img
            onClick={handleClick}
            ref={imageRef}
            src={gameData.imageUrl}
            className="h-[80vh] w-auto object-contain cursor-crosshair"
          />

          {markers.map((m, idx) => (
            <div
              key={idx}
              className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white"
              style={{
                left: `${m.x * 100}%`,
                top: `${m.y * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
