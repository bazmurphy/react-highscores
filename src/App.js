import './App.css';
import React from "react";
import allCountryScores from './allCountryScores';

function App() {

  const [scores, setScores] = React.useState(allCountryScores);

  const [countryOrder, setCountryOrder] = React.useState("None");
  const [scoresOrder, setScoresOrder] = React.useState("None");

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
    if (scoresOrder === "Ascending" || scoresOrder === "None") {
      // setScores((prevScores) => prevScores.map(element => element.scores.sort((elementOne, elementTwo) => elementOne.s - elementTwo.s)));
      // Uncaught TypeError: element.scores is undefined
      // nested sort doesn't seem to work?
      setScores(prevScores => prevScores.map(element => {
        element.scores.sort((elementOne, elementTwo) => elementOne.s - elementTwo.s)
        return element;
      }));
      // ^ THANK YOU Berkeli
      setScoresOrder("Descending");
    } else if (scoresOrder === "Descending") {
      // setScores(prevScores => prevScores.map(element => element.scores.sort((elementOne, elementTwo) => elementTwo.s - elementOne.s)));
      // Uncaught TypeError: element.scores is undefined
      // nested sort doesn't seem to work?
      setScores(prevScores => prevScores.map(element => {
        element.scores.sort((elementOne, elementTwo) => elementTwo.s - elementOne.s)
        return element;
      }));
      // ^ THANK YOU Berkeli
      setScoresOrder("Ascending");
    }
  };

  return (
    <div className="App">

      <button className="change-country-order-button" onClick={changeCountryOrder}>Change Country Order<br></br>Currently: {countryOrder}</button>
      <button className="change-scores-order-button" onClick={changeScoreOrder}>Change Scores Order<br></br>Currently: {scoresOrder}</button>

      <header>High Scores per Country</header>

      {scores
        // .sort((elementOne, elementTwo) => elementOne.name.localeCompare(elementTwo.name))
        // ^ this works when i do it before .map in the render here (but yes its chained not nested)
        .map(element => {
          return (
            <div className="country-scores-container">
              <div className="country-scores-title">HIGH SCORES: {element.name}</div>

              {element.scores
                // .sort((elementOne, elementTwo) => elementOne.s - elementTwo.s)
                // ^ this works when i do it before .map in the render here (but yes its chained not nested)
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
