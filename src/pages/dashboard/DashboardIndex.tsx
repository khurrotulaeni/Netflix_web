export default function DashboardIndex() {
  return (
    <div className="space-y-6">

      <div
        className="h-56 rounded-xl p-6 flex flex-col justify-end bg-zinc-800"
        style={{
        backgroundImage: "url('https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4')",
    }
}
      >
        <h1 className="text-2xl font-bold">Nikmati Film Favoritmu</h1>
        <p className="text-sm text-gray-400">
          Temukan film seru setiap hari!
        </p>

        <button className="mt-4 w-24 py-1 bg-red-600 rounded hover:bg-red-700">
          Play
        </button>
      </div>

      <div>
  <h2 className="text-lg font-semibold mb-3">Trending</h2>

    <div className="flex gap-4 overflow-x-auto">
      <img src="https://img.hulu.com/user/v3/artwork/916a32db-1638-4efa-b53c-fd0eb76ab1f8?base_image_bucket_name=image_manager&base_image=ad494287-ab5c-462d-8bb3-5f5642f7c690&region=US&format=webp&size=952x536" className="w-50 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://www.rukita.co/stories/wp-content/uploads/2022/05/enola-holmes-film-netflix-terbaik-sepanjang-masa-.jpeg" className="w-50 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://www.heavenofhorror.com/wp-content/uploads/2024/07/The-Platform-2-horror.jpg" className="w-50 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://i.ytimg.com/vi/a3Y7Krfyb-g/maxresdefault.jpg" className="w-50 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://cnc-magazine.oramiland.com/parenting/images/Film_Netflix_untuk_Anak_The_Boss_.width-500.format-webp.webp" className="w-50 h-48 rounded-lg hover:scale-105 transition" />
    </div>
  </div>

     <div>
  <h2 className="text-lg font-semibold mb-3">Popular</h2>

    <div className="flex gap-4 overflow-x-auto">
      <img src="https://akcdn.detik.net.id/visual/2023/02/23/the-magicians-elephant_11.jpeg?w=720&q=90" className="w-42 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" className="w-42 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" className="w-42 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2022/12/Amazoncouk.jpg?resize=720%2C960&ssl=1" className="w-42 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" className="w-42 h-48 rounded-lg hover:scale-105 transition" />
      <img src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fmovies%2F3522%2Fposters%2F3522_t.jpg&w=640&q=75" className="w-42 h-48 rounded-lg hover:scale-105 transition" />
    </div>
  </div>

    </div>
  );
}