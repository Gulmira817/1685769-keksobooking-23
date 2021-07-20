import { loadData } from './api.js';
import { DATA_URL } from './constants.js';
import { getData,storeData ,prepareData} from './store.js';
import { renderCard } from './card.js';
import { validateForm ,addEventListener} from './form.js';
import { disableForms, enableForms } from './dom-utils.js';
import { PIN_MAIN_MARKER, initMap, addAddress, addPins } from './map.js';
import { filterAds } from './filters.js';

const onDataLoad=(ads)=>{
  storeData(ads)
  prepareData()
  addPins(getData(),renderCard)
}

 const onMapSuccess = () => {
  enableForms();
  addAddress(PIN_MAIN_MARKER);
  addEventListener()
  loadData(DATA_URL,onDataLoad,console.error)
 };
 disableForms()
initMap(onMapSuccess);
