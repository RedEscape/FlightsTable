const fs = require('fs').promises;

async function getAirport() {
  const obj = await fs.readFile('./testflight.json', 'utf8');
  let { flight } = JSON.parse(obj);
  flight.legs.forEach((item) => {
    let allAirports = [];
    item.segments.forEach((item) =>
      allAirports.push(item.departureAirport.uid)
    );

    console.log(typeof allAirports);
  });
}

let airport = getAirport();

module.exports = airport;

// [
//   {
//     departureAirport: { uid: 'SVO', caption: 'ШЕРЕМЕТЬЕВО' },
//     departureCity: { uid: 'MOW', caption: 'Москва' },
//     servicesDetails: {},
//   },
//   {
//     departureAirport: { uid: 'CDG', caption: 'ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ' },
//     departureCity: { uid: 'PAR', caption: 'ПАРИЖ' },
//     servicesDetails: {},
//   },
// ][
//   ({
//     departureAirport: { uid: 'LHR', caption: 'Лондон, Хитроу' },
//     departureCity: { uid: 'LON', caption: 'ЛОНДОН' },
//     servicesDetails: {},
//   },
//   {
//     departureAirport: { uid: 'CDG', caption: 'ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ' },
//     departureCity: { uid: 'PAR', caption: 'ПАРИЖ' },
//     servicesDetails: {},
//   })
// ];
