import style from './FlightsList.module.css';
import Flight from './Flight/Flight';

function FlightsList({ data }) {
  return (
    <div className={style.main}>
      {data.length !== 0
        ? data.map((item) => (
            <Flight flight={item.flight} key={item.flightToken} />
          ))
        : 'Перелётов по заданным параметрам не найдено'}
    </div>
  );
}

export default FlightsList;
