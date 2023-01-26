import Image from "next/image";

function PlaceCategoryCard({ img, title }: IPlaces) {
  return (
    <div className="mx-3 cursor-pointer transition-transform duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} fill alt={title} className="rounded-xl" />
      </div>

      <h3 className="mt-2 text-2xl">{title}</h3>
    </div>
  );
}

export default PlaceCategoryCard;
