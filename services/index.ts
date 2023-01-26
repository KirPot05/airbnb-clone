import {
  ACCOMODATION_PLACES_API_URL,
  FETCH_EXPLORE_ENDPOINT,
  NEARBY_PLACES_API_URL,
  RAPIDX_API_KEY,
  RAPIDX_EXPLORE_API_HOST,
} from "../config/constants";

export async function fetchExploreData() {
  try {
    const res = await fetch(FETCH_EXPLORE_ENDPOINT, {
      headers: {
        "X-RapidAPI-Key": RAPIDX_API_KEY,
        "X-RapidAPI-Host": RAPIDX_EXPLORE_API_HOST,
        "X-User-Agent": "desktop,mobile",
      },
    });
    const exploreData = await res.json();

    return exploreData;
  } catch (err) {
    console.log(err);
    return;
  }
}

export async function exploreNearbyData() {
  try {
    const response = await fetch(NEARBY_PLACES_API_URL);
    const nearbyPlaces = await response.json();

    return nearbyPlaces;
  } catch (err) {
    console.log(err);
    return;
  }
}

export async function fetchAccomodationPlaces() {
  try {
    const response = await fetch(ACCOMODATION_PLACES_API_URL);
    const places = await response.json();

    return places;
  } catch (err) {
    console.log(err);
    return;
  }
}
