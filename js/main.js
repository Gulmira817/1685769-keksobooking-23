import { loadData } from './api.js';
import { DATA_URL } from './constants.js';
import { getData,storeData ,prepareData} from './store.js';
import { getAds } from './data.js';
import { renderCard } from './card.js';
import { validateForm ,addValidators} from './form.js';
import { disableForms, enableForms } from './dom-utils.js';
import { PIN_MAIN_MARKER, initMap, addAddress, addPins } from './map.js';

const onDataLoad=(ads)=>{
  storeData(ads)
  prepareData()
  addPins(getData(),renderCard)
}

 const onMapSuccess = () => {
  enableForms();
  addAddress(PIN_MAIN_MARKER);
  addValidators()
  loadData(DATA_URL,onDataLoad,console.error)
 };

initMap(onMapSuccess);
