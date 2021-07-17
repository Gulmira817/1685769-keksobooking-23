import {
  FEATURES,
  PHOTOS,
  TIME_SLOTS,
  TYPES,
  AVATAR_NUMBERS,
  LAT,LNG
} from '../constants.js';
import {
  createGetRandomItem,
  getRandomItem,
  getRandomItems,
  getId,
  getRandomFloat
} from '../utils.js';

const getAvatarIdx= createGetRandomItem(AVATAR_NUMBERS);
// const id = getId();
const padLeft = (idx) => `${idx}`.padStart(2, 0);
const getAvatar = (idx) => `img/avatars/user${padLeft(idx)}.png`;
// const getAvatar1 = (idx) => `photos/${id}.jpg`;
// const getAvatarUrl = (idx) => `img/avatar-${idx}.svg`;

const getRandomAd = () => {
  const price =  getRandomFloat(10,20,3);
  const countRooms =  getRandomFloat(10,20);
  const countGuests = getRandomFloat(10,20);
  const lat = getRandomFloat(LAT,5);
  const lng = getRandomFloat(LNG,5);
  const time = getRandomItems(TIME_SLOTS);
  const feature = getRandomItems(FEATURES);
  const photos = getRandomItems(PHOTOS);
  const type = getRandomItem(TYPES);
  const avatarIdx =getAvatarIdx();

  return {
    author: {
      id:getId(),
      avatar: getAvatar(avatarIdx),
    },
    offer: {
      title: 'Квартира вашей мечты !',
      address: `${lat},${lng}`,
      price: price,
      type: type,
      rooms: countRooms,
      guests: countGuests,
      checkin: time,
      checkout: time,
      features: feature,
      description:
        'Это очень тихое, уютное место, где будет царить покой и порядок.\n' +
        'Квартира очень большая и просторная,в ней большие окна,длинный балкон,гостиная с камином, фортепиано и аквариум',
      photos: photos,
    },
    location: {
       lat,
       lng,
    },
  };
};

export { getRandomAd };
