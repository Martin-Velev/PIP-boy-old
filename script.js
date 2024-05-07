console.log('script.js')

let DEFAULT_VALUE = 1
let MIN_STAT = 1
let MAX_STAT = 10
let DEFAULT_POINTS = 33
let availablePoints = DEFAULT_POINTS


let STATS = {
    S: 'Strength',
    P: 'Perception',
    E: 'Endurance',
    C: 'Charisma',
    I: 'Intelligence',
    A: 'Agility',
    L: 'Luck'
}

// 
let strengthMinusButton = document.getElementById('strength-minus')
console.log(strengthMinusButton)

let statAdjustHandler = function (stat, value) {
    console.log('statAdjustHandler', stat, value)
    let element = document.getElementById(stat.toLowerCase() + '-value')
    let newValue = parseInt(element.value) + value
    let isOutsideRange = newValue < MIN_STAT || newValue > MAX_STAT
    let isNoPointsAvailable = availablePoints === 0 && value > 0
    if (isOutsideRange || isNoPointsAvailable) {
        return
    }
    availablePoints += -value
    availablePointsElement.value = availablePoints
    element.value = parseInt(element.value) + value
}


for (let key in STATS) {
    let stat = key
    let statName = STATS[key].toLowerCase()
    for (let i = 0; i < 2; i++) {
        let plusMinus = i === 0 ? 'minus' : 'plus'
        let button = document.getElementById(statName + '-' + (plusMinus))
        console.log(button)
        button.addEventListener('click', function () {
            statAdjustHandler(statName, i === 0 ? -1 : 1)
        })
    }

    // Your code here
}


// TOTAL POINTS
let totalPointsElement = document.getElementById('total-points')
totalPointsElement.value = DEFAULT_POINTS

// AVAILABLE POINTS
let availablePointsElement = document.getElementById('available-points')
availablePointsElement.value = availablePoints