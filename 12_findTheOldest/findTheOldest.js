const findTheOldest = function(arrayOfPeople) {
  return arrayOfPeople.reduce((currentPerson, nextPerson) => {
    let currentDeathYear = !currentPerson.yearOfDeath ? new Date().getFullYear() : currentPerson.yearOfDeath;
    let nextDeatYear = !nextPerson.yearOfDeath ? new Date().getFullYear() : nextPerson.yearOfDeath;

    let currentAge = currentDeathYear - currentPerson.yearOfBirth;
    let nextAge = nextDeatYear - nextPerson.yearOfBirth;

    return currentAge > nextAge ? currentPerson : nextPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
