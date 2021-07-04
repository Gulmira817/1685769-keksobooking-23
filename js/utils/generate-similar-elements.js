import { createObject } from '../data/data.js'
import { genarateTags } from '../utils/generate-tag.js'
const generateSimilarElements = () => {
  const roots = []
  roots.push(createObject())
  const translateType = function (type) {
    let typeRus = ''
    if (type.includes('flat')) {
      typeRus = 'Квартира'
    } else if (type.includes('bungalow')) {
      typeRus = 'Бунгало'
    } else if (type.includes('house')) {
      typeRus = 'Дом'
    } else if (type.includes('palace')) {
      typeRus = 'Дворец'
    } else if (type.includes('hotel')) {
      typeRus = 'Отель'
    }
    return typeRus
  }
  const fragment = document.createDocumentFragment()
  const templateCard = document.querySelector('#card').content
  const template1 = templateCard.querySelector('.popup')
  const template = template1.cloneNode(true)
  const offer = roots[0].offer
  genarateTags(template, '.popup__title', offer.title, fragment)
  genarateTags(template, '.popup__text--address', offer.address, fragment)
  genarateTags(template, '.popup__text--price', offer.price + ' ₽/ночь', fragment)
  genarateTags(template, '.popup__type', translateType(offer.type), fragment)
  genarateTags(template, '.popup__text--capacity', offer.rooms + ' комнаты для ' + offer.guests + ' гостей', fragment)
  genarateTags(template, '.popup__text--time', 'Заезд после ' + offer.checkin + ' , выезд до ' + offer.checkout, fragment)
  genarateTags(template, '.popup__feature--wifi', offer.features, fragment)
  genarateTags(template, '.popup__description', offer.description, fragment)
  genarateTags(template, '.popup__photos', offer.photos, fragment)
  genarateTags(template, '.popup__avatar', roots[0].author.avatar, fragment)
  console.log(fragment)
  return fragment
}

export { generateSimilarElements }
