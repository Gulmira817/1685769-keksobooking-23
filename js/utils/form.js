const disableField = (array) => {
  array.forEach(element => {
    element.disabled = true
  })
}

export { disableField }
