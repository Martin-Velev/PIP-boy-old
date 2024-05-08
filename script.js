console.log('script.js')

let STARTING_VALUE = 1
let MIN_STAT = 1
let MAX_STAT = 10
let DEFAULT_POINTS = 33
let totalPoints = DEFAULT_POINTS
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

// RESET BUTTON
resetButton = document.getElementById('reset-button')

// TOTAL POINTS
let totalPointsElement = document.getElementById('total-points')
totalPointsElement.value = DEFAULT_POINTS

// AVAILABLE POINTS
let availablePointsElement = document.getElementById('available-points')
availablePointsElement.value = availablePoints

function reset() {
    availablePoints = totalPoints
    availablePointsElement.value = availablePoints
    for (let key in STATS) {
        let statName = STATS[key].toLowerCase()
        let element = document.getElementById(statName + '-value')
        element.value = STARTING_VALUE
    }
}
resetButton.addEventListener('click', reset)

totalPointsElement = document.getElementById('total-points')
totalPointsElement.addEventListener('change', function () {
    let newValue = parseInt(totalPointsElement.value)

    if (newValue < 0) {
        totalPointsElement.value = 0
    }
    availablePoints = newValue
    availablePointsElement.value = availablePoints
    totalPoints = newValue

    reset()
})

let statAdjustHandler = function (stat, value) {
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
    let statName = STATS[key].toLowerCase()
    for (let i = 0; i < 2; i++) {
        let plusMinus = i === 0 ? 'minus' : 'plus'
        let button = document.getElementById(statName + '-' + (plusMinus))
        button.addEventListener('click', function () {
            statAdjustHandler(statName, i === 0 ? -1 : 1)
        })
    }

    // Your code here
}

