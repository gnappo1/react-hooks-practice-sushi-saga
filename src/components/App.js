import { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import WalletForm from "./WalletForm";

const API = "http://localhost:3001/sushis";

function App() {
  const [currentBalance, setCurrentBalance] = useState(100);
  // const [plates, setPlates] = useState([]);
  const [sushiArray, setSushiArray] = useState([]);
  // const [sushiIndex, setSushiIndex] = useState(0);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushi => setSushiArray(sushi.map(sushiObj => ({...sushiObj, isEaten: false}))))
    .catch(err => alert(err))
  }, []);

  const handleEat = (sushi) => {
    if (sushi.price <= currentBalance) {
      setSushiArray(currentSushi => currentSushi.map(sushiObj => sushiObj.id === sushi.id ? {...sushiObj, isEaten: true} : sushiObj))
      setCurrentBalance(currentBalance => currentBalance - sushi.price)
      // setPlates(currentPlates => [...currentPlates, sushi])
    } else {
      alert("You're too poor!")
    }
  }

  const showNextFour = () => {
    setSushiArray(currentSushi => [...currentSushi.slice(4), ...currentSushi.slice(0, 4)])
  }

  const handleAddMoney = (money) => {
    setCurrentBalance(currentMoney => currentMoney + money)
  }

  const plates = sushiArray.filter(sushiObj => sushiObj.isEaten)
  return (
    <div className="app">
      <SushiContainer handleEat={handleEat} sushiArray={sushiArray} showNextFour={showNextFour} />
      <Table plates={plates} currentBalance={currentBalance} />
      <WalletForm handleAddMoney={handleAddMoney} />
    </div>
  );
}

export default App;
