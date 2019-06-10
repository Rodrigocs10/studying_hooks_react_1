// useState is a Hook
// We call it inside a function component to add some
// local state to it. React will preserve this state
// between re-renders.
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import fetchData from "./util";

import "./styles.css";

function Fetching(props) {
  const fetching = props.fetching;
  console.log(props.fetching);
  if (fetching.current) {
    return <p>Atualizando...</p>;
  } else {
    return <p />;
  }
}

function ExampleHooks() {
  // The array destructuring syntax lets us give different names to the state
  // variables we declared by calling useState
  // initial state = 0

  const refFetching = useRef(false);

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1, step => {
    return this.count + step;
  });

  //  this component sets the document title after React updates the DOM:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // we can use more than one useEffect
  //  this component sets the document title after React updates the DOM:
  useEffect(() => {
    refFetching.current = true;
    document.title = `You clicked ${count} times`;

    // This return overrides the useEffect
    return async () => {
      await fetchData(1000);
      refFetching.current = false;
      console.info("documento title has changed !");
      console.log(refFetching);
    };
  });

  return (
    <div className="ExampleHooks">
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setStep(step + 1)}>Increment Step</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ExampleHooks />, rootElement);
