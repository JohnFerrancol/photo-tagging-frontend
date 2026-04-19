import { Link } from 'react-router';

const GameLink = ({ id, name, imageUrl }) => {
  return (
    <div className="border-2 hover:border-black hover:scale-103 border-gray-100 bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out">
      <Link to={`/games/${id}`}>
        <img src={imageUrl} alt={name} className="w-full h-100 object-cover rounded-t-2xl" />

        <div className="px-5 py-3">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="text-md font-md">3 characters to find!</p>
        </div>
      </Link>
    </div>
  );
};

export default GameLink;
