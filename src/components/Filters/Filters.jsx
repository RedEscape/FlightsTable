import style from './Filters.module.css';

function Filters({ filter, onChange }) {
  const onPriceChangeFrom = (e) => {
    onChange({ ...filter, price: { ...filter.price, from: e } });
  };
  const onPriceChangeTo = (j) => {
    onChange({ ...filter, price: { ...filter.price, to: j } });
  };
  const byRise = () => {
    onChange({ ...filter, sort: 'ASC' });
  };
  const byDesc = () => {
    onChange({ ...filter, sort: 'DESC' });
  };
  const byTime = () => {
    onChange({ ...filter, sort: 'time' });
  };
  return (
    <div className={style.main}>
      <div className={style.sort}>
        Сортировать
        <div>
          <input
            type="radio"
            checked
            name="dva"
            value={filter.sort}
            onClick={byRise}
          />{' '}
          - по возрастанию цены
        </div>
        <div>
          <input
            type="radio"
            value={filter.sort}
            checked
            name="dva"
            onClick={byDesc}
          />{' '}
          - по убыванию цены
        </div>
        <div>
          <input
            type="radio"
            value={filter.sort}
            checked
            name="dva"
            onChange={byTime}
          />{' '}
          - по времени суток
        </div>
      </div>
      <div className={style.transfer}>
        Фильтровать
        <div>
          <input type="checkbox" /> - 1 пересадка
        </div>
        <div>
          <input type="checkbox" /> - без пересадок
        </div>
      </div>
      <div className={style.price}>
        Цена
        <div>
          От{' '}
          <input
            type="number"
            step="10000"
            value={filter.price.from}
            onChange={(e) => onPriceChangeFrom(e.target.value)}
          />
        </div>
        <div>
          До{' '}
          <input
            type="number"
            step="10000"
            value={filter.price.to}
            onChange={(j) => onPriceChangeTo(j.target.value)}
          />
        </div>
      </div>
      <div className={style.carriersFilter}>
        Авиакомпании
        <div>
          <input type="checkbox" /> LOT POLISH Airlines от 21049 р.
        </div>
        <div>
          <input type="checkbox" /> Аэрофлот - российские авиалинии от 31733 р.
        </div>
      </div>
    </div>
  );
}
export default Filters;
