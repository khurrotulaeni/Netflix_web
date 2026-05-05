const events = [
  {
    title: "Film Festival 2026",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    title: "Premiere Night",
    image: "https://m.media-amazon.com/images/M/MV5BMmIwMWY3MWUtNDdmYy00MDAwLWEyOGQtZjQ0ODhkOGNlYTQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Horror Marathon",
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  },
  {
    title: "Action Movie Day",
    image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  },
];

export default function EventIndex() {
  return (
    <div className="bg-black text-white min-h-screen p-6">

      <div className="relative h-72 rounded-lg overflow-hidden mb-8">
        <img
          src="https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute top-1/2 left-6 -translate-y-1/2">
          <h2 className="text-3xl font-bold mb-2">Special Event</h2>
          <p className="text-gray-300 mb-3">
            Nikmati berbagai event film terbaik minggu ini
          </p>

          <button className="bg-red-600 px-4 py-2 rounded">
            Lihat Event
          </button>
        </div>
      </div>

      <h2 className="text-lg mb-3">Upcoming Events</h2>

      <div className="flex gap-4 overflow-x-auto">
        {events.map((event, i) => (
          <div
            key={i}
            className="w-40 hover:scale-110 transition duration-300 cursor-pointer"
          >
            <img
              src={event.image}
              className="rounded-lg mb-2"
            />
            <p className="text-sm">{event.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
}