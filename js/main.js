
import { getAds } from './data.js';
import { renderCard } from './card.js';
const ad = getAds()
const dd = ad[0]
console.log(renderCard(dd))

