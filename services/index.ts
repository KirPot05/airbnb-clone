import { FETCH_EXPLORE_ENDPOINT } from "../config/constants";

export async function fetchExploreData() {
  try {
    const res = await fetch(FETCH_EXPLORE_ENDPOINT);
    const exploreData = await res.json();

    return exploreData;
  } catch (err) {
    console.log(err);
    return;
  }
}
