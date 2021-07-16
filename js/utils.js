export function getRandomPositiveInteger(a, b) {
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
export function getRandomPositiveFloat(a, b, digits = 1) {
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

export const getRandomSorter = () => Math.floor(Math.random() * 3) - 1;
export const randomCompareItems = () => Math.floor(Math.random() * 30) - 10;

export const createGetRandomItem = (data) => {
  const mixed = [...data].sort(randomCompareItems);
  // const l = mixed.length;
  let idx = 0;
  const getRandomItem = () => {
    const result = mixed[idx % mixed.length];
    idx = idx + 1;
    return result;
  };
  return getRandomItem;
  return () => console.log(mixed[i++ % l]);
};

export const getRandomFloat = (...args) => {
  const [min, max, pow] = [
    Math.min(args[0], args[1]),
    Math.max(args[0], args[1]),
    Math.pow(10, args[2] ?? 0),
  ];
  return Math.round((Math.random() * (max - min) + min) / pow) * pow;
};
export const getRandomBoolean = () => Math.random() >= 0.5;
export const getRandomItem = (array) => array[getRandomFloat(0, array.length)];
export const getRandomItems = (array, canBeEmpty = true) => {
  const result = array.filter(getRandomBoolean);
  if (!canBeEmpty && result.length < 1) {
    result.push(array[Math.floor(Math.random() * array.length)]);
  }
  return result;
};

export const createGetId = (startValue = 1) => {
  let id = startValue;
  return () => id++;
};

export const getId = createGetId();

export const fillBy = (count, cb) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(cb());
  }
  return result;
};

export const getRandomComment = () => {
  const id = getCommmentId();
  return {
    id,
    avatar: getAvatarUrl(getRandomFloat(1, 6, 0)),
    message: "123",
    name: "Murad",
  };
};

export const getRandomComments = (count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(getRandomComment());
  }
  return comments;
};
