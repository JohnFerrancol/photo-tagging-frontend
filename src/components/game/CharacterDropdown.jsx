const CharacterDropdown = ({
  openDropdown,
  clickedPosition,
  characters,
  foundNames,
  handleSelectCharacter,
}) => {
  if (!openDropdown || !clickedPosition) return null;

  return (
    <div
      className="absolute bg-white border border-gray-300 rounded-md shadow-lg z-10"
      style={{
        left: `${clickedPosition.x * 100}%`,
        top: `${clickedPosition.y * 100}%`,
        transform: 'translate(-50%, 10%)',
      }}
    >
      {characters
        .filter((character) => !foundNames.includes(character.name))
        .map((character) => (
          <div
            key={character.id}
            onClick={() => handleSelectCharacter(character.name)}
            className="px-4 py-2 hover:bg-[#f4f1ea] hover:rounded-md cursor-pointer whitespace-nowrap"
          >
            {character.name}
          </div>
        ))}
    </div>
  );
};

export default CharacterDropdown;
