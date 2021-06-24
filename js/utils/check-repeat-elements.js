const checkRepeatElements = function (array) {
  const element = array[Math.ceil(Math.random(0, array.length - 1) * 4)]
  console.log('element ' + element)
  const indices = []
  const indexArray = array.indexOf(element)
  if (indices.length === 0) {
    indices.push(indexArray)
  } else {
    let idx = indices.indexOf(indexArray)
    if (idx === -1) {
      indices.push(indexArray)
      console.log('indices in while ' + indices)
      idx = array.indexOf(element, idx + 1)
    }
  }
}

export { checkRepeatElements }
