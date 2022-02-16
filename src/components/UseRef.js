import React from "react";
import { useRef } from "react";

const UseRef = () => {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();

    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = "";
    color.current.value = "#000000";
  };

  return (
    <>
      <form onSubmit={submit}>
        <input ref={sound} type="text" placeholder="Sound..." />
        <input ref={color} type="color" />
        <button>Add</button>
      </form>
    </>
  );
};

export default UseRef;
