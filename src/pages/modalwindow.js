import React, { useState } from "react";
import { RedButton, BlueButton } from "../components/newbtn";
import { FetchTodos } from "../api/fetchtodos";

export const ModalWindow = ({ setModal }) => {
  const [text, setText] = useState({ title: "" });

  const textLeverChange = (e) => {
    setText({ title: e.target.value });
  };
  const postTodos = async (text) => {
    try {
      const response = await FetchTodos("POST", { ...text });
      if (response.success) {
        setModal(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="modal-window-background">
      <div className="modal-window-wrapper">
        <div className="modal-window-titel-container">
          <h2 className="modal-window__text">Короткое опсание</h2>
          <RedButton
            onClick={() => {
              setModal(false);
            }}
            content={"X"}
          ></RedButton>
        </div>
        <input className="modal-window__ipt" onChange={textLeverChange} />
        <BlueButton
          onClick={() => postTodos(text)}
          content={"Саздать"}
        ></BlueButton>
      </div>
    </div>
  );
};
