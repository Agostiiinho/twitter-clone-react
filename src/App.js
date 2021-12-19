import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Agostinho",
      message: "This twitter clone looks pretty stupid",
      likes: 69,
    },
    {
      id: 2,
      name: "Jane Doe",
      message:
        "I really liked the new #spiderman movie, I watched it yesterday!! 10/10!",
      likes: 24,
    },
    {
      id: 3,
      name: "John Doe",
      message:
        "Since this is a twitter clone, i need to say my awful opinions that (definitely) help society",
      likes: 57,
    },
    {
      id: 4,
      name: "John Wick",
      message: "What breathtaking message should I tweet?",
      likes: 1337,
    },
  ]);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>😎 Twitter Clone 😎</h1>
      <button onClick={increment}>I'm a button!</button>
      <h2>{count}</h2>

      {users.map((user) => (
        <Tweet
          key={user.id}
          name={user.name}
          message={user.message}
          likes={user.likes}
        />
      ))}
    </div>
  );
}

export default App;
