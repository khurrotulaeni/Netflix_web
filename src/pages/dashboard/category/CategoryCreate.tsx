import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

export default function CategoryCreate() {
  const [name, setName] = useState("");

  const [movies, setMovies] = useState<string[]>([""]);

  const navigate = useNavigate();
  const addCategory = useAuthStore((state: any) => state.addCategory);


  const handleImageUpload = (e: any, index: number) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    const newMovies = [...movies];
    newMovies[index] = imageUrl;

    setMovies(newMovies);
  };

  const addMovieField = () => {
    setMovies([...movies, ""]);
  };

 const handleSubmit = (e: any) => {
  e.preventDefault();

  if (!name) {
    alert("Nama category wajib diisi!");
    return;
  }

  addCategory(name, movies); 

  console.log("SETELAH TAMBAH:", useAuthStore.getState().categories);

  navigate("/dashboard/category");
};

  return (
    <div className="text-white">
      
      <h2 className="text-xl font-semibold mb-6">
        Tambah Category
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-6 rounded-xl w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm">
            Nama Category
          </label>
          <input
            type="text"
            placeholder="Contoh: Horror"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">
            Upload Film
          </label>

          {movies.map((movie, index) => (
            <div key={index} className="mb-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, index)}
              />
              
              {movie && (
                <img
                  src={movie}
                  className="w-20 h-28 object-cover mt-2 rounded"
                />
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addMovieField}
            className="text-sm text-red-400 mt-2"
          >
            + Tambah Film
          </button>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700"
          >
            Simpan
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard/category")}
            className="bg-gray-600 px-5 py-2 rounded-lg hover:bg-gray-700"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}