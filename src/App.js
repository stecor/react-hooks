import UseEffect from "./components/UseEffect";
import UseEffectApi from "./components/UseEffectApi";
import UseState from "./components/UseState";

const App = () => {
  return (
    <>
      <UseState totalStars={5} />
      <hr />
      <UseEffect />
      <hr />
      <UseEffectApi />
    </>
  );
};

export default App;
