import { FORM, MAP_FILTERS,SUCCESS,ERROR,ERROR__LOAD,ERROR_BUTTON,SHOW_TIME } from './constants.js'

const successElement = SUCCESS.cloneNode(true);
const errorLoading = ERROR__LOAD.cloneNode(true);
const errorAdCreation = ERROR.cloneNode(true);

const FORMS = [
  {
    element: FORM,
    disabledClass: 'ad-form--disabled',
    selector: 'fieldset.ad-form__element'
  },
  {
    element: MAP_FILTERS,
    disabledClass: 'map__filters--disabled',
    selector: 'select,  fieldset'
  }
]

const removeExtraFeatures = (elements, features) => {
  elements.forEach((element) => {

    const classes = element.classList[1].split('--');
    if (!features || !features.includes(classes[1])) {
      element.remove();
    }
  });
}

const renderPhotos = (element, photos) => {
  const fragment = document.createDocumentFragment();
  if (!photos) {
    return fragment
  }
  photos.forEach((photoUrl) => {
    const photoElement = element.cloneNode(true);
    photoElement.src = photoUrl;
    fragment.appendChild(photoElement)
  });
  element.remove();
  return fragment;
}

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
  element.textContent = text ?? value
}

const switchForm = (forms, className, selector, enable) => {
  if (enable) {
    forms.classList.remove(className)
  } else {
    forms.classList.add(className)
  }
  const controls = forms.querySelectorAll(selector)
  controls.forEach((control) => {
    if (enable) {
      control.removeAttribute('disabled')
    } else {
      control.setAttribute('disabled', true)
    }
  })
}

const switchForms = (enable) => {
  FORMS.forEach(({ element, disabledClass, selector }) => {
    switchForm(element, disabledClass, selector, enable)

  })
}

const deactivateFilters = () => {
  MAP_FILTERS.classList.add('ad-form--disabled');
  MAP_FEATURES.disabled = true;
  MAP_FILTERS.forEach((filter) => {
    filter.disabled = true;
  });
};

const onError = () => {
  document.append(errorLoading);
  deactivateFilters();
};


setTimeout(() => {
  errorLoading.remove();
}, SHOW_TIME);

const onSuccessRemove = () => {
  successElement.remove();
  document.removeEventListener('click', onSuccessRemove);
};

const onElementEscRemove = () => {
  if (isEscEvent) {
    onSuccessRemove();
    document.removeEventListener('keydown', onElementEscRemove);
  }
};

const alertSuccess = () => {
  document.addEventListener('keydown', onElementEscRemove);
  document.append(successElement);
  document.addEventListener('keydown', onElementEscRemove);
  document.addEventListener('click', onSuccessRemove);
};

const onErrorRemove = () => {
  errorAdCreation.remove();
  document.removeEventListener('click', onErrorRemove);
  ERROR_BUTTON.removeEventListener('click', onErrorRemove);

};

const onErrorEscRemove = () => {
  if (isEscEvent) {
    onErrorRemove();
    document.removeEventListener('keydown', onErrorEscRemove);
  }
};

const alertError = () => {
  document.append(errorAdCreation);
  document.addEventListener('keydown', onErrorEscRemove);
  document.addEventListener('click', onErrorRemove);
  ERROR_BUTTON.addEventListener('click', onErrorRemove);
};
const disableForms = () => switchForms(false)
const enableForms = () => switchForms(true)

export {
  removeExtraFeatures,
  renderPhotos,
  setOrRemove,
  disableForms,
  enableForms,
  fillPhotoOrDelete,
  onError,
  alertSuccess,
  alertError

};
