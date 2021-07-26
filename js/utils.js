import { STRUNG_INDEX, NUMBER_MIN } from './constants.js';

function getRandomPositiveInteger(a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}
function getRandomPositiveFloat(a, b, digits = 1) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки
  return result.toFixed(digits);
}

const randomCompareItems = () => Math.floor(Math.random() * 30) - 10;

const createGetRandomItem = (data) => {
  const mixed = [...data].sort(randomCompareItems);
  let idx = 0;
  const getRandomItem2 = () => {
    const result = mixed[idx++ % mixed.length];
    return result;
  };
  return getRandomItem2;
};

const isPositiveNumber = (value) => typeof value === 'number' && value >= 0;

const getRandomFloat = (...args) => {
  const errorIndex = args.findIndex((value) => !isPositiveNumber(value));
  if (errorIndex >= 0) {
    // throw new Error(`неверный тип по индексу ${errorIndex}.`);
  }
  const [min, max, dec] = args;
  const pow = Math.pow(10, dec);
  return Math.round((Math.random() * (max - min) + min) * pow) / pow;
};

const getRandomNumber = (min, max) => getRandomFloat(min, max, 0);
const padLeft = (index) => String(index).padStart(STRUNG_INDEX, '0');
const createAuthorUrl = (index) => `img/avatars/user${padLeft(index)}.png`;
const getRandomItem = (items) =>
  items[getRandomNumber(NUMBER_MIN, items.length - 1)];

const getRandomBoolean = () => Math.random() < 0.75;
// const getRandomItem = (array) => array[getRandomFloat(0, array.length)];
const getPluralIdx = (count) => {
  const c10 = count % 10;
  const c100 = count % 100;

  if (c10 === 1 && c100 !== 11) {
    return 0;
  }
  if (c10 >= 2 && c10 <= 4 && (c100 < 10 || c100 >= 20)) {
    return 1;
  }
  return 2;
};

const pluralize = (count, plurals) => plurals[getPluralIdx(count)];
const getPlural = (count, plurals) => `${count} ${pluralize(count, plurals)}`;
const createArrayRandom = (items) => items.filter(getRandomBoolean);

const fillBy = (count, cb) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(cb());
  }
  return result;
};

const isFunction =(arg)=>typeof arg ==='function';
function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
export {
  fillBy,
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  randomCompareItems,
  createGetRandomItem,
  isPositiveNumber,
  getRandomFloat,
  getRandomNumber,
  createAuthorUrl,
  getRandomBoolean,
  getRandomItem,
  createArrayRandom,
  getPlural,
  isFunction,
  debounce
};
