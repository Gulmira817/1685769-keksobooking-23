import {
  HEADER,
  PRICE,
  NameLength,
  MAX_PRICE,
  LIMIT_MIN_PRICE,
  ROOM_NUMBER,
  GUESTS_NUMBER,
  TYPE,
  TIME_IN,
  TIME_OUT,
  MAP_FILTERS,
  MAP_FEATURES,
  DESCRIPTION,
  PREVIEW,
  CHECKBOXES
} from './constants.js';

import {
  setFeatureValue,
  setSelectValue
} from './filters.js';

const onTitleCheck = () => {
  const valueLength = HEADER.value.length;
  if (valueLength < NameLength.MIN) {
    HEADER.setCustomValidity(`Еще ${NameLength.MIN - valueLength} символов`);
  } else if (valueLength > NameLength.MAX) {
    HEADER.setCustomValidity(`Удалите лишние ${valueLength - NameLength.MAX} символов`);
  } else {
    HEADER.setCustomValidity('');
  }
  HEADER.reportValidity();
};

const onPriceCheck = () => {
  const value = PRICE.value;
  if (value >= MAX_PRICE) {
    PRICE.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
};

const onRoomsCheck = () => {
  const guests = GUESTS_NUMBER.value;
  const rooms = ROOM_NUMBER.value;
  if (rooms === '100' && guests !== '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «не для гостей»');
  } else if (rooms === '3' && guests === '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 3 гостей», «для 2 гостей» или «для 1 гостя»');
  } else if (rooms === '1' && guests !== '1') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 1 гостя»');
  } else if (rooms === '2' && guests === '0' || rooms === '2' && guests === '3') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 2 гостей» или «для 1 гостя»');
  } else {
    GUESTS_NUMBER.setCustomValidity('');
  }
  GUESTS_NUMBER.reportValidity();
};

const addPriceValue = () => {
  PRICE.placeholder = LIMIT_MIN_PRICE[TYPE.value];
  PRICE.min = LIMIT_MIN_PRICE[TYPE.value];
};

const onTypeSynchronize  = () => {
  PRICE.placeholder = LIMIT_MIN_PRICE[TYPE.value];
  addPriceValue();
};

const onTimeinSynchronize = () => {
  TIME_OUT.value = TIME_IN.value;
};

const onTimeoutSynchronize = () => {
  TIME_IN.value = TIME_OUT.value;
};

const getOnFeatureChange = (onChange) => (evt) => {
  const element = evt.target;
  const name = element.value;
  const value = element.checked;

  setFeatureValue(name, value);
  onChange();
};

const getOnFilterChange = (onChange) => (evt) => {
  const element = evt.target;

  if (element.type === 'checkbox') {
    return;
  }
  const name = element.name.split('-')[1];
  const value = element.value;
  setSelectValue(name, value);
  onChange();
};

const resetForm = () => {
  HEADER.value = '';
  DESCRIPTION.value = '';
  PRICE.value = '';
  ROOM_NUMBER.value = '1';
  GUESTS_NUMBER.value = '1';
  TYPE.value = 'flat';
  TIME_IN.value = '12:00';
  TIME_OUT.value = '12:00';
  PREVIEW.src = 'img/muffin-grey.svg';

  CHECKBOXES.forEach((checkbox) => checkbox.checked = false);
};

onRoomsCheck();
addPriceValue();

const addEventListeners = (onFiltersChange) => {
  HEADER.addEventListener('input', onTitleCheck);
  PRICE.addEventListener('input', onPriceCheck);
  ROOM_NUMBER.addEventListener('change', onRoomsCheck);
  GUESTS_NUMBER.addEventListener('change', onRoomsCheck);
  TYPE.addEventListener('change', onTypeSynchronize );
  TIME_IN.addEventListener('change', onTimeinSynchronize);
  TIME_OUT.addEventListener('change', onTimeoutSynchronize);

  const onFilterChange = getOnFilterChange(onFiltersChange);
  const onFeatureChange = getOnFeatureChange(onFiltersChange);

  MAP_FILTERS.addEventListener('change', onFilterChange);
  MAP_FEATURES.addEventListener('change', onFeatureChange);
};

export {
  addEventListeners,
  resetForm
};

