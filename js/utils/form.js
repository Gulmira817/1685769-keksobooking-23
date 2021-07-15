import { modeField } from "./mode-fields.js";
import { mapInit } from "./get-map.js";
const formPage = () => {
  const mapFilterForm = document.querySelector(".map__filters");
  const elementsMapFilter = mapFilterForm.querySelectorAll(".map__filter");
  const adForm = document.querySelector(".ad-form");
  const elementsAdForm = adForm.querySelectorAll(".ad-form__element");

  const map = document.querySelector("#map-canvas");
  window.addEventListener("load", function () {
    modeField(elementsMapFilter, true);
    modeField(elementsAdForm, true);
    console.log("window");
    mapInit();
    // map.addEventListener("load", modeField(elementsMapFilter, false));
    map.addEventListener("load", () => {
      modeField(elementsMapFilter, false);
      modeField(elementsAdForm, false);
      console.log("map");
    });
  });

  //   modeField(elementsAdForm, false);
  //   console.log("map");
  // });
};
export { formPage };
