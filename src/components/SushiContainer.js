import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiArray, showNextFour, handleEat}) {


  const mappedSushi = sushiArray.slice(0, 4).map(sushiObj => <Sushi key={sushiObj.id} handleEat={handleEat} sushi={sushiObj} />)

  return (
    <div className="belt">
      {mappedSushi}
      <MoreButton showNextFour={showNextFour} />
    </div>
  );
}

export default SushiContainer;
