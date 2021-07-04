import { getRandomPositiveInteger } from '../utils/get-random-positive-integer.js'
import { getRandomMyPositiveInteger } from '../utils/get-random-my-positive-integer.js'
// import { checkRepeatElements } from '../utils/check-repeat-elements.js'
const createObject = () => {
  const price = Math.floor(Math.random() * 5550)
  const countRooms = Math.ceil(Math.random() * 34)
  const countGuests = Math.ceil(Math.random() * 34)
  const lat = Math.random(35.65000, 35.70000)
  const lng = Math.random(139.70000, 139.80000)
  const typeIndex = getRandomPositiveInteger(0, 4)
  const type = [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel'
  ]
  const checkin = [
    '12:00', '13:00', '14:00'
  ]
  const checkout = [
    '12:00', '13:00', '14:00'
  ]
  const features = [
    'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
  ]
  const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', ' https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']

  return ({
    author: {
      avatar: `img/avatars/user${getRandomMyPositiveInteger(1, 7)}.png`
    },
    offer: {
      title: 'Квартира вашей мечты !',
      address: `${lat},${lng}`,
      price: price,
      type: type[typeIndex],
      rooms: countRooms,
      guests: countGuests,
      checkin: checkin[0],
      checkout: checkout[0],
      features: features[getRandomPositiveInteger(0, 5)],
      description: 'Это очень тихое, уютное место, где будет царить покой и порядок.\n' +
        'Квартира очень большая и просторная,в ней большие окна,длинный балкон,гостиная с камином, фортепиано и аквариум',
      photos: photos[Math.ceil(Math.random(0, photos.length - 1))]

    },
    location: {
      lat: lat,
      lng: lng
    }
  }
  )
}
// createObject()
export { createObject }
