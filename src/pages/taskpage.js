import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BlueButton, GreenButton } from "../components/newbtn";
import { AppHeader, AppMain } from "../components/styleappparts";
import { FetchTodos } from "../api/fetchtodos";

export const TaskPage = ({ tasks, setLoader }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const history = useHistory();
  const currentTaskId = useParams().id;
  const taskbyid = tasks.find((e) => e.id === +currentTaskId);

  const deleteTodos = async (url) => {
    try {
      setLoader(true);
      const response = await FetchTodos("DELETE", { url });
      console.log(response);
      history.push("/");
    } catch (e) {
      console.log(e);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (taskbyid) {
      const { title } = taskbyid;
      setTitle(title);
      setNewTitle(title);
    }
  }, [taskbyid]);

  const textHandler = (e) => {
    setNewTitle(e.target.value);
  };

  useEffect(() => {
    const cstatus = title === newTitle;
    setStatus(cstatus);
  }, [title, newTitle]);

  return (
    <>
      <AppHeader>
        <h2> Задача №{currentTaskId}</h2>
        <GreenButton
          onClick={() => {
            deleteTodos(currentTaskId);
          }}
          content={"Удалить Т"}
        ></GreenButton>
      </AppHeader>
      <AppMain>
        <input onChange={textHandler} value={newTitle} />
        {status ? (
          <BlueButton
            onClick={() => {
              history.push("/");
            }}
            content={"Вернутся к списку"}
          ></BlueButton>
        ) : (
          <BlueButton
            onClick={() => {
              history.push("/");
            }}
            content={"Отпарвить"}
          ></BlueButton>
        )}
      </AppMain>
    </>
  );
};
