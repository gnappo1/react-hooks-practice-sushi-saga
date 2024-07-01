import { useState } from "react";

function Sushi({ id, name, img_url, price, eaten, handleEatSushi }) {
  // const [eaten, setEaten] = useState(false); //! variable in a component that will eventually be unmounted: no state persistence!

  return (
    <div className="sushi">
      <div className="plate" onClick={eaten ? () => {} : () => handleEatSushi({id, price})}>
        {/* Tell me if this sushi has been eaten! */}
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
