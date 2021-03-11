import './App.css';
import Filters from '../src/components/Filters/Filters';
import FlightsList from '../src/components/FlightsList/FlightsList';
import json from './redux/flights.json';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(2);
  const [flightsData, setFlightsData] = useState(json.result.flights);

  const [filter, setFilter] = useState({
    sort: 'ASC',
    transfer: [],
    price: {
      from: 10000,
      to: 80000,
    },
    carriers: [],
  });
  console.log(filter.sort);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSortChange = (newFilter) => {
    setFilter(newFilter);
  };

  let displayFlights = flightsData
    .filter(
      (item) =>
        parseInt(item.flight.price.total.amount, 10) >= filter.price.from &&
        parseInt(item.flight.price.total.amount, 10) <= filter.price.to
    )
    .slice(0, count)
    .sort((a, b) => {
      if (a.flight.price.total.amount < b.flight.price.total.amount) {
        return -1;
      }
      if (a.flight.price.total.amount > b.flight.price.total.amount) {
        return 1;
      }
      return 0;
    });
  if (filter.sort === 'DESC') {
    displayFlights = displayFlights.reverse();
  }

  return (
    <div className="App">
      <Filters
        className="filters"
        filter={filter}
        changeFilter={handleFilterChange}
        changeSort={handleSortChange}
      />
      <div className="content">
        {' '}
        <FlightsList data={displayFlights} />
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