const checkRepeatElements = function (array) {
  // const array = [
  //   'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
  // ]
  const element = array[Math.ceil(Math.random(0, array.length - 1) * 4)]
  console.log('element ' + element)
  // const indices = [0, 1, 2, 4, 5]
  const indices = []
  const indexArray = array.indexOf(element)
  // console.log('indexArray ' + indexArray)

  // indices.push(idx)
  // console.log('indexArray+2 ' + indexArray)
  // console.log('indices.length ' + indices.length)
  if (indices.length === 0) {
    indices.push(indexArray)
    // console.log('indices ' + indices)
  } else {
    let idx = indices.indexOf(indexArray)
    // console.log('idx ' + idx)
    if (idx === -1) {
      indices.push(indexArray)
      console.log('indices in while ' + indices)
      idx = array.indexOf(element, idx + 1)
    }
  }
  // return element
}

export { checkRepeatElements }
