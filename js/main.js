
const checkRepeatElements = function (elementsOfArray) {
  const element = elementsOfArray[Math.ceil(Math.random(0, elementsOfArray.length - 1) * 4)]
  console.log('element ' + element)
  const indices = []
  const indexArray = elementsOfArray.indexOf(element)
  if (indices.length === 0) {
    indices.push(indexArray)
  } else {
    let idx = indices.indexOf(indexArray)
    if (idx === -1) {
      indices.push(indexArray)
      idx = elementsOfArray.indexOf(element, idx + 1)
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
