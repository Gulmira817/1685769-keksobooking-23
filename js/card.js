import { AD_TYPES, GUESTS, ROOMS } from './constants.js';
import { setOrRemove, removeExtraFeatures,fillPhotoOrDelete} from './dom-utils.js';
import { getPlural } from './utils.js';
const CARD_TEMPLATE = document.querySelector('#card');

const renderCard = (ad) => {
  const { offer, author } = ad;
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const title = card.querySelector('.popup__title');
  const address = card.querySelector('.popup__text--address');
  const price = card.querySelector('.popup__text--price');
  const type = card.querySelector('.popup__type');
  const capacity = card.querySelector('.popup__text--capacity');
  const avatar = card.querySelector('.popup__avatar');
  const description = card.querySelector('.popup__description');
  const time = card.querySelector('.popup__text--time');
  const featuresContainer = card.querySelector('.popup__features');
  const features = featuresContainer.querySelectorAll('.popup__feature');
  const photosContainer = card.querySelector('.popup__photos');
  const photoElement = photosContainer.querySelector('.popup__photo');
  const capacityText = `${getPlural(offer.rooms, ROOMS)} для  ${getPlural(offer.guests, GUESTS)} гостей`;
  const timeText = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  setOrRemove(title, offer && offer.title);
  setOrRemove(address, offer && offer.address);
  setOrRemove(price, offer && offer.price, `${offer && offer.price} ₽/ночь`);
  setOrRemove(type, offer && offer.type, `${AD_TYPES[offer && offer.type] || ''}`);
  setOrRemove(capacity, offer && offer.rooms * offer && offer.guests, capacityText);
  setOrRemove(time, offer.checkin.length * offer.checkout.length, timeText);
  setOrRemove(description, offer.description);

  avatar.src = author.avatar;
  if (!author.avatar) {
    avatar.remove();
  }
  removeExtraFeatures(features, offer.features);
  // photosContainer.appendChild(renderPhotos(photoElement, offer.photos));


  fillPhotoOrDelete(offer.photos, photosContainer, photoElement);
  return card;

};
export { renderCard };
