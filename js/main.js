import { createObject } from './data/data.js'
let i = 0
const roots = []
while (i !== 10) {
  roots.push(createObject())
  i++
}
console.log(roots)
