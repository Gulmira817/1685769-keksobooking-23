// import { getRandomPositiveInteger } from '../utils/get-random-positive-integer.js'
const checkRepeatElements = function (array) {
  const element = array[Math.ceil(Math.random(0, array.length - 1) * 4)]
  const indices = []
  const indexArray = array.indexOf(element)
  if (indices.length === 0) {
    indices.push(indexArray)
  } else {
    let idx = indices.indexOf(indexArray)
    if (idx === -1) {
      indices.push(indexArray)
      idx = array.indexOf(element, idx + 1)
    }
  }
}

export { checkRepeatElements }
