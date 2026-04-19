const LeaderboardTable = ({ gameName, leaderboard }) => {
  return (
    <div className="w-full mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">{gameName}</h2>

      <div className="bvg-white overflow-hidden rounded-2xl shadow-md border-gray-300 border ">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#dc4c3e] text-white font-bold">
            <tr>
              <th className="p-3 text-md ">#</th>
              <th className="p-3 text-md ">Player</th>
              <th className="p-3 text-md text-right">Time (s)</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((entry, index) => (
              <tr
                key={entry.id}
                className="border-t border-gray-300 hover:bg-[#f4f1ea] font-semibold transition"
              >
                <td className="p-3">
                  {index + 1 === 1 && <span className="text-3xl">🥇</span>}
                  {index + 1 === 2 && <span className="text-3xl">🥈</span>}
                  {index + 1 === 3 && <span className="text-3xl">🥉</span>}
                  {index + 1 > 3 && <span className="text-3xl">{index + 1}</span>}
                </td>

                <td className="p-3">{entry.playerName}</td>

                <td className="p-3 text-right font-mono">{entry.time.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
