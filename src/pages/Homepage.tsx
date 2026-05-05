
import { Button } from "../components/atoms/Button";
import { Card } from "../components/ui/Card";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";
import "../index.css";

export default function Homepage() {
  const speakers = [
    {
      name: "The Conjuring (2013)",
      role: "Horor berdasarkan kisah nyata.",
      imageUrl:
        "https://www.spectatornews.com/wp-content/uploads/2015/11/WEB_conjuring-675x900.jpg",
    },
    {
      name: "Thrash (2026)",
      role: "Teror muncul dari dalam air.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNWY2ZGFkNjktOWQ1NC00YjYzLTgzY2EtYzg3NTc1MDFkOWM3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "Terrifier 3 (2024)",
      role: "Horor brutal penuh darah.",
      imageUrl:
        "https://play-lh.googleusercontent.com/eykAs5lY7OCx_8oUlwACd2c0vZr3LUo-NDkHddTs49Vn5A7fWdUkmmAdp2X70jQzQ1WhEv4S6xitfauP6J0",
    },
  ];

  const cardItems = [
    {
      title: "Enjoy on your TV",
      description: "Tonton di Smart TV dan perangkat lain.",
    },
    {
      title: "Download your shows",
      description: "Simpan film favorit Anda.",
    },
    {
      title: "Watch everywhere",
      description: "Streaming kapan saja.",
    },
    {
      title: "Kids profile",
      description: "Konten aman untuk anak.",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Netflix?",
      description: "Netflix adalah layanan streaming film dan TV.",
    },
    {
      title: "Berapa biaya?",
      description: "Mulai dari Rp 54.000 per bulan.",
    },
    {
      title: "Di mana bisa nonton?",
      description: "Bisa di HP, laptop, TV, dll.",
    },
  ];

  return (
    <div className="w-full text-white bg-black">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_icon.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 flex flex-col items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            className="w-56"
            alt="logo"
          />

          <h1 className="text-4xl md:text-5xl font-bold">
            Unlimited movies, TV shows, and more
          </h1>

          <p className="text-gray-300">
            Starts at IDR 54,000. Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xl mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded bg-black/60 border border-gray-600 text-white"
            />

            <Button label="Get Started" variant="primary" />
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section id="speaker" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-10">
          Trending Film
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {speakers.map((item, index) => (
            <SpeakerCard
              key={index}
              name={item.name}
              role={item.role}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* CARD SECTION */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-10">
          More Reasons to Join
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardItems.map((item, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-red-500 mb-2">
                {item.title}
              </h3>
              <p>{item.description}</p>

              <Button label="Info Selengkapnya" variant="primary" />
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
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
  );
}