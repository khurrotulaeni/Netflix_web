interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-3 group">
  <div className="relative">
    <img
      src={imageUrl}
      alt={name}
      className="h-[320px] w-[240px] rounded-md border border-red-800 mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="flex flex-col items-center border border-red-800 w-full max-w-xs p-4 rounded-lg transition-all duration-300 group-hover:bg-red-900/20">

    <h3 className="text-lg text-white font-semibold text-center">
      {name}
    </h3>

    <p className="text-xs text-gray-400 text-center">
      {role}
    </p>

  </div>
</div>
  );
};

export default SpeakerCard;