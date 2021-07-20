import {
  MIN_INDEX,
  NUMBER_MIN,
  ROOM_MAX,
  GUESTS_MAX,
  NUMBER_OBJECTS,
  PRICE_MAX,
  LIMIT_SINGS,
  TYPES,
  TIME_SLOTS,
  FEATURES,
  DESCRIPTIONS,
  Location,
  TITLES,
  PHOTOS,
} from "./constants.js";

import {
  getRandomFloat,
  getRandomNumber,
  createAuthorUrl,
  getRandomItem,
  createArrayRandom,
} from "./utils.js";

const getAd = () => {
  const lat = getRandomFloat(Location.LAT_MIN, Location.LAT_MAX, LIMIT_SINGS);
  const lng = getRandomFloat(Location.LNG_MIN, Location.LNG_MAX, LIMIT_SINGS);
  const price = getRandomNumber(MIN_INDEX, PRICE_MAX);
  const countRooms = getRandomNumber(NUMBER_MIN, ROOM_MAX);
  const countGuests = getRandomNumber(NUMBER_MIN, GUESTS_MAX);
  const time = getRandomItem(TIME_SLOTS);
  const features = createArrayRandom(FEATURES);
  const photos = createArrayRandom(PHOTOS);
  const type = getRandomItem(TYPES);
  const title = getRandomItem(TITLES);
  const description = getRandomItem(DESCRIPTIONS);

  return {
    author: {
      avatar: createAuthorUrl(getRandomNumber(1, 6)),
    },
    offer: {
      title: title,
      address: `${lat},${lng}`,
      price: price,
      type: type,
      rooms: countRooms,
      guests: countGuests,
      checkin: time,
      checkout: time,
      features: features,
      description: description,
      photos: photos,
    },
    location: {
      lat,
      lng,
    },
  };

};

const getAds = () => {
  const ads = [];
  for (let idx = 0; idx < NUMBER_OBJECTS; idx++) {
    ads.push(getAd(idx + 1));
  }
  return ads
}

export { getAds };
