import { loadData } from './api.js';
import { DATA_URL, RERENDER_DELAY } from './constants.js';
import { getData, storeData, prepareData } from './store.js';
import { renderCard } from './card.js';
import {addEventListeners, resetForm } from './form.js';
import {debounce} from './utils.js';
import {BUTTON_RESET} from './constants.js';
import { disableForms, enableForms } from './dom-utils.js';
import { PIN_MAIN_MARKER, initMap, addAddress, addPins,removePins } from './map.js';
import { filterAds } from './filters.js';
import {addEventListenerFotos,resetImage} from './avatar.js';

const rerenderPins = () => {
  prepareData(filterAds);
  removePins();
  addPins(getData(), renderCard);
};

const onDataLoad = (ads) => {
  storeData(ads)
  prepareData()
  addPins(getData(), renderCard)
}

const onReset = (evt) => {
  evt.preventDefault();
  resetForm();
  resetImage();
  removePins();
  prepareData();
  addPins(getData(), renderAd);
};

const onMapSuccess = () => {
  enableForms();
  addAddress(PIN_MAIN_MARKER);
  addEventListeners(debounce((rerenderPins), RERENDER_DELAY));
  loadData(DATA_URL, onDataLoad, console.error)
};

BUTTON_RESET.addEventListener('click', onReset);
addEventListenerFotos();

disableForms()
initMap(onMapSuccess);
