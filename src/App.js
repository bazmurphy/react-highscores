import './App.css';
import React from "react";
import allCountryScores from './allCountryScores';

function App() {

  const [scores, setScores] = React.useState(allCountryScores);

  const [countryOrder, setCountryOrder] = React.useState("None");
  const [scoresOrder, setScoresOrder] = React.useState("Descending");

  // toggle to display Country Names alphabetically ascending or descending
  const changeCountryOrder = () => {
    if (countryOrder === "Ascending") {
      setScores(prevScores => [...prevScores].sort((elementOne, elementTwo) => elementTwo.name.localeCompare(elementOne.name)));
      setCountryOrder("Descending");
    } else if (countryOrder === "Descending" || countryOrder === "None") {
      setScores(prevScores => [...prevScores].sort((elementOne, elementTwo) => elementOne.name.localeCompare(elementTwo.name)));
      setCountryOrder("Ascending");
    }
  };

  // toggle to display Scores numerically descending or ascending
  const changeScoreOrder = () => {
    if (scoresOrder === "Descending") {
      setScores(prevScores => {
        return prevScores.map(element => element.scores.sort((elementOne, elementTwo) => elementTwo.s - elementOne.s));
        // ERROR: App.js:55 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
      });
      setScoresOrder("Ascending");
    } else if (scoresOrder === "Ascending") {
      setScores((prevScores) => {
        return prevScores.map(element => element.scores.sort((elementOne, elementTwo) => elementOne.s - elementTwo.s));
        // ERROR: App.js:55 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
      });
      setScoresOrder("Descending");
    }
  };

  return (
    <div className="App">

      <button className="change-country-order-button" onClick={changeCountryOrder}>Change Country Order<br></br>Currently: {countryOrder}</button>
      <button className="change-scores-order-button" onClick={changeScoreOrder}>Change Scores Order<br></br>Currently: {scoresOrder}</button>
      
      <header>High Scores per Country</header>

      {scores
        // .sort((elementOne, elementTwo) => elementOne.name.localeCompare(elementTwo.name))
        // ^ this works when i do it before .map in the render here
        .map(element => {
          return (
            <div className="country-scores-container">
                <div className="country-scores-title">HIGH SCORES: {element.name}</div>

                {element.scores
                      // .sort((elementOne, elementTwo) => elementOne.s - elementTwo.s)
                      // ^ this works when i do it before .map in the render here
                      .map(element => {
                      return (
                        <div className="country-scores-row">
                          <span className="country-scores-name">{element.n}</span>
                          <span className="country-scores-number">{element.s}</span>
                        </div>
                      )
                  })
                }

            </div>
          )
        })
      }   

    </div>
  );
};

export default App;
