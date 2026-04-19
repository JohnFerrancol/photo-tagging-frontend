const MarkersLayer = ({ markers }) => {
  return (
    <>
      {markers.map((m) => (
        <div
          key={m.id}
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            left: `${m.x * 100}%`,
            top: `${m.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {m.status === 'correct' ? (
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
