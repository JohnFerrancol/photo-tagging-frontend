const GameHeader = ({ gameData, foundNames }) => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl text-[#dc4c3e]">{gameData.name}</h1>

      <div className="flex gap-3 justify-center flex-wrap mt-4">
        {gameData.characters.map((character) => {
          const isFound = foundNames.includes(character.name);

          return (
            <div
              key={character.id}
              className={`border-2 rounded-lg shadow-lg ${
                isFound ? 'bg-green-100 border-green-300' : 'bg-white border-gray-100'
              }`}
            >
              <img src={character.imageUrl} className="w-full h-25 object-cover rounded-md" />
              <h2 className="px-5 py-3 font-semibold text-center">{character.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameHeader;
