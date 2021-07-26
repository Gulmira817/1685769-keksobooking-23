import { FORM, MAP_FILTERS, ERROR__LOAD, SUCCESS, ERROR, BODY, ERROR_BUTTON } from './constants.js';

const successElement = SUCCESS.cloneNode(true);
const errorElement = ERROR.cloneNode(true);

const FORMS = [
  {
    element: FORM,
    disabledClass: 'ad-form--disabled',
    selector: 'fieldset.ad-form__element',
  },
  {
    element: MAP_FILTERS,
    disabledClass: 'map__filters--disabled',
    selector: 'select,  fieldset',
  },
];

const keys = {
  escape: 'Escape',
  esc: 'Escape',
};

const isEscEvent = (evt) => evt.key === keys.escape || evt.key === keys.esc;

const removeExtraFeatures = (elements, features) => {
  elements.forEach((element) => {

    const classes = element.classList[1].split('--');
    if (!features || !features.includes(classes[1])) {
      element.remove();
    }
  });
};

const renderPhotos = (element, photos) => {
  const fragment = document.createDocumentFragment();
  if (!photos) {
    return fragment;
  }
  photos.forEach((photoUrl) => {
    const photoElement = element.cloneNode(true);
    photoElement.src = photoUrl;
    fragment.appendChild(photoElement);
  });
  element.remove();
  return fragment;
};

const fillPhotoOrDelete = (photos, block, element) => {
  if (!photos || photos.length === 0) {
    element.remove();
  } else {
    photos.forEach((photo) => {
      const clonePhoto = element.cloneNode(true);
      clonePhoto.src = photo;
      block.appendChild(clonePhoto);
    });
    element.remove();
  }
};

const setOrRemove = (element, value, text) => {
  if (!value) {
    element.remove();
    return;
  }
  element.textContent = text ? text : value;
};

const switchForm = (forms, className, selector, enable) => {
  if (enable) {
    forms.classList.remove(className);
  } else {
    forms.classList.add(className);
  }
  const controls = forms.querySelectorAll(selector);
  controls.forEach((control) => {
    if (enable) {
      control.removeAttribute('disabled');
    } else {
      control.setAttribute('disabled', true);
    }
  });
};

const switchForms = (enable) => {
  FORMS.forEach(({ element, disabledClass, selector }) => {
    switchForm(element, disabledClass, selector, enable);

  });
};

const onError = () => {
  const cloneError = ERROR__LOAD.cloneNode(true);
  BODY.append(cloneError);
};

const removeSuccess = () => {
  successElement.remove();
  document.removeEventListener('click', removeSuccess);
};

const removeSuccessEsc = () => {
  if (isEscEvent) {
    removeSuccess();
    document.removeEventListener('keydown', removeSuccessEsc);
  }
};

const messageSuccess = () => {
  BODY.append(successElement);
  document.addEventListener('keydown', removeSuccessEsc);
  document.addEventListener('click', removeSuccess);
};


const removeError = () => {
  errorElement.remove();
  document.removeEventListener('click', removeError);
  ERROR_BUTTON.addEventListener('click', removeError);
};

const removeErrorEsc = () => {
  if (isEscEvent) {
    removeError();
    document.removeEventListener('keydown', removeErrorEsc);
  }
};

const messageError = () => {
  BODY.append(errorElement);
  document.addEventListener('keydown', removeErrorEsc);
  document.addEventListener('click', removeError);
  ERROR_BUTTON.addEventListener('click', removeError);
};

const disableForms = () => switchForms(false);
const enableForms = () => switchForms(true);

export {
  removeExtraFeatures,
  renderPhotos,
  setOrRemove,
  disableForms,
  enableForms,
  fillPhotoOrDelete,
  onError,
  messageSuccess,
  messageError
};
