type Props = {
  exploreData?: IExploreData[];
};

function Explore({ exploreData }: Props) {
  return (
    <section className="my-4 pt-6">
      <h2 className="text-4xl font-semibold"> Explore Nearby </h2>

      {exploreData ? <div></div> : <span>No places found nearby</span>}
    </section>
  );
}

export default Explore;
