import { validateHeader, validatePrice, PriceValue, HeaderLength } from './validate.js'
import {LIMIT_MIN_PRICE } from './constants.js'

const FORM = document.querySelector('.ad-form')
const HEADER = FORM.querySelector('#title')
const ADDRESS = FORM.querySelector('#address')
const PRICE = FORM.querySelector('#price')
const ROOM_NUMBER = FORM.querySelector('#room_number')
const CAPACITY = FORM.querySelector('#capacity')
const TYPE = FORM.querySelector('#type')
const TIME_IN = FORM.querySelector('#timein')
const TIME_OUT = FORM.querySelector('#timeout')

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
  TIME_OUT.value=value
};

//------------------------------------------------------------------------------

const handleHeaderChange = (evt) => {
  const element=evt.target
  const value = element.value
  if (!validateHeader(value)) {
    element.setCustomValidity(`Мин. ${HeaderLength.MIN} знаков,макс. ${HeaderLength.MAX}`)
  } else {
    element.setCustomValidity('')

  }
  element.reportValidity();
}

const handlePriceChange = (evt) => {
  const element=evt.target
  const value = element.value
  if (!validatePrice(Number(value))) {
    element.setCustomValidity(`Мин. ${PriceValue.MIN}  макс. ${PriceValue.MAX}`)
  } else {
    element.setCustomValidity('')
  }
  element.reportValidity();
}

const handleLimitPrice = () => {
  PRICE.value = LIMIT_MIN_PRICE[TYPE.value];
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
const addValidators = () => {
  HEADER.addEventListener('input', handleHeaderChange)
  PRICE.addEventListener('input', handlePriceChange)
  ROOM_NUMBER.addEventListener('input', handleRoomsCapacityChange)
  CAPACITY.addEventListener('input', handleRoomsCapacityChange)
  TYPE.addEventListener('change', handleLimitPrice);
  TIME_OUT.addEventListener('change', handleTimeChange)
  TIME_IN.addEventListener('change', handleTimeChange)
}

const validateForm = (form) => {
};


prepareForms();
export { validateForm, addValidators,FORM,ADDRESS }
