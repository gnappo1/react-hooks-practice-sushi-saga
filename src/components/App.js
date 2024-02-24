import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:4000/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const amountToSlice = 4

  const handleMoreSushi = () => {
    setSushi(currentSushiList => [...currentSushiList.slice(amountToSlice), ...currentSushiList.slice(0, amountToSlice)])
  }
  const handleEatSushi = (sushiId) => {
    setSushi(mostRecentSushiCollection => mostRecentSushiCollection.map(sushi => sushi.id === sushiId ? {...sushi, isEaten: true} : sushi))
  }

  useEffect(() => {
    (() => {
      fetch(API)
      .then(res => {
        if (!res.ok) {
          throw new Error('The json server is not running!')
        }
        return res.json()
      })
      .then(sushiList => setSushi(sushiList.map(sushiObj => ({...sushiObj, isEaten: false}))))
      .catch(err => console.log(err))
    })()
  }, [])

  return (
    <div className="app">
      <SushiContainer sushi={sushi} handleMoreSushi={handleMoreSushi} amountToSlice={amountToSlice} handleEatSushi={handleEatSushi }/>
      <Table />
    </div>
  );
}

export default App;
