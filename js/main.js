// import { loadData } from './api.js';
// import { DATA_URL } from './constants.js';
// import { getData,storeData ,prepareData} from './store.js';
import { getAds } from './data.js';
import { renderCard } from './card.js';
import { validateForm ,addValidators} from './form.js';
// import { disableForms, enableForms } from './dom-utils.js';
import { PIN_MAIN_MARKER, initMap, addAddress, addPins } from './map.js';
const data = getAds()

addValidators()
validateForm()
// enableForms();

const onDataLoad=(ads)=>{
  storeData(ads)
  prepareData()
}
 const onMapSuccess = () => {

  addAddress(PIN_MAIN_MARKER);
  addPins(data,renderCard)


 };
initMap(onMapSuccess);
