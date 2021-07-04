
const genarateTags = (element, className, text, fragment) => {
  let tag
  if (text === null) {
    element.classList.add('hidden')
  } else {
    if (className.includes('popup__feature')) {
      tag = element.querySelector(className + `--${text}`)
      tag.textContent = text
    } else if (text.includes('img/avatars/user')) {
      tag = element.querySelector('.popup__avatar')
      tag.src = text
    } else {
      tag = element.querySelector(className)
      tag.textContent = text
    }
    fragment.appendChild(tag)
  }
  console.log(fragment.appendChild(tag))
  return fragment.element
}

export { genarateTags }
