// Code your solution in this file!
const Hq = 42;
const feet = 264;
let fare;
let distanceBtwnLocationsInFeet;

function distanceFromHqInBlocks(blocks) {
    if (blocks > Hq) {
        return blocks - Hq;
    } else if (blocks < Hq) {
        return Hq - blocks;
    }
}

function distanceFromHqInFeet(num) {
    if (num > Hq) {
        return ((num - Hq) * feet)
    } else if (num < Hq) {
        return ((Hq - num) * feet)
    }
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        distanceBtwnLocationsInFeet = ((destination - start) * feet)
        return distanceBtwnLocationsInFeet
    }
    else if (destination < start) {
        distanceBtwnLocationsInFeet = ((start - destination) * feet)
        return distanceBtwnLocationsInFeet
    }
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    if (distanceBtwnLocationsInFeet <= 400) {
        fare = 0;
        return fare
    }
    else if (distanceBtwnLocationsInFeet <= 2000) {
        fare = ((distanceBtwnLocationsInFeet - 400) * .02) 
        return fare
    }
    else if (distanceBtwnLocationsInFeet <= 2500) {
        fare = 25
        return fare
    }
    else if (distanceBtwnLocationsInFeet > 2500) {
        return 'cannot travel that far'
    }

}