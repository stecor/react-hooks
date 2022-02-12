import { useState } from "react";
import { FaStar } from "react-icons/fa";

// function App() {
//   const [status, setStatus] = useState("Not delivered");
//   console.log(status);
//   return (
//     <div>
//       <h1>The package is: {status}.</h1>
//       <button onClick={() => setStatus("Delivered")}>Deliver</button>
//     </div>
//   );
// }

// function App() {
//   const [checked, setChecked] = useState(false);
//   console.log(checked);
//   return (
//     <div>
//       <input
//         type="checkbox"
//         value={`${checked}`}
//         onChange={() => setChecked((checked) => !checked)}
//       />
//       <p>{checked ? "checked" : "no checked"}</p>
//     </div>
//   );
// }

const createArray = (length) => [...Array(length)];

const Star = () => {
  return <FaStar />;
};

const StarRating = ({ totalStars = 5 }) => {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
};

const App = () => {
  return <StarRating totalStars={10} />;
};

export default App;
