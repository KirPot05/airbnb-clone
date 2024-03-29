import Image from "next/image";

function Banner() {
  return (
    <section className="relative h-80 sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        className="object-cover"
        alt=""
        fill
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>

        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition-transform duration-150 hover:shadow-xl active:scale-90">
          {" "}
          I'm flexible{" "}
        </button>
      </div>
    </section>
  );
}

export default Banner;
