import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = (props) => {
  const FormStyled = styled.div`
    font-size: 28px;
    margin: 20px;
    :hover {
      color: red;
    }
  `;

  return (
    <NavLink to={"/post/" + props.id}>
      <FormStyled>
        <div>
          <span>{props.month}</span>
          <span>{props.day}</span>
          <span>{props.text}</span>
        </div>
      </FormStyled>
    </NavLink>
  );
};

export { List };
