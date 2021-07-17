
import { getRandomAd } from './data/data.js';
import { fillBy } from './utils.js';


const ads = fillBy(4,getRandomAd);

console.log(ads)
