
import { getAds } from './data.js';
import { renderCard } from './card.js';
import { validateForm ,addValidators} from './form.js';
import { disableForms, enableForms } from './dom-utils.js';
// disableForms();
// enableForms()
const ad = getAds()
const dd = ad[0]
addValidators()
validateForm()
// setTimeout(enableForms, 10000)
// console.log(renderCard(dd))
