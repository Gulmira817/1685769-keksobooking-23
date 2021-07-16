import { formPage } from "./utils/form.js";
import { createObject } from "./data/data2.js";
import { getRandomSorter, createGetRandomItem } from "./utils.js";
// formPage();
const ad = createObject();

const numbers = [12, 2, 34, 4, 6, 11, 7, 67, 9];

const getCreateObjects = (count) => {
  const randObjs = [];
  for (let i = 0; i < count; i++) {
    randObjs.push(createObject());
  }
  return randObjs;
};

const objs = getCreateObjects(4);
console.log(objs);
