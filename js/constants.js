const MIN_INDEX = 0;
const NUMBER_MIN = 1;
const STRUNG_INDEX = 2;
const ROOM_MAX = 3;
const GUESTS_MAX = 3;
const NUMBER_OBJECTS = 10;
const PRICE_MAX = 1000000;
const LIMIT_SINGS = 5;

const DATA_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SAVE_URL = 'https://23.javascript.pages.academy/keksobooking';

const PHOTOS_URL =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking";

const TITLES = [
  "Квартира вашей мечты",
  "Уютная квартира",
  "Квартира  студия",
  "Смарт квартира ",
];

const TYPES = ["palace", "flat", "house", "bungalow", "hotel"];
const TIME_SLOTS = ["12:00", "13:00", "14:00"];

const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];

const PHOTOS = [
  `${PHOTOS_URL}/duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTOS_URL}/brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTOS_URL}/claire-rendall-b6kAwr1i0Iw.jpg`,
];

const DESCRIPTIONS = [
  "Очень тихое, уютное место , где будет царить покой и порядок",
  "Квартира очень большая и просторная с камином, фортепиано и аквариум",
  "Находиться в центре города,рядом удобный транспорт",
];

const Location = {
  LAT_MIN: 35.65,
  LAT_MAX: 35.7,
  LNG_MIN: 139.7,
  LNG_MAX: 139.8,
};


const AD_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель ',
};

const LIMIT_MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const GUESTS = ["гостя", "гостей", "гостей"]
const ROOMS = ["комната", "комнаты", "комнат"]

export {
  MIN_INDEX,
  NUMBER_MIN,
  STRUNG_INDEX,
  ROOM_MAX,
  GUESTS_MAX,
  NUMBER_OBJECTS,
  PRICE_MAX,
  LIMIT_SINGS,
  PHOTOS_URL,
  TYPES,
  TIME_SLOTS,
  FEATURES,
  DESCRIPTIONS,
  Location,
  TITLES,
  PHOTOS,
  AD_TYPES,
  GUESTS,
  ROOMS,
  LIMIT_MIN_PRICE,
  DATA_URL,
  SAVE_URL
};
