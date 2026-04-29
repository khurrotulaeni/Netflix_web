import Header from "../layout/Header";
import { Button } from "../components/atoms/Button";
import { Card } from "../components/ui/Card";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";

function App() {
  const speakers = [
    {
      name: "The Conjuring (2013)",
      role: "kisah nyata di balik teror paling mencekam yang pernah terjadi.",
      imageUrl:
        "https://www.spectatornews.com/wp-content/uploads/2015/11/WEB_conjuring-675x900.jpg",
    },
    {
      name: "Thrash (2026)",
      role: "Kota tenggelam, ketakutan naik ke permukaan—dan sesuatu sedang mengintai di dalam air.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNWY2ZGFkNjktOWQ1NC00YjYzLTgzY2EtYzg3NTc1MDFkOWM3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "Terrifier 3 (2024)",
      role: "Tidak ada perayaan Natal yang aman ketika Art the Clown kembali.",
      imageUrl:
        "https://play-lh.googleusercontent.com/eykAs5lY7OCx_8oUlwACd2c0vZr3LUo-NDkHddTs49Vn5A7fWdUkmmAdp2X70jQzQ1WhEv4S6xitfauP6J0",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Netflix?",
      description:
        "Netflix adalah layanan streaming yang menawarkan beragam acara TV, film, anime, dokumenter, dan banyak lagi...",
    },
    {
      title: "Berapa biaya berlangganan Netflix?",
      description:
        "Paket berlangganan mulai dari Rp 54.000 hingga Rp 186.000/bulan.",
    },
    {
      title: "Di mana saya bisa menontonnya?",
      description:
        "Tonton di mana saja, kapan saja di berbagai perangkat.",
    },
  ];

  const cardItems = [
    {
      title: "Enjoy on your TV",
      description: "Saksikan di Smart TV dan perangkat lainnya.",
    },
    {
      title: "Download your shows",
      description: "Simpan film favorit Anda dengan mudah.",
    },
    {
      title: "Watch everywhere",
      description: "Streaming kapan saja, Di mana saja, Nikmati Hiburan Tanpa Henti.",
    },
    {
      title: "Create profiles for kids",
      description: "Profil khusus anak dengan konten aman, Edukatif dan Menyenangkan.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-950 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6"></div>

        <section id="speaker" className="pt-10 pb-16">
          <h1 className="font-bold text-4xl mb-2">
            Trending Film
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 justify-items-center">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <section className="px-6 mt-12">
        <h1 className="font-bold text-4xl mb-8">
          More Reasons to Join
        </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            className="w-full bg-zinc-900 border border-zinc-800 
                      rounded-xl p-5 
                      hover:border-red-600 
                      transition duration-300"
      >
        <h3 className="text-lg font-semibold text-white mb-2">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {item.description}
        </p>

        <Button
          label="Info Selengkapnya"
          variant="primary"
          className="text-red-500 text-sm hover:underline p-0 bg-transparent"
        />
        </Card>
      ))}
    </div>
  </section>
        <section className="mt-12 px-6 pb-16">
          <h1 className="font-bold text-4xl mb-6">
            Frequently Asked Questions
          </h1>

          <div className="flex flex-col gap-3 max-w-9xl">
            {collapseItems.map((item, index) => (
              <Collapse
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

export default App;