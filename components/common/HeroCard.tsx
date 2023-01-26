import Image from "next/image";

type Props = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

function HeroCard({ img, title, description, buttonText }: Props) {
  return (
    <div className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          fill
          src={img}
          alt={title}
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="mb-3 w-64 text-4xl">{title}</h3>
        <p>{description}</p>

        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
