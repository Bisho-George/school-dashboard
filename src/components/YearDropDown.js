import React, { useState } from 'react';

const YearDropdownButton = () => {
  const years = Array.from({ length: 5 }, (_, index) => new Date().getFullYear() - index); // Array of last 10 years
  const [selectedYear, setSelectedYear] = useState('2023');

  const selectYear = (year) => {
    setSelectedYear(year);
  };

  return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="yearDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedYear}
        </button>
        <ul className="dropdown-menu" aria-labelledby="yearDropdownButton">
          {years.map((year) => (
            <li key={year} onClick={() => selectYear(year)} style={{cursor:"pointer"}}>
              <div className="dropdown-item">
                {year}
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default YearDropdownButton;
