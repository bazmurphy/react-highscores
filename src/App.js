import './App.css';
import React from "react";
import allCountryScores from './allCountryScores';

function App() {

  const [data, setData] = React.useState(allCountryScores);
  const [countryOrder, setCountryOrder] = React.useState("Ascending");
  const [scoresOrder, setScoresOrder] = React.useState("Descending");

  const changeCountryOrder = () => {
    if (countryOrder === "Ascending") {
      setData((prevData) => prevData.sort((elementOne, elementTwo) => elementTwo.name.localeCompare(elementOne.name)));
      setCountryOrder("Descending");
    } else if (countryOrder === "Descending") {
      setData((prevData) => prevData.sort((elementOne, elementTwo) => elementOne.name.localeCompare(elementTwo.name)));
      setCountryOrder("Ascending");
    }
  };
  
  const changeScoreOrder = () => {
    if (scoresOrder === "Descending") {
      setData((prevData) => prevData.map(element => element.scores.sort((elementOne, elementTwo) => elementOne.s - elementTwo.s)));
      setScoresOrder("Ascending");
    } else if (scoresOrder === "Ascending") {
      setData((prevData) => prevData.map(element => element.scores.sort((elementOne, elementTwo) => elementTwo.s - elementOne.s)));
      setScoresOrder("Descending");
    }
  };
  
  return (
    <div className="App">
      <button className="change-country-order-button" onClick={changeCountryOrder}>Change Country Order<br></br>Currently: {countryOrder}</button>
      <button className="change-scores-order-button" onClick={changeScoreOrder}>Change Scores Order<br></br>Currently: {scoresOrder}</button>
      <header>High Scores per Country</header>
      {data.map(element => {
          return (
            <div className="country-scores-container">
                <div className="country-scores-title">HIGH SCORES: {element.name}</div>
                {element.scores.map(element => {
                      return (
                        <div className="country-scores-row">
                          <span className="country-scores-name">{element.n}</span>
                          <span className="country-scores-number">{element.s}</span>
                        </div>
                      )
                  })
                }
            </div>
          );
        })
      }
    </div>
  );
};

export default App;
