import LocationCard from "./LocationCard";

type Props = {
  exploreData?: IExploreData[];
};

function Explore({ exploreData }: Props) {
  return (
    <section className="my-4 pt-6">
      <h2 className="mb-5 text-4xl font-semibold"> Explore Nearby </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {exploreData ? (
          exploreData.map(({ img, location, distance }) => (
            <LocationCard
              key={img}
              img={img}
              location={location}
              distance={distance}
            />
          ))
        ) : (
          <span>No places found nearby</span>
        )}
      </div>
    </section>
  );
}

export default Explore;
