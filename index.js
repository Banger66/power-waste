// let lightsEl = document.getElementById('n1').value
// let timeEl = document.getElementById('n2').value
let resultEl = document.getElementById('result')
let select = document.getElementById('lightType')

// let total = 0

// function calculate() {
//   let total = lightsEl * timeEl
//   resultEl.textContent = 'Krissy has wasted: ' + total
// }

// function getSelect() {
//   if (select == led) {
//     value = 0.003
//     console.log(value)
//   } else value = 0.023
//   console.log(value)
// }

function calculate() {
  var numOne = document.getElementById('n1').value
  var numTwo = document.getElementById('n2').value
  var value = select.options[select.selectedIndex].value
  var total = parseInt(numOne) * parseInt(numTwo) * value
  resultEl.textContent = 'Krissy has wasted $' + total + ' leaving lights on.'
}
