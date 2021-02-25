import './App.css';
import Filters from '../src/components/Filters/Filters';
import FlightsList from '../src/components/FlightsList/FlightsList';
import json from './redux/flights.json';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(2);
  const flightsData = json.result.flights;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [displayFlights, setDisplayFlights] = useState(
    flightsData.slice(0, count)
  );
  const [testArr, setTestArr] = useState(arr);
  const [filter, setFilter] = useState({
    sort: 'ASC',
    transfer: [],
    price: {
      from: 2,
      to: 8,
    },
    carriers: [],
  });
  console.log(filter.sort);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    let newArr = arr.filter(
      (item) => item > filter.price.from && item < filter.price.to
    );
    // .slice(0, count);
    setTestArr(newArr);
    console.log(newArr);
  };
  const handleSortChange = (newFilter) => {
    setFilter(newFilter);
    let newArr = testArr.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    if (newFilter.sort === 'DESC') {
      newArr = newArr.reverse();
    }
    setTestArr(newArr);
    console.log(newArr);
  };

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
        <FlightsList data={displayFlights} testArr={testArr}/>
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


  // function sorter(a, b) {
  //   if (a.flight.price.total.amount < b.flight.price.total.amount) {
  //     return -1;
  //   }
  //   if (a.flight.price.total.amount > b.flight.price.total.amount) {
  //     return 1;
  //   }
  //   return 0;
  // }
  // const displayFlights = flightsData
  // .filter(
  //   (item) =>
  //     parseInt(item.flight.price.total.amount, 10) >= filter.price.from &&
  //     parseInt(item.flight.price.total.amount, 10) <= filter.price.to
  // )
