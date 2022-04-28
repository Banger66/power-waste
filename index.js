// let lightsEl = document.getElementById('n1').value
// let timeEl = document.getElementById('n2').value
let resultEl = document.getElementById('result')
// let total = 0

// function calculate() {
//   let total = lightsEl * timeEl
//   resultEl.textContent = 'Krissy has wasted: ' + total
// }

function calculate() {
  var numOne = document.getElementById('n1').value
  var numTwo = document.getElementById('n2').value
  var total = parseInt(numOne) * parseInt(numTwo) * 0.0031
  resultEl.textContent = 'Krissy has wasted $' + total + ' leaving lights on.'
}
