//Determine if a given year is a leap year using comparison operators.
// This function checks if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // Outputs: true
console.log(isLeapYear(1900)); // Outputs: false
