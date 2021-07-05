import { generateSimilarElements } from './utils/generate-similar-elements.js'
const mapCanvas = document.querySelector('#map-canvas')
mapCanvas.appendChild(generateSimilarElements())

// mapCanvas.appendChild(generateSimilarElements())
// // const elements =
// const form = document.querySelector('form')
// const elementsForm = form.querySelectorAll('.ad-form__element')
// disableField(elementsForm)
