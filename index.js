// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers ,searchString ){
    const driver = drivers.filter(drivers=> drivers.toLowerCase()== searchString.toLowerCase());
    return driver;
}

function fuzzyMatch(drivers, query){
    const lowerCaseQuery= query.toLowerCase();
    const driverFirstInitial = drivers.filter(drivers =>drivers.toLowerCase().startsWith(lowerCaseQuery));
    return driverFirstInitial;
}


    const driver = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

function matchName(driver, searchString){
    const nameOfDriver = driver.filter(driver => driver.name === searchString);
    return nameOfDriver;
}