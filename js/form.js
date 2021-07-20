import { validateHeader, validatePrice, PriceValue, HeaderLength } from './validate.js'
import { LIMIT_MIN_PRICE, SAVE_URL } from './constants.js'
import { setFeatureValue, setSelectValue, filterAds, resetFilterValues } from './filters.js';
import { saveData } from './api.js'
import { removePins,addPins } from './map.js'
import { prepareData,getData } from './store.js'
import { renderCard } from './card.js';

const FORM = document.querySelector('.ad-form')
const HEADER = FORM.querySelector('#title')
const ADDRESS = FORM.querySelector('#address')
const PRICE = FORM.querySelector('#price')
const ROOM_NUMBER = FORM.querySelector('#room_number')
const CAPACITY = FORM.querySelector('#capacity')
const TYPE = FORM.querySelector('#type')
const TIME_IN = FORM.querySelector('#timein')
const TIME_OUT = FORM.querySelector('#timeout')
const FEATURES = document.querySelector('#housing-features')
const MAP_FILTERS = document.querySelector('.map__filters')
const DESCRIPTION = FORM.querySelector('#description');

const prepareHeader = () => {
  HEADER.setAttribute('required', true)
  HEADER.setAttribute('minLength', HeaderLength.MIN)
  HEADER.setAttribute('maxLength', HeaderLength.MAX)
}

const prepareAddresss = () => {
  ADDRESS.setAttribute('required', true)
  ADDRESS.setAttribute('value', 'Введите адрес')
}

const preparePrice = () => {
  PRICE.setAttribute('required', true)
  PRICE.setAttribute('min', PriceValue.MIN)
  PRICE.setAttribute('max', PriceValue.MAX)
}

const prepareForms = () => {
  prepareHeader();
  prepareAddresss();
  preparePrice();
};


const handleTimeChange = (evt) => {
  const value = evt.target.value
  TIME_IN.value = value
  TIME_OUT.value = value
};

//------------------------------------------------------------------------------

const handleHeaderChange = (evt) => {
  const element = evt.target
  const value = element.value
  if (!validateHeader(value)) {
    element.setCustomValidity(`Мин. ${HeaderLength.MIN} знаков,макс. ${HeaderLength.MAX}`)
  } else {
    element.setCustomValidity('')

  }
  element.reportValidity();
}

const handlePriceChange = (evt) => {
  const element = evt.target
  const value = element.value
  if (!validatePrice(Number(value))) {
    element.setCustomValidity(`Мин. ${PriceValue.MIN}  макс. ${PriceValue.MAX}`)
  } else {
    element.setCustomValidity('')
  }
  element.reportValidity();
}

const handleLimitPrice = () => {
  PRICE.placeholder = LIMIT_MIN_PRICE[TYPE.value];
  PriceValue.MIN = LIMIT_MIN_PRICE[TYPE.value];
};

const handleRoomsCapacityChange = () => {
  const rooms = Number(ROOM_NUMBER.value)
  const count = Number(CAPACITY.value)
  console.log('rooms' + rooms)
  console.log('count' + count)
  let message = '';
  if (rooms === 100) {
    if (count !== 0) {
      message = '100 комнат не для гостей.'
    }
  }
  else if (count === 0 || rooms < count) {
    message = 'Гостей должно быть меньше или равно количеству комнат.'
  }
  CAPACITY.setCustomValidity(message);
  CAPACITY.reportValidity();
}

const renderPins = () => {
  removePins();
  prepareData(filterAds);
  addPins(getData(), renderCard);
};

const onFeatureChange = () => (evt) => {
  const element = evt.target
  const name = element.value
  const value = element.checked

  setFeatureValue(name, value)
  renderPins();

}

const resetForms = (evt) => {
  evt.preventDefault();
  resetStartValues();
};

const onFilterChange = (onChange) => (evt) => {
  const element = evt.target
  if (element.type === 'checkbox') {
    return;
  }
  const name = element.name.split('-')[0]
  const value = element.checked

  setSelectValue(name, value)
  renderPins();
}

const validateForm = (form) => {
};

const onSubmitSuccess = () => console.log("succes")
const onSubmitError = () => console.log("error")

const onSubmit = (evt) => {
  const formData = new FormData(evt.target)
  console.log(formData)
  evt.preventDefault();

  saveData(SAVE_URL, formData, onSubmitSuccess, onSubmitError)
}


const resetStartValues = () => {

  resetFilterValues();
  HEADER.value = '';
  DESCRIPTION.value = '';
  PRICE.value = '';
  PRICE.placeholder = '1000';
  ROOM_NUMBER.value = '1';
  TYPE.value = 'flat';
  CAPACITY.value = '1';
  TIME_IN.value = '12:00';
  TIME_OUT.value = '12:00';

  renderPins();
};

const addEventListener = () => {
  HEADER.addEventListener('input', handleHeaderChange)
  PRICE.addEventListener('input', handlePriceChange)
  ROOM_NUMBER.addEventListener('input', handleRoomsCapacityChange)
  CAPACITY.addEventListener('input', handleRoomsCapacityChange)
  TYPE.addEventListener('change', handleLimitPrice);
  TIME_OUT.addEventListener('change', handleTimeChange)
  TIME_IN.addEventListener('change', handleTimeChange)
  FORM.addEventListener('submit', onSubmit)
  FORM.addEventListener('reset', resetForms);

  // const onFilterChange = getOnFilterChange(onFiltersChange)
  // const onFeatureChange = getOnFeatureChange(onFiltersChange)

  MAP_FILTERS.addEventListener('change', onFilterChange(onFilterChange))
  FEATURES.addEventListener('change', onFeatureChange(onFeatureChange))
}


prepareForms();
export { validateForm, addEventListener, FORM, ADDRESS,renderPins }
