
const categories = [
  {
    title: "Trending Now",
    films: [
      "or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      "q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    ],
  },
  {
    title: "Action Movies",
    films: [
      "7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "lFSSLTlFozwpaGlO31OoUeirBgQ.jpg",
      "kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      "3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    ],
  },
  {
    title: "Horror Movies",
    films: [
      "zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
      "cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
      "b6qUu00iIIkXX13szFy7d0CyNcg.jpg",
      "qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    ],
  },
];

export default function FilmIndex() {
  return (
    <div className="bg-black text-white min-h-screen p-4">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Film Netflix</h1>

        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 px-4 py-2 rounded"
        />
      </div>

      <div
        className="h-80 rounded-lg flex items-center p-6 mb-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg')",
        }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">THE WITCHER</h2>
          <p className="text-gray-300 mb-3">
            Geralt of Rivia, monster hunter, journeys through a dark world.
          </p>

          <div className="flex gap-3">
            <button className="mt-4 w-24 py-1 bg-red-600 rounded hover:bg-red-700">
                Play
            </button>
            <button className=" mt-1 w-24 py-3 bg-gray-700 rounded">
              More Info
            </button>
          </div>
        </div>
      </div>

      {categories.map((cat, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-lg mb-3">{cat.title}</h3>

          <div className="flex gap-4 overflow-x-auto">
            {cat.films.map((img, idx) => (
              <img
                key={idx}
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                className="w-40 rounded-lg hover:scale-110 transition duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}