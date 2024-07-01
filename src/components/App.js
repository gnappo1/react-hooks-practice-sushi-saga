import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [error, setError] = useState(null)
  const [total, setTotal] = useState(100)

  const handleShuffleSushi = () => {
    setSushi(current => [...current.slice(4), ...current.slice(0, 4)])
  }

  const resetError = () => setTimeout(() => setError(null), 4000)


  const handleEatSushi = (sushiItem) => {
    if (total >= sushiItem.price) {
      setSushi(current => current.map(sushiObj => {
        return sushiObj.id === sushiItem.id ? {...sushiObj, eaten: true} : sushiObj
      }))
      setTotal(current => current - sushiItem.price)
    } else {
      setError("You don't have enough credit!")
      resetError()
    }
  }

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setSushi(data.map(sushi => {
        return {...sushi, eaten: false}
      }))
    })
    .catch(error => {
      setError(error.message)
      resetError()
    })
  }, [])

  return (
    <div className="app">
      <h5>{error}</h5>
      <SushiContainer sushi={sushi} handleShuffleSushi={handleShuffleSushi} handleEatSushi={handleEatSushi} />
      <Table total={total} />
    </div>
  );
}

export default App;
