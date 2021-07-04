const genarateTags = (element, className, text, fragment) => {
  let tag
  if (text === null) {
    element.classList.add('hidden')
  } else {
    if (text.includes('wifi')) {
      tag = element.querySelector('.popup__features')
      tag.textContent = text
    } else if (text.includes('dishwasher')) {
      tag = element.querySelector('.popup__feature--dishwasher')
      tag.textContent = text
    } else if (text.includes('parking')) {
      tag = element.querySelector('.popup__feature--parking')
      tag.textContent = text
    } else if (text.includes('washer')) {
      tag = element.querySelector('.popup__feature--washer')
      tag.textContent = text
    } else if (text.includes('elevator')) {
      tag = element.querySelector('.popup__feature--elevator')
    } else if (text.includes('conditioner')) {
      tag = element.querySelector('.popup__feature--conditioner')
      tag.textContent = text
    } else if (text.includes('img/avatars/user')) {
      tag = element.querySelector('.popup__avatar')
      tag.src = text
    } else {
      tag = element.querySelector(className)
      tag.textContent = text
      console.log(tag.textContent)
    }
    fragment.appendChild(tag)
  }
  return fragment.element
}

export { genarateTags }
