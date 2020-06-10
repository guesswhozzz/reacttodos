import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

const Form = (props) => {
  let id = props.match.params.id, // id from url
    state = props.state.data[id];
  if (id > props.state.data.length) {
    state = props.state.data[1];
  }
  if (!id) {
    id = 1;
  }
  console.log(props.state.data.length);

  const [mod, setMod] = useState(true);
  const [text, editText] = useState(state.text); // id from url as array id

  useEffect(() => {
    editText(state.text);
  }, [state.text]);
  let editModOn = () => {
    setMod(true);
    props.textChange(text, id);
  };
  let editModOff = () => {
    setMod(false);
  };
  let onStCh = (e) => {
    editText(e.currentTarget.value);
  };

  return (
    <div>
      {mod ? (
        <span onClick={editModOff}>{text}</span>
      ) : (
        <div>
          <textarea value={text} onChange={onStCh}></textarea>{" "}
          <button onClick={editModOn}>done</button>
        </div>
      )}
    </div>
  );
};
export { Form };
