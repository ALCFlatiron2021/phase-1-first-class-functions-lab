const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia' ];

function returnFirstTwoDrivers (driversArray) {
    return driversArray.slice(0, 2)
}
    
function returnLastTwoDrivers(driversArray){
    return driversArray.slice(2,4)
}

let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

const createFareMultiplier = i => {
    return function (fare) {
            return fare * i
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayofDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayofDrivers)
}

