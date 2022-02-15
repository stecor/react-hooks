import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  }, [admin]);

  return (
    <section>
      <p>UseEffect for name = {name}</p>
      <button onClick={() => setName("Will")}>Change name</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(true)}>Log In</button>
    </section>
  );
};

export default UseEffect;
