const AD_FORM = document.querySelector('.ad-form')
const MAP_FILTERS = document.querySelector('.map__filters')

const FORMS = [
  {
    element: AD_FORM,
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
    if (!features|| !features.includes(classes[1])) {
      element.remove();
    }
  });
}

const renderPhotos = (element, photos) => {
  const fragment = document.createDocumentFragment();
  if(!photos){
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

const disableForms = () => switchForms(false)
const enableForms = () => switchForms(true)

export {
  removeExtraFeatures,
  renderPhotos,
  setOrRemove,
  disableForms,
  enableForms
};
