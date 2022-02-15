import { useState } from "react/cjs/react.development";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
};

const StarRate = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        Selected {selectedStars} of {totalStars} Stars
      </p>
    </>
  );
};

const UseState = () => {
  return (
    <>
      <p>UseState</p>
      <StarRate totalStars={5} />
    </>
  );
};

export default UseState;
