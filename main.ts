//? Problem 2 - Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least

const citiesList: string[] = [
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
]

interface City {
  name: string
  count: number
}

const logMostCities = (numCities: number = 5) => {
  const cities = {}

  citiesList.forEach(c => {
    cities[c] = !cities[c] ? 1 : (cities[c] += 1)
  })

  return Object.keys(cities)
    .map(c => ({
      name: c,
      count: cities[c],
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, numCities)
    .map(c => c.name)
}

console.log(logMostCities())
