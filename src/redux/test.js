const fs = require('fs').promises;


async function loadAllAiroports() {
  const obj = await fs.readFile('./flights.json', 'utf8');
  let { result } = JSON.parse(obj);
  result.flights.forEach((flight) => {
    for (let legs in flight) {
      console.log(legs.length);
    }
    console.log(Object.keys(flight));
  });
}

let test = loadAllAiroports();

module.exports = test;
