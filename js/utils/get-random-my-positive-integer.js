const getRandomMyPositiveInteger = (startRandomNumber, toRandomNumber) => {
  if (startRandomNumber >= 0 && toRandomNumber >= 0) {
    if (startRandomNumber <= toRandomNumber) {
      const randomNumber = Math.floor(Math.random() * (toRandomNumber - startRandomNumber) + startRandomNumber)
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

export { getRandomMyPositiveInteger }
