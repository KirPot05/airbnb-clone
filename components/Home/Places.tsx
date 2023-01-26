import PlaceCategoryCard from "./PlaceCategoryCard";

type Props = {
  places?: IPlaces[];
};

function Places({ places }: Props) {
  return (
    <section>
      <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

      {places ? (
        <div className="-ml-3 flex overflow-x-scroll p-3 scrollbar-hide">
          {places.map(({ img, title }) => (
            <PlaceCategoryCard key={img} img={img} title={title} />
          ))}
        </div>
      ) : (
        <h3> No places found </h3>
      )}
    </section>
  );
}

export default Places;
