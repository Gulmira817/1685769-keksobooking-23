import { getRandomPositiveInteger } from "../utils/get-random-positive-integer.js";
import { getRandomMyPositiveInteger } from "../utils/get-random-my-positive-integer.js";
import {
  FEATURES,
  PHOTOS,
  TIME_SLOTS,
  TYPES,
  AVATAR_NUMBERS,
} from "../constants";
import {
  createGetRandomItem,
  getRandomItems,
  getRandomPositiveInteger,
  getRandomFloat,
  getId,
  getAvatarUrl,
  padLeft,
} from "../utils.js";

const createObject = () => {
  const id = getId();
  const price = Math.floor(Math.random() * 5550);
  const countRooms = Math.ceil(Math.random() * 34);
  const countGuests = Math.ceil(Math.random() * 34);
  const lat = getRandomFloat(35.65, 35.7, 5);
  const lng = getRandomFloat(139.7, 139.8, 5);
  const typeIndex = getRandomPositiveInteger(0, 4);
  const time = getRandomItem(TIME_SLOTS);
  const feature = getRandomItem(FEATURES);
  const getRandomAvatarIdx = createGetRandomItem(AVATAR_NUMBERS);

  const getRandomComment = () => {
    const id = getCommmentId();
    return {
      id,
      avatar: getAvatarUrl(getRandomFloat(1, 6, 0)),
      message: "123",
      name: "Murad",
    };
  };

  return {
    author: {
      id: getId(),
      avatar: `img/avatars/user${padLeft(idx)}.png`,
    },
    offer: {
      title: "Квартира вашей мечты !",
      address: `${lat},${lng}`,
      price: price,
      type: TYPES[typeIndex],
      rooms: countRooms,
      guests: countGuests,
      checkin: time,
      checkout: time,
      features: feature,
      description:
        "Это очень тихое, уютное место, где будет царить покой и порядок.\n" +
        "Квартира очень большая и просторная,в ней большие окна,длинный балкон,гостиная с камином, фортепиано и аквариум",
      photos: PHOTOS[Math.ceil(Math.random(0, photos.length - 1))],
    },
    location: {
      lat: lat,
      lng: lng,
    },
    comments: fillBy(getRandomFloat(3, 10), getRandomComment),
  };
};
// createObject()
export { createObject };
