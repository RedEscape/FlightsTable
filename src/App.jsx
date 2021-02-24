import './App.css';
import Filters from '../src/components/Filters/Filters';
import FlightsList from '../src/components/FlightsList/FlightsList';
import json from './redux/flights.json';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(2);
  const [flightsData, setFlights] = useState(json.result.flights);

  const [filter, setFilter] = useState({
    sort: 'DESC',
    transfer: [],
    price: {
      from: 20000,
      to: 80000,
    },
    carriers: [],
  });
  console.log(filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  function sorter(a, b) {
    if (filter.sort === 'DESC') return b - a;
    else return a - b;
  }

  const displayFlights = flightsData
    .filter(
      (item) =>
        parseInt(item.flight.price.total.amount, 10) >= filter.price.from &&
        parseInt(item.flight.price.total.amount, 10) <= filter.price.to
    )
    .slice(0, count)
    .sort(sorter);

  return (
    <div className="App">
      <Filters
        className="filters"
        filter={filter}
        onChange={handleFilterChange}
      />
      <div className="content">
        {' '}
        <FlightsList data={displayFlights} count={count} />
        <button
          className="button"
          onClick={() => {
            setCount(count + 2);
          }}
        >
          Показать ещё
        </button>
      </div>
    </div>
  );
}

export default App;
