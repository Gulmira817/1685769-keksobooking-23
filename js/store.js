import { isFunction } from './utils.js';

let initialData = null;
let preparedData = null;
const MAX_ROWS = 10;

const prepareData = (filterFn) => {
  preparedData = [...initialData];

  if ((isFunction(filterFn))) {
    preparedData = preparedData.filter(filterFn);
  }
  preparedData = preparedData.slice(0, MAX_ROWS);
};

const getData = () => preparedData;

const storeData = (data) => {
  initialData = data;
  preparedData = data;
};

export { getData, storeData, prepareData };
