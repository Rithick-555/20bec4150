import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [trains, setTrains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching train data (replace this with your API call)
    setTimeout(() => {
      const mockData = [
        {
          trainName: "Chennai Exp",
          trainNumber: "2344",
          departureTime: {
            Hours: 21,
            Minutes: 35,
            Seconds: 0,
          },
          seatsAvailable: {
            sleeper: 3,
            AC: 1,
          },
          price: {
            sleeper: 2,
            AC: 5,
          },
          delayedBy: 15,
        },
        {
          trainName: "Hyderabad Exp",
          trainNumber: "23415",
          departureTime: {
            Hours: 23,
            Minutes: 55,
            Seconds: 0,
          },
          seatsAvailable: {
            sleeper: 6,
            AC: 7,
          },
          price: {
            sleeper: 554,
            AC: 1854,
          },
          delayedBy: 5,
        },
      ];

      setTrains(mockData);
      setIsLoading(false);
    }, 2000); // Simulate a delay for loading

    // Handle error (for example, if the API call fails)
    // setError("Failed to fetch train data.");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Train Schedule App</h1>
      </header>
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <h2>All Trains</h2>
            <table>
              <thead>
                <tr>
                  <th>Train Name</th>
                  <th>Train Number</th>
                  <th>Departure Time</th>
                  <th>Sleeper Seats</th>
                  <th>AC Seats</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {trains.map((train) => (
                  <tr key={train.trainNumber}>
                    <td>{train.trainName}</td>
                    <td>{train.trainNumber}</td>
                    <td>
                      {`${train.departureTime.Hours}:${train.departureTime.Minutes}`}
                    </td>
                    <td>{train.seatsAvailable.sleeper}</td>
                    <td>{train.seatsAvailable.AC}</td>
                    <td>{train.price.sleeper + train.price.AC}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
