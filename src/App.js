import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getUser } from "./redux/ducks/user";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ];
  return (
    <div className="App">
      {/* <h1> Hello, {user.firstname} </h1> */}
      {user && <h1> Hello, {user.firstname} </h1>}

      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
