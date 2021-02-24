import flight from '/home/wachers/testtasks/flights/src/redux/testflight.json';

export const loadFlight = () => async (dispatch) => {
  try {
    // const obj = await fs.readFile('./testflight.json', 'utf8');
    // let { flight } = JSON.parse(obj);
    // console.log(flight);
    dispatch(setFlight(flight));
  } catch {
    throw new Error('Ошибка при загрузке перелётов');
  }
};
export const setFlight = (flight) => ({
  type: 'SET_FLIGHT',
  flight,
});
// let airport = loadFlight();

// module.exports = airport;
