const GameImage = ({ imageUrl, imageRef, onClick, children }) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="relative inline-block">
        <img
          ref={imageRef}
          onClick={onClick}
          src={imageUrl}
          className="h-[80vh] w-auto object-contain cursor-crosshair"
        />
        {children}
      </div>
    </div>
  );
};

export default GameImage;
