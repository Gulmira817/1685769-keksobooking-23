import { modeField } from "./mode-fields.js";
import { mapInit } from "./map.js";
const formPage = () => {
  const mapFilter = document.querySelector(".map__filters");
  const elementsForm = mapFilter.querySelectorAll(".map__filter");
  const form2 = document.querySelector(".ad-form");
  const elementsForm2 = form2.querySelectorAll(".ad-form__element");
  modeField(elementsForm, true);
  modeField(elementsForm2, true);
  console.log("The page has dont loaded");

  const map = document.querySelector("#map-canvas");
  window.onload = function (event) {
    mapInit();
    modeField(elementsForm, false);
    modeField(elementsForm2, false);
    console.log("The page has fully loaded");
  };
  //   map.addEventListener("load", () => {
  //     modeField(elementsForm, false);
  //     modeField(elementsForm2, false);

  //     console.log("The page has fully loaded");
  //   });
  // };
  map.onload = function (event) {
    // mapInit();
    modeField(elementsForm, false);
    modeField(elementsForm2, false);
    console.log("The page has fully loaded");
  };
  // mapInit();
};
export { formPage };
