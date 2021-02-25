import style from './Filters.module.css';

function Filters({ filter, changeFilter, changeSort }) {
  const onPriceChangeFrom = (e) => {
    changeFilter({ ...filter, price: { ...filter.price, from: e } });
  };
  const onPriceChangeTo = (j) => {
    changeFilter({ ...filter, price: { ...filter.price, to: j } });
  };
  const onChange = (e) => {
    changeSort({ ...filter, sort: e });
  };

  return (
    <div className={style.main}>
      <div className={style.sort}>
        Сортировать
        <div>
          <input
            type="radio"
            checked={filter.sort === 'ASC'}
            value="ASC"
            onChange={(e) => onChange(e.target.value)}
          />{' '}
          - по возрастанию цены
        </div>
        <div>
          <input
            type="radio"
            checked={filter.sort === 'DESC'}
            value="DESC"
            onChange={(e) => onChange(e.target.value)}
          />{' '}
          - по убыванию цены
        </div>
        <div>
          <input
            type="radio"
            checked={filter.sort === 'TIME'}
            value="TIME"
            onChange={(e) => onChange(e.target.value)}
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
            // step="10000"
            value={filter.price.from}
            onChange={(e) => onPriceChangeFrom(e.target.value)}
          />
        </div>
        <div>
          До{' '}
          <input
            type="number"
            // step="10000"
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
