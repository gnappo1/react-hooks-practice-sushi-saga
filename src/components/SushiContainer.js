import { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, handleShuffleSushi, handleEatSushi }) {
  // const [index, setIndex] = useState(4); //! one variable for every sushi: bad idea!
  const smallerSushi = sushi.slice(0, 4)

  // const handleClick = () => {
  //   setIndex(current => (current === 100) ? 4 : (current + 4))
  // }
  // const eatSushi = () => {
  //   setEaten(current => !current)
  // }

  return (
    <div className="belt">
      {smallerSushi.map(sushiObj => <Sushi key={sushiObj.id} {...sushiObj} handleEatSushi={handleEatSushi} />)}
      <MoreButton handleClick={handleShuffleSushi} />
    </div>
  );
}

export default SushiContainer;
