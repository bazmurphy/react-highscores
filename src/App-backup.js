import './App.css';
import React from "react";
import allCountryScores from './allCountryScores';

function App() {
  const [order, setOrder] = React.useState("Descending")

  const changeScoreOrder = () => {
    if (order === "Descending") {
      setOrder("Ascending")
    } else if(order === "Ascending") {
      setOrder("Descending")
    }
  };

  return (
    <div className="App">
      <button className="change-order-button" onClick={changeScoreOrder}>Change Score Order<br></br>Currently: {order}</button>
      <header>High Scores per Country</header>
      {allCountryScores
        .sort((elementOne, elementTwo) => elementOne.name.localeCompare(elementTwo.name))
        .map(element => {
          return (
            <div className="country-scores-container">
                <div className="country-scores-title">HIGH SCORES: {element.name}</div>
                {order === "Descending" ? 
                  element.scores
                    .sort((elementOne,elementTwo) => elementTwo.s - elementOne.s)
                    .map(element => {
                      return (
                        <div className="country-scores-row">
                          <span className="country-scores-name">{element.n}</span>
                          <span className="country-scores-number">{element.s}</span>
                        </div>
                      )
                  }) 
                  : 
                  element.scores
                    .sort((elementOne,elementTwo) => elementOne.s - elementTwo.s)
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
          );
        })
      }
    </div>
  );
};

export default App;