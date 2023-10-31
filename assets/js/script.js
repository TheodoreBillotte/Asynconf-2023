const LOAN_ELEMENT = document.getElementById("loan");
const VEHICLE_TYPE_ELEMENT = document.getElementById("vehicle-type");
const ENERGY_TYPE_ELEMENT = document.getElementById("energy-type");
const KM_ELEMENT = document.getElementById("km");
const YEAR_ELEMENT = document.getElementById("year");
const PEOPLE_ELEMENT = document.getElementById("people");

const BORROWING_RATE_ELEMENT = document.getElementById("rate");
const BORROWING_GRADE_ELEMENT = document.getElementById("grade");
const HINTS_SAVE_ELEMENT = document.getElementById("save");

calculateScoresAndRate();

// calculate the borrowing rate
function calculateScoresAndRate() {
    let loan = parseInt(LOAN_ELEMENT.value);
    const vehicleType = VEHICLE_TYPE_ELEMENT.value;
    const energyType = ENERGY_TYPE_ELEMENT.value;
    const km = parseInt(KM_ELEMENT.value);
    const year = parseInt(YEAR_ELEMENT.value);
    const people = parseInt(PEOPLE_ELEMENT.value);

    const vehicleTypeScore = calculateVehicleTypeScore(vehicleType);
    const energyTypeScore = calculateEnergyTypeScore(energyType);
    const kmScore = calculateKmScore(km);
    const yearScore = calculateYearScore(year);

    let peopleRate = calculatePeopleRate(people);

    let borrowingRate;
    let borrowingGrade;

    const score = vehicleTypeScore + energyTypeScore + kmScore + yearScore;

    if (isNaN(loan))
        loan = 0;

    if (score <= 10) {
        borrowingRate = 3;
        borrowingGrade = "E";
    } else if (score <= 15) {
        borrowingRate = 2.74;
        borrowingGrade = "D";
    } else if (score <= 25) {
        borrowingRate = 2.52;
        borrowingGrade = "C";
    } else if (score <= 33) {
        borrowingRate = 2.10;
        borrowingGrade = "B";
    } else {
        borrowingRate = 1.85;
        borrowingGrade = "A";
    }

    const borrowingRateWithPeopleRate = borrowingRate + peopleRate;

    BORROWING_RATE_ELEMENT.innerHTML = borrowingRateWithPeopleRate.toFixed(2).toString();
    BORROWING_GRADE_ELEMENT.innerHTML = borrowingGrade;

    const minRate = loan - (loan * (1.85 + peopleRate) / 100);
    const currentRate = loan - (loan * borrowingRateWithPeopleRate / 100);
    const save = minRate - currentRate;

    HINTS_SAVE_ELEMENT.innerHTML = save.toFixed(2).toString();
}

function calculateVehicleTypeScore(vehicleType) {
    if (vehicleType === "city")
        return 8;
    if (vehicleType === "convertible")
        return 6;
    if (vehicleType === "sedan")
        return 6.5;
    if (vehicleType === "suv")
        return 4;
}

function calculateEnergyTypeScore(energyType) {
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

function calculateKmScore(km) {
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

function calculateYearScore(year) {
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

function calculatePeopleRate(people) {
    if (people === 1)
        return 0.11;
    if (people === 2)
        return -0.17;
    if (people === 3)
        return -0.29;
    return -0.53;
}

// Compute input events
document.getElementById("app").addEventListener("input", function(e) {
    const target = e.target;
    if (
        target === LOAN_ELEMENT ||
        target === VEHICLE_TYPE_ELEMENT ||
        target === ENERGY_TYPE_ELEMENT ||
        target === KM_ELEMENT ||
        target === YEAR_ELEMENT ||
        target === PEOPLE_ELEMENT
    ) {
        calculateScoresAndRate();
    }
});