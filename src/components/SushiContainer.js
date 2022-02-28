import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handleMore, handleEat, sushis}) {
  
  return (
    <div className="belt">
      {sushis.slice(0, 4).map(sushi => <Sushi key={sushi.id} handleEat={handleEat} {...sushi} />)}
      <MoreButton handleMore={handleMore} />
    </div>
  );
}

export default SushiContainer;
