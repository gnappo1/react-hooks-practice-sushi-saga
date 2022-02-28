import {useState} from "react";

function Sushi({handleEat, id, eaten, price, img_url, name}) {
  // const [isEaten, setIsEaten] = useState(false);

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEat(price, id, eaten)}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
