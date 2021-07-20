const DEFAULT_SELECT_VALUES ={
  type:'any',
  price:'any',
  rooms:'any',
  guests:'any',
}

const DEFAULT_FEATURE_VALUES ={
  wifi:false,
  dishwasher:false,
  parking:false,
  washer:false,
  elevator:false,
  conditioner:false
}

let features = { ...DEFAULT_FEATURE_VALUES };
let selectValues = { ...DEFAULT_SELECT_VALUES };

const  setSelectValue=(name,value)=>{
  selectValues[name]=value
}
const  setFeatureValue=(name,value)=>{
  features[name]=value
};

const checkPrice = (value, price) => {
  switch (value) {
    case priceValue.min:
      if (price > PRICE_FILTER_MIN) {
        return false;
      }

      break;

    case priceValue.middle:
      if (price < PRICE_FILTER_MIN || price >= PRICE_FILTER_MAX) {
        return false;
      }

      break;

    case priceValue.max:
      if (price < PRICE_FILTER_MAX) {
        return false;
      }

      break;
  }

  return true;
};

const filterAds = (ad) => {
  for (const key of SELECT_KEYS) {
    const value = selectValues[key];

    if (value !== SELECT_KEY_ANY) {
      if (key !== SELECT_VALUE_PRICE && String(ad.offer[key]) !== value) {
        return false;
      }

      if (key === SELECT_VALUE_PRICE && !checkPrice(value, ad.offer[key])) {
        return false;
      }
    }
  }

  const featureKeys = Object.keys(features);
  const adFeatures = ad.offer.features || [];

  for (const feature of featureKeys) {
    if (features[feature] && !adFeatures.includes(feature)) {
      return false;
    }
  }

  return true;
};
const resetFilterValues = () => {
  features = { ...DEFAULT_FEATURE_VALUES };
  selectValues = { ...DEFAULT_SELECT_VALUES };
};


export {filterAds,setSelectValue,setFeatureValue,resetFilterValues}
