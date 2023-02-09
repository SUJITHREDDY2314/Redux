import React, { useEffect, useState } from "react";

function Child(props) {
  console.log(props.dataToPass);
  const [isClicked, setClick] = useState(false);
  console.log(props.errorPassed == "");
  const arr = props.dataToPass.map((item) => (
    <p key={item.id}>
      <b>User:</b>
      {item.userId} <br />
      <b>Id:</b>
      {item.id}
      <br />
      <b>title:</b>
      {item.title}
      <br />
      <b>body:</b>
      {item.body}
    </p>
  ));

  console.log("Error is :" + props.errorPassed);

  return (
    <div>
      I am child
      <br />
      {props.errorPassed == "" ? (
        <button onClick={() => setClick((prev) => !prev)}>
          {isClicked ? "Click me hide data" : "Click me to view data"}
        </button>
      ) : (
        <p>{props.errorPassed}</p>
      )}
      {isClicked && arr}
    </div>
  );
}

export default Child;
