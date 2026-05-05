// import Header from "../layout/Header";
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
      imageUrl: "https://www.spectatornews.com/wp-content/uploads/2015/11/WEB_conjuring-675x900.jpg",
    },
    {
      name: "Thrash (2026)",
      role: "Teror muncul dari dalam air.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNWY2ZGFkNjktOWQ1NC00YjYzLTgzY2EtYzg3NTc1MDFkOWM3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "Terrifier 3 (2024)",
      role: "Horor brutal penuh darah.",
      imageUrl: "https://play-lh.googleusercontent.com/eykAs5lY7OCx_8oUlwACd2c0vZr3LUo-NDkHddTs49Vn5A7fWdUkmmAdp2X70jQzQ1WhEv4S6xitfauP6J0",
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
    <>
      <section
        className="relative w-full min-h-screen py-20 flex items-center justify-center bg-gray-950 text-center"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_icon.svg')",
          backgroundSize: "center",
        }}
      >
        <div className="relative w-full z-10 flex flex-col gap-4 items-center -translate-y-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            className="w-56"
          />

          <p className="text-white text-lg text-center max-w-2xl">
            <span className="font-bold text-5xl block">
              Unlimited movies, TV shows, and more
            </span>

            <span className="text-gray-300 block mt-3">
              Starts at IDR 54,000. Cancel anytime.
            </span>
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="w-full max-w-xl mt-6 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded-l-md bg-black/60 border border-gray-600 text-white"
            />
            <Button
              label="Get Started"
              variant="primary"
              className="px-6 py-3 rounded-md"
            />
          </div>
        </div>
      </section>

      <section id="speaker" className="py-24">
        <h1 className="font-bold text-5xl mb-20 text-red-900">Trending Film</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
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

      <section>
        <h1 className="font-bold text-5xl text-red-900">More Reasons to Join</h1>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label="Info Selengkapnya"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h1 className="font-bold text-5xl text-red-900">
          Frequently Asked Questions
        </h1>
        <div className="py-10 flex flex-col gap-2 px-3">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
