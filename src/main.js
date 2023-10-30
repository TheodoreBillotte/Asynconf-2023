const LOAN_ELEMENT = document.getElementById("loan");
const VEHICLE_TYPE_ELEMENT = document.getElementById("vehicle-type");
const ENERGY_TYPE_ELEMENT = document.getElementById("energy-type");
const KM_ELEMENT = document.getElementById("km");
const YEAR_ELEMENT = document.getElementById("year");
const PEOPLE_ELEMENT = document.getElementById("people");

const BORROWING_RATE_ELEMENT = document.getElementById("rate");
const BORROWING_GRADE_ELEMENT = document.getElementById("grade");
const HINTS_SAVE_ELEMENT = document.getElementById("save");

let loan = "0";
let vehicleType = "";
let energyType = "";
let km = "0";
let year = "0";
let people = "0";

let vehicleTypeScore = 8;
let energyTypeScore = 5;
let kmScore = 7;
let yearScore = 5;

let peopleRate = 0.11;
let borrowingRate = 2.52;
let borrowingGrade = "C";

updateBorrowElements();

// update page
function updateBorrowElements() {
    calculateBorrowingRate();
    updateHintsSaveElements();

    BORROWING_RATE_ELEMENT.innerHTML = (borrowingRate + peopleRate).toString();
    BORROWING_GRADE_ELEMENT.innerHTML = borrowingGrade;
}

function updateHintsSaveElements() {
    const loanAmount = parseInt(loan);
    const minRate = loanAmount - loanAmount * (1.85 + peopleRate) / 100;
    const currentRate = loanAmount - loanAmount * (borrowingRate + peopleRate) / 100;

    HINTS_SAVE_ELEMENT.innerHTML = (minRate - currentRate).toString();
}

// calculate the borrowing rate
function calculateBorrowingRate() {
    const score = vehicleTypeScore + energyTypeScore + kmScore + yearScore;
    console.log(score);

    if (score <= 10) {
        borrowingRate = 3;
        borrowingGrade = "E";
        return;
    }

    if (score <= 15) {
        borrowingRate = 2.74;
        borrowingGrade = "D";
        return;
    }

    if (score <= 25) {
        borrowingRate = 2.52;
        borrowingGrade = "C";
        return;
    }

    if (score <= 33) {
        borrowingRate = 2.10;
        borrowingGrade = "B";
        return;
    }

    borrowingRate = 1.85;
    borrowingGrade = "A";
}

function calculatePeopleRate() {
    if (people === '1')
        return 0.11;

    if (people === '2')
        return -0.17;

    if (people === '3')
        return -0.29;
    return -0.53;
}

function calculateVehicleTypeScore() {
    if (vehicleType === "city")
        return 8;

    if (vehicleType === "convertible")
        return 6;

    if (vehicleType === "sedan")
        return 6.5;

    if (vehicleType === "suv")
        return  4;
}

function calculateEnergyTypeScore() {
    if (energyType === "gasoline")
        return 5;

    if (energyType === "electric")
        return 9;

    if (energyType === "hybrid")
        return 7;

    if (energyType === "gas")
        return 6;

    if (energyType === "diesel")
        return 4;
}

function calculateKmScore() {
    if (km < 10000)
        return 9;

    if (km < 15000)
        return 7;

    if (km < 20000)
        return 5;

    if (km < 25000)
        return 3;
    return 1;
}

function calculateYearScore() {
    if (year >= 2010)
        return 7;

    if (year >= 2000)
        return 5;

    if (year >= 1990)
        return 4;

    if (year >= 1980)
        return 3;

    if (year >= 1970)
        return 2;
    return 1;
}


// Compute input events
LOAN_ELEMENT.addEventListener("input", function(e) {
    loan = e.target.value;
    updateHintsSaveElements();
});

VEHICLE_TYPE_ELEMENT.addEventListener("input", function(e) {
    vehicleType = e.target.value;
    vehicleTypeScore = calculateVehicleTypeScore();
    updateBorrowElements();
});

ENERGY_TYPE_ELEMENT.addEventListener("input", function(e) {
    energyType = e.target.value;
    energyTypeScore = calculateEnergyTypeScore();
    updateBorrowElements();
});

KM_ELEMENT.addEventListener("input", function(e) {
    km = e.target.value;
    kmScore = calculateKmScore();
    updateBorrowElements();
});

YEAR_ELEMENT.addEventListener("input", function(e) {
    year = e.target.value;
    yearScore = calculateYearScore();
    updateBorrowElements();
});

PEOPLE_ELEMENT.addEventListener("input", function(e) {
    people = e.target.value;
    peopleRate = calculatePeopleRate();
    updateBorrowElements();
});
