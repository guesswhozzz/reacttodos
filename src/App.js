import React, { useState, useEffect } from "react";
import { MainPage } from "./pages/mainpage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ModalWindow } from "./pages/modalwindow";
import { Route } from "react-router-dom";
import { TaskPage } from "./pages/taskpage";
import { AppFooter, AppContainer } from "./components/styleappparts";
import { FetchTodos } from "./api/fetchtodos";

function App() {
  const [loader, setLoader] = useState(false);
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const GetTodos = async () => {
    try {
      const { data } = await FetchTodos();
      setTodos(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    GetTodos();
  }, [modal, loader]);
  return (
    <div className="app_wrapper">
      {modal && <ModalWindow setModal={setModal} />}
      <AppContainer>
        <BrowserRouter>
          <Route path="/" exact>
            <MainPage setModal={setModal} tasks={todos} />
          </Route>
          <Route path="/:id">
            <TaskPage tasks={todos} setLoader={setLoader} />
          </Route>
        </BrowserRouter>
        <AppFooter> АО "Мегаполис" test task </AppFooter>
      </AppContainer>
    </div>
  );
}

export default App;
