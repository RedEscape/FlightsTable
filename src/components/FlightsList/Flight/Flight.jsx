import style from './Flight.module.css';
import Thither from './Thither/Thither';
import Backward from './Backward/Backward';

function Flight({ flight }) {

  return (
    <div>
      <div className={style.row}>
        <div className={style.cell_3}>
          <div>{flight.carrier.caption}</div>
        </div>
        <div className={style.cell_1}>
          <div className={style.passenger}>
            Стоимость для одного взрослого пассажира
          </div>
          <div className={style.amount}>
            {flight.price.total.amount} {flight.price.total.currency}
          </div>
        </div>
      </div>
      <Thither
        thither={flight.legs[0]}
        carrier={flight.carrier.caption}
        duration={flight.legs[0].duration}
      />
      <Backward backward={flight.legs[1]} carrier={flight.carrier.caption} duration={flight.legs[1].duration}/>
      <button className={style.button}> Выбрать </button>
    </div>
  );
}
export default Flight;
