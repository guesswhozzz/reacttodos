import React, { useReducer } from "react";
import "./main.css";
import { List } from "./list";
import { Form } from "./form";
import { withRouter, Route } from "react-router";
import date from "./date";

const MainPage = (props) => {
  let store = {
    data: [
      { id: 0 },
      { id: 1, day: null, month: null, text: `text text text 1` },
      { id: 2, day: null, month: null, text: `text text53453453453453 2` },
      { id: 3, day: null, month: null, text: `text textgfgdfgdfg 3` },
    ],
    count: 0,
  };
  const initialState = store;
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          data: [
            ...state.data,
            {
              id: state.data.length,
              day: date.day,
              month: date.month,
              text: "ok",
            },
          ],

          count: state.count + 1,
        };
      case "decrement":
        return {
          ...state,
          data: state.data.map((u) => {
            if (u.id === 2) {
              return { ...u, text: "работает?" };
            }
            return u;
          }),
          count: state.count - 1,
        };
      case "ON_TEXT_VALUE_CHANGE":
        return {
          ...state,
          data: state.data.map((u) => {
            if (u.id == action.id) {
              return { ...u, text: action.text };
            }
            return u;
          }),
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  let increment = () => {
    dispatch({ type: "increment" });
  };
  let decrement = () => {
    dispatch({ type: "decrement" });
  };
  let textChange = (text, id) => {
    dispatch({ type: "ON_TEXT_VALUE_CHANGE", text, id });
  };

  let mapList = state.data.map((dta) => {
    return <List day={dta.day} month={dta.month} id={dta.id} text={dta.text} />;
  });
  return (
    <div className="app_wrapper">
      <div className="area1"> {mapList}</div>
      <div className="area2">
        <Route
          path="/post/:id?"
          render={() => <RouterForm state={state} textChange={textChange} />}
        />
      </div>
      <div className="area3">
        aria3
        <div> Count:{state.count} </div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
let RouterForm = withRouter(Form);
export { MainPage };
