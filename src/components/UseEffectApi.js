import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }

  return <div>No Users</div>;
};

export default UseEffectApi;
