import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

export default function CategoryIndex() {
  const storeCategories = useAuthStore((state) => state.categories);
  const removeCategory = useAuthStore((state) => state.removeCategory);

  const defaultCategories = [
    {
      name: "Horror",
      movies: [
        "https://aws-images-prod.sindonews.com/dyn/600/pena/sindo-article/original/2025/01/04/the%20%20monkey.jpg",
        "https://upload.wikimedia.org/wikipedia/id/e/e1/Pengabdi_Setan_poster.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjBMB7YEVacTInhE5RquZKuUD0Ng07VxoDg&s",
        "https://nnc-media.netralnews.com/2025/02/IMG-Netral-News-User-12265-TP05N2SMOA.jpg",
        "https://akcdn.detik.net.id/visual/2024/04/03/the-popes-exorcist-2023-foto-imdb.jpeg?w=480&q=90",
      ],
    },
    {
      name: "Action",
      movies: [
        "https://cdn0-production-images-kly.akamaized.net/pfgWN-2_YGNcRE2gozdI3vF2GGo=/500x667/smart/filters:quality(75):strip_icc()/kly-media-production/medias/3137457/original/002195300_1590557089-tenet.jpg",
        "https://jete.id/wp-content/uploads/2025/01/Damsel.jpg",
        "https://jete.id/wp-content/uploads/2023/02/Film-Action-Terbaik-di-Netflix-5.jpg",
        "https://jete.id/wp-content/uploads/2023/02/Lift.jpg",
        "https://upload.wikimedia.org/wikipedia/id/thumb/0/0d/Poster_PDBD.jpg/250px-Poster_PDBD.jpg",
      ],
    },
  ];

  const allCategories = [
    ...defaultCategories,
    ...storeCategories.map((name) => ({
      name,
      movies: [
        "https://via.placeholder.com/300x450?text=New+Movie",
      ],
    })),
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen p-8">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Browse Categories</h1>

        <Link
          to="/dashboard/category/create"
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          + Tambah Category
        </Link>
      </div>

      {allCategories.map((category, index) => (
        <div key={index} className="mb-10">
          
          <h2 className="text-xl mb-4">{category.name}</h2>

          <div className="flex gap-4 overflow-x-auto">
            {category.movies.map((movie, i) => (
              <div key={i} className="relative group w-40 h-60">
                <img
                  src={movie}
                  alt="movie"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <p className="text-sm p-3">{category.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => removeCategory(category.name)}>
            Hapus
          </button>

        </div>
      ))}
    </div>
  );
}