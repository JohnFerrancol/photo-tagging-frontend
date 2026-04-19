const MarkersLayer = ({ markers }) => {
  return (
    <>
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            left: `${marker.x * 100}%`,
            top: `${marker.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {marker.status === 'correct' ? (
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              ✓
            </div>
          ) : (
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              ✕
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MarkersLayer;
