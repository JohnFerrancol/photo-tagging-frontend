const CompletionModal = ({
  showCompletionModal,
  handleSubmit,
  playerNameInput,
  onChange,
  errorsArray,
}) => {
  if (!showCompletionModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl text-center font-bold mb-4">You found everything!</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="playerName"
            type="text"
            placeholder="Enter your name"
            className={`${errorsArray.input === 'playerName' ? 'border-red-400' : 'border-[#202020]'} col-span-5 font-medium bg-white w-full px-3 py-2 border rounded-lg shadow-xs focus:outline-none focus:border-2`}
            value={playerNameInput}
            onChange={onChange}
          />

          {errorsArray.input === 'playerName' && (
            <p className="text-md text-red-400 font-semibold">{errorsArray.error}</p>
          )}

          <button type="submit" className="bg-[#dc4c3e] text-white px-4 py-2 rounded-lg shadow-xl">
            Submit Score
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompletionModal;
