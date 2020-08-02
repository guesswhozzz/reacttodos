import React from "react";
import { Tasklist } from "../components/tasklist";
import { AppHeader, AppMain } from "../components/styleappparts";
import { GreenButton } from "../components/newbtn";

export const MainPage = ({ setModal, tasks }) => {
  return (
    <>
      <AppHeader>
        <h2> Список задачь</h2>
        <GreenButton
          onClick={() => {
            setModal(true);
          }}
          content={"Создать"}
        ></GreenButton>
      </AppHeader>
      <AppMain>
        <Tasklist tasks={tasks} />
      </AppMain>
    </>
  );
};
