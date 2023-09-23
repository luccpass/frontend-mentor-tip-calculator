/**
 * Pegar o valor total da pedido
 * pegar a porcentagem de desconto
 * pegar a quantidade quem tem que ser dividida
 * calcular
 * exibir resultado
 */

const inputBill = document.querySelector('#bill-input')
const tipSelect = document.querySelectorAll('.input-tip-wrapper input')
const numberOfPeople = document.querySelector('#number-of-people')
const totalPricePerson = document.querySelector('#price-person')
const totalPrice = document.querySelector('#total-price')
const resetButton = document.querySelector('.right-content__button button')
let billValue
let tipValue
let numberOfPeopleValue
let tipPerson
let totalPerPerson

resetButton.onclick = () => {
    inputBill.value = ''
    tipSelect.forEach (e => {
        if(e.checked === true) {
            e.checked = false
        }
    })

    numberOfPeople.value = ''
    totalPricePerson.textContent = '0.00'
    totalPrice.textContent= '0.00'
}

tipSelect.forEach(e => {
    e.onclick = () => {
        tipValue = parseFloat(e.value)
        if(e.id === 'custom'){
            e.value = ''
            e.oninput = () => {
                tipValue = parseFloat(e.value)
            }
        }
    }
})

inputBill.oninput = () => {
    billValue = parseFloat(inputBill.value)
}

const calculateTotalToDivide = (bill = 0, tip = 1) => {
    return ((bill * tip) / 100).toFixed(2)
}

const calculateTotal = (bill = 0, tip = 1, numberOfPeople) => {
    return ((((bill * tip) / 100) + bill) / numberOfPeople).toFixed(2)
}

const calculateTipPerson = (bill = 0, tip = 1, numberOfPeople = 1) => {
    return (calculateTotalToDivide(bill, tip) / numberOfPeople).toFixed(2)
}


function render(totalPerson, total) {
    totalPricePerson.textContent = totalPerson
    totalPrice.textContent = total
}

numberOfPeople.oninput = () => {
    numberOfPeopleValue = parseInt(numberOfPeople.value)

    tipPerson = calculateTipPerson(billValue, tipValue, numberOfPeopleValue)
    console.log(calculateTipPerson(billValue, tipValue, numberOfPeopleValue))

    totalPerPerson = calculateTotal(billValue, tipValue, numberOfPeopleValue)
    console.log(calculateTotal(billValue, tipValue, numberOfPeopleValue))

    if (numberOfPeopleValue > 0){
        //render(calculateTipPerson, calculateTotalToDivide)
        //console.log(tipPerson, totalTip)
        render(tipPerson, totalPerPerson)
    } else {
        alert('value cannot be equal to 0')
        numberOfPeople.value = ''
    }
}