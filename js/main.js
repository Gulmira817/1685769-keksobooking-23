// import {
//   getRandomMyPositiveInteger, checkRepeatElements
// } from './utils/get-random-my-positive-integer'

const checkRepeatElements = function (array) {
  // const array = [
  //   'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
  // ]
  const element = array[Math.ceil(Math.random(0, array.length - 1) * 4)]
  console.log('element ' + element)
  // const indices = [0, 1, 2, 4, 5]
  const indices = []
  const indexArray = array.indexOf(element)
  if (indices.length === 0) {
    indices.push(indexArray)
    // console.log('indices ' + indices)
  } else {
    let idx = indices.indexOf(indexArray)
    // console.log('idx ' + idx)
    if (idx === -1) {
      indices.push(indexArray)
      idx = array.indexOf(element, idx + 1)
    }
  }
  return element
}

const getRandomMyPositiveInteger = (startRandomNumber, toRandomNumber) => {
  if (startRandomNumber >= 0 && toRandomNumber >= 0) {
    if (startRandomNumber <= toRandomNumber) {
      const randomNumber = Math.floor(Math.random() * 2)
      if (randomNumber.toString().length === 1) {
        return '0' + randomNumber
      } else {
        return randomNumber
      }
    } else {
      console.log('startRandomNumber must be less than toRandomNumber')
    }
  } else {
    console.log('startRandomNumber and toRandomNumber must be positive or equal to zero')
  }
}

const createObject = () => {
  const objectArray = []
  const price = Math.floor(Math.random() * 5550)
  const countRooms = Math.ceil(Math.random() * 34)
  const countGuests = Math.ceil(Math.random() * 34)
  const lat = Math.random(35.65000, 35.70000)
  const lng = Math.random(139.70000, 139.80000)
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

  objectArray.push({
    author: {
      avatar: `img/avatars/user${getRandomMyPositiveInteger(1, 10)}.png`
    },
    offer: {
      title: 'Квартира вашей мечты !',
      address: `${lat},${lng}`,
      price: {
        price
      },
      type: type[0],
      rooms: countRooms,
      guests: countGuests,
      checkin: checkin[0],
      checkout: checkout[0],
      features: checkRepeatElements(features),
      description: 'Это очень тихое, уютное место, где будет царить покой и порядок./n' +
        'Квартира очень большая и просторная,в ней большие окна,длинный балкон,гостиная с камином, фортепиано и аквариум',
      photos: photos[Math.ceil(Math.random(0, photos.length - 1))]

    },
    location: {
      lat: lat,
      lng: lng
    }
  }
  )
  return objectArray
}
let i = 0
const roots = []
while (i !== 10) {
  roots.push(createObject())
  i++
}
console.log(roots)
