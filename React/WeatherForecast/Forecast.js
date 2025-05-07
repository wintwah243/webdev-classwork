import React, { useState, useEffect } from "react";
import { get } from './mockBackend/fetch';

export default function Forecast() {

  const [data, setData] = useState(); //for data from backend
    //for user input
  const [notes, setNotes] = useState({}); //empty object
  const [forecastType, setForecastType] = useState('/daily'); //for backend route

  useEffect(() => {
    alert('Requested data from server...');
    get(forecastType).then((response) => {
      alert('Response: ' + JSON.stringify(response,'',2)); //parse javascript object into json
      setData(response.data); //get response data from backend, and set it to setData
    });
    //if one of these change, useEffect will re-render
  }, [forecastType]); //store forecastType in dependency array

  //event handler to handle input fields
  const handleChange = (index) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [index]: target.value  //use [] because of object type
    }));

    //for loading stage while fetching data
    if(!data){
      return <p>Loading...</p>
    }

  return (
    <div className='App'>
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{item.summary}</td>
              <td> {item.temp.avg}°F</td>
              <td>{item.precip}%</td>
              <td>
                <input
                  value={notes[item.id] || ''}  //id is required becos need to save input value for a specific forecast type
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
