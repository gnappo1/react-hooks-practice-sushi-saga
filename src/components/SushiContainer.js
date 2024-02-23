import {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, handleMoreSushi, amountToSlice }) {
  // const [startSushiNum, setStartSushiNum] = useState(0);
  // const amountToSlice = 4

  // const handleMoreSushi = () => {
  //   setStartSushiNum(currentVal => {
  //     return startSushiNum === sushi.length - amountToSlice ? 0 : currentVal + amountToSlice
  //   })
  // }

  // const slicedSushi = sushi.slice(startSushiNum, startSushiNum + amountToSlice)
  const renderList = sushi.slice(0, amountToSlice).map(s => <Sushi key={s.id} {...s}/>)
  
  return (
    <div className="belt">
      {renderList}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
