//? Problem 2 - Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least
var citiesList = [
    'nashville',
    'nashville',
    'los angeles',
    'nashville',
    'memphis',
    'barcelona',
    'los angeles',
    'sevilla',
    'madrid',
    'canary islands',
    'barcelona',
    'madrid',
    'nashville',
    'barcelona',
    'london',
    'berlin',
    'madrid',
    'nashville',
    'london',
    'madrid',
];
var logMostCities = function (numCities) {
    if (numCities === void 0) { numCities = 5; }
    var cities = {};
    citiesList.forEach(function (c) {
        cities[c] = !cities[c] ? 1 : (cities[c] += 1);
    });
    return Object.keys(cities)
        .map(function (c) { return ({
        name: c,
        count: cities[c]
    }); })
        .sort(function (a, b) { return b.count - a.count; })
        .slice(0, numCities)
        .map(function (c) { return c.name; });
};
console.log(logMostCities());
