import style from './Backward.module.css';

function Backward({ backward, carrier, duration }) {
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
  if (backward.segments.length < 2) {
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
    departureAirport: backward.segments[0].departureAirport,
    departureCity: backward.segments[0].departureCity,
    departureDate: new Date(backward.segments[0].departureDate),
    arrivalAirport: backward.segments[n].arrivalAirport,
    arrivalCity: backward.segments[n].arrivalCity,
    arrivalDate: new Date(backward.segments[n].arrivalDate),
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
        <div> Рейсп выполняет: {carrier} </div>
      </div>
    </div>
  );
}
export default Backward;
