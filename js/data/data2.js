import {
  FEATURES,
  PHOTOS,
  TIME_SLOTS,
  TYPES,
  AVATAR_NUMBERS,
} from "../constants.js";
import {
  createGetRandomItem,
  getRandomItem,
  getRandomItems,
  getRandomPositiveInteger,
  getRandomFloat,
  getId,
  fillBy,
  getRandomComment,
} from "../utils.js";

const id = getId();
const padLeft = (idx) => `${idx}`.padStart(2, 0);
const getAvatar = (idx) => `img/avatars/user${padLeft(idx)}.png`;
const getAvatar1 = (idx) => `photos/${id}.jpg`;
const getAvatarUrl = (idx) => `img/avatar-${idx}.svg`;

const createObject = () => {
  const price = Math.floor(Math.random() * 5550);
  const countRooms = Math.ceil(Math.random() * 34);
  const countGuests = Math.ceil(Math.random() * 34);
  const lat = getRandomFloat(35.65, 35.7, 5);
  const lng = getRandomFloat(139.7, 139.8, 5);
  const typeIndex = getRandomPositiveInteger(0, 4);
  const time = getRandomItems(TIME_SLOTS);
  const feature = getRandomItem(FEATURES);
  const photos = getRandomItem(PHOTOS);
  const types = getRandomItem(TYPES);
  const getRandomAvatarIdx = createGetRandomItem(AVATAR_NUMBERS);
  console.log("avatar" + getRandomAvatarIdx());
  return {
    author: {
      id,
      avatar: getAvatar(getRandomAvatarIdx()),
      avatar1: getAvatar1(id),
    },
    offer: {
      title: "Квартира вашей мечты !",
      address: `${lat},${lng}`,
      price: price,
      type: types,
      rooms: countRooms,
      guests: countGuests,
      checkin: time,
      checkout: time,
      features: feature,
      description:
        "Это очень тихое, уютное место, где будет царить покой и порядок.\n" +
        "Квартира очень большая и просторная,в ней большие окна,длинный балкон,гостиная с камином, фортепиано и аквариум",
      photos: photos,
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

export { createObject };
