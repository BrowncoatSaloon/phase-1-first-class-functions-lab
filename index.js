// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}
returnFirstTwoDrivers

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [(returnFirstTwoDrivers), (returnLastTwoDrivers)]

function createFareMultiplier(fare) {
    return function(num2) {
        return fare * num2;
    };
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return arrayOfDrivers, returnFirstTwoDrivers(drivers);
}

