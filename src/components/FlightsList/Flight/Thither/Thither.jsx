import style from './Thither.module.css';

function Thither({ thither, carrier, duration }) {
  // перелёт с пересадками когда больше одного элемента в массиве segments
  // legs: Array(2)
  // 0: {duration: 605, segments: Array(2)}
  // 1: {duration: 1255, segments: Array(2)}

  // перелёт без пересадок когда один элемент в массиве segments
  // legs: Array(2)
  // 0: {duration: 260, segments: Array(1)}
  // 1: {duration: 225, segments: Array(1)}
  function getTimeFromMins(duration) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    if (minutes === 0) {
      return hours + 'ч. ';
    }
    return hours + 'ч. ' + minutes + 'мин.';
  }

  let transfer = false;
  let n = 1;
  if (thither.segments.length < 2) {
    n = 0;
  } else {
    transfer = true;
  }
  let departureAirport,
    departureCity,
    departureDate,
    arrivalAirport,
    arrivalCity,
    arrivalDate;
  ({
    departureAirport,
    departureCity,
    departureDate,
    arrivalAirport,
    arrivalCity,
    arrivalDate,
  } = {
    departureAirport: thither.segments[0].departureAirport,
    departureCity: thither.segments[0].departureCity,
    departureDate: new Date(thither.segments[0].departureDate),
    arrivalAirport: thither.segments[n].arrivalAirport,
    arrivalCity: thither.segments[n].arrivalCity,
    arrivalDate: new Date(thither.segments[n].arrivalDate),
  });
  return (
    <div className={style.main}>
      <div>
        <div className={style.segments}>
          <div className={style.there}>
            <div>
              {departureCity ? departureCity.caption : 'null'},{' '}
              {departureAirport.caption} ({departureAirport.uid})
            </div>
            <div>→</div>
            <div>
              {arrivalCity ? arrivalCity.caption : 'null'},{' '}
              {arrivalAirport.caption} ({arrivalAirport.uid})
            </div>
          </div>
          <div className={style.time}>
            <div>
              {departureDate.toLocaleTimeString([], { timeStyle: 'short' })}{' '}
              {departureDate.toLocaleDateString([], {
                day: 'numeric',
                weekday: 'long',
                month: 'long',
              })}
              <hr />
            </div>
            <div className={style.transfer}>
              {' '}
              <div>{transfer ? '1 пересадка' : ''}</div>
              <div>{getTimeFromMins(duration)}</div>
            </div>
            <div>
              {arrivalDate.toLocaleTimeString([], { timeStyle: 'short' })}{' '}
              {arrivalDate.toLocaleDateString([], {
                day: 'numeric',
                weekday: 'long',
                month: 'long',
              })}
              <hr />
            </div>
          </div>
          <div className={style.arrival}></div>
        </div>
        <div> Рейс выполняет: {carrier} </div>
      </div>
    </div>
  );
}
export default Thither;
