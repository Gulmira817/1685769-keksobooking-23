import { loadData } from './api.js';
import { DATA_URL, RERENDER_DELAY } from './constants.js';
import { getData, storeData, prepareData } from './store.js';
import { renderCard } from './card.js';
import {addEventListeners, resetForm } from './form.js';
import {debounce} from './utils.js';
import { disableForms, enableForms } from './dom-utils.js';
import { PIN_MAIN_MARKER, initMap, addAddress, addPins,removePins } from './map.js';
import { filterAds } from './filters.js';
import {addEventListenersImages} from './avatar.js';

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

const onMapSuccess = () => {
  enableForms();
  addAddress(PIN_MAIN_MARKER);
  addEventListeners(debounce((rerenderPins), RERENDER_DELAY));
  loadData(DATA_URL, onDataLoad, console.error)
};

addEventListenersImages();

disableForms()
initMap(onMapSuccess);
