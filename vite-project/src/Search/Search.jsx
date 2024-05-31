import React, { useState, useEffect } from 'react';



function Search() {
  const fruits = ['Searchle', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const [fruitData, setFruitData] = useState(fruits);
  const [search, setSearch] = useState('');


  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log('Search value:', e.target.value);
  };

  const fruitData_Filtering = fruitData.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={handleChange}
      />
      {fruitData_Filtering.map((fruit, index) => (
        <div key={index}>
          <p>{fruit}</p>
        </div>
      ))}
      <p>{search}</p>

    </div>
  );
}

export default Search;
