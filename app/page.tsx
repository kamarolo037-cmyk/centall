export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">CENTRALBIZ</h1>

      <div className="border border-zinc-800 rounded-xl p-4 mb-4">
        <p>NET WORTH: $12 400</p>
        <p>EMPLOYEES: 8</p>
        <p>INCOME: $420/h</p>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-white text-black rounded-lg p-3">
          MARKET
        </button>

        <button className="w-full bg-zinc-900 rounded-lg p-3">
          PORTFOLIO
        </button>

        <button className="w-full bg-zinc-900 rounded-lg p-3">
          LEADERBOARD
        </button>
      </div>
    </main>
  );
}