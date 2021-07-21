const MIN_INDEX = 0;
const NUMBER_MIN = 1;
const STRUNG_INDEX = 2;
const ROOM_MAX = 3;
const GUESTS_MAX = 3;
const NUMBER_OBJECTS = 10;
const PRICE_MAX = 1000000;
const MAX_PRICE = 1000000;
const LIMIT_SINGS = 5;
const PRICE_FILTER_MIN = 10000;
const PRICE_FILTER_MAX = 50000;
const RERENDER_DELAY = 500;

const FORM = document.querySelector('.ad-form')
const HEADER = FORM.querySelector('#title')
const ADDRESS = FORM.querySelector('#address')
const PRICE = FORM.querySelector('#price')
const ROOM_NUMBER = FORM.querySelector('#room_number')
const CAPACITY = FORM.querySelector('#capacity')
const TYPE = FORM.querySelector('#type')
const TIME_IN = FORM.querySelector('#timein')
const TIME_OUT = FORM.querySelector('#timeout')
const DESCRIPTION = FORM.querySelector('#description');
const GUESTS_NUMBER = FORM.querySelector('#capacity');
const HOUSING_FEATURES = document.querySelector('#housing-features')
const MAP_FILTERS = document.querySelector('.map__filters')
const MAP_FEATURES = MAP_FILTERS.querySelector('.map__features');
const HOUSING_TYPE = MAP_FILTERS.querySelector('#housing-type');
const HOUSING_PRICE = MAP_FILTERS.querySelector('#housing-price');
const HOUSING_ROOMS = MAP_FILTERS.querySelector('#housing-rooms');
const HOUSING_GUESTS = MAP_FILTERS.querySelector('#housing-guests');
const CHECKBOXES = document.querySelectorAll('input[type=checkbox]');
const PREVIEW = FORM.querySelector('.ad-form-header__preview img');
const BUTTON_RESET = FORM.querySelector('.ad-form__reset');

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

const NameLength = {
  MIN: 30,
  MAX: 100,
};

const GUESTS = ["гостя", "гостей", "гостей"]
const ROOMS = ["комната", "комнаты", "комнат"]

export {
  FORM,
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
  DESCRIPTIONS,
  Location,
  TITLES,
  PHOTOS,
  AD_TYPES,
  GUESTS,
  ROOMS,
  LIMIT_MIN_PRICE,
  DATA_URL,
  PRICE_FILTER_MIN,
  PRICE_FILTER_MAX,
  HEADER,
  ADDRESS,
  PRICE ,
  ROOM_NUMBER,
  CAPACITY ,
  TYPE ,
  TIME_IN,
  TIME_OUT ,
  DESCRIPTION ,
  FEATURES,
  MAP_FILTERS ,
  MAP_FEATURES ,
  HOUSING_TYPE,
  HOUSING_PRICE,
  HOUSING_ROOMS ,
  HOUSING_GUESTS ,
  CHECKBOXES ,
  SAVE_URL,
  HOUSING_FEATURES,
  GUESTS_NUMBER,
  MAX_PRICE,
  PREVIEW,
  NameLength,
  RERENDER_DELAY,
  BUTTON_RESET
};
