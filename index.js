// Code your solution in this file!


// returnFirstTwoDrivers()
//       1) should return a new array containing the first two drivers from the passed-in array


const returnFirstTwoDrivers = function (driverArray) {
    return [driverArray[0], driverArray[1]]
}
  

// returnLastTwoDrivers()
//       1) should return an array of the last two drivers


const returnLastTwoDrivers = function (driverArray) {
    return [driverArray[driverArray.length - 2], driverArray[driverArray.length - 1]]
}
  

// selectingDrivers
//       1) has the `returnFirstTwoDrivers` function to as its first element
//       2) has the `returnLastTwoDrivers` function to as its last element
//       3) allows us to invoke either function from the array


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



// createFareMultiplier()
// 4) returns a function
// 5) should multiply a given value using the created multiplier

const createFareMultiplier = function(multiply) {
    return function(fare) {
        return multiply * fare;
    };
};

// fareDoubler()
// 1) is a function
// 2) doubles fares

const fareDoubler = createFareMultiplier(2)

// fareTripler()
// ✓ is a function
// ✓ triples fares

const fareTripler = createFareMultiplier(3)


// selectDifferentDrivers(arrayOfDrivers, function)
//       ✓ returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//       ✓ returns the last two drivers when passed returnLastTwoDrivers() as the second argument




function selectDifferentDrivers (arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}