import UseEffect from "./components/UseEffect";
import UseEffectApi from "./components/UseEffectApi";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";

const App = () => {
  return (
    <>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseEffectApi />
      <hr />
      <UseReducer />
      <hr />
      <UseRef />
    </>
  );
};

export default App;
