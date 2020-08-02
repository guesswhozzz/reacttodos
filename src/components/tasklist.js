import React from "react";
import { Link } from "react-router-dom";
import { RedButton, GreenButton } from "./newbtn";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  font-size: 1.2rem;
  border: 1px solid #f2f2f2;
  border-collapse: collapse;
`;

const TableContainer = styled.tr`
  border: 1px solid #f2f2f2;
  border-collapse: collapse;
`;

const TableElementContainer = styled.td`
  padding: 0.5rem 1.5rem;
`;

const IdContainer = styled(TableElementContainer)`
  width: 10%;
  border: 1px solid #f2f2f2;
`;
const TitleContainer = styled(TableElementContainer)`
  border: 1px solid #f2f2f2;
`;
const ButtonContainer = styled(TableElementContainer)`
  text-align: center;
  width: 5%;
`;

export const Tasklist = ({ tasks }) => {
  if (!tasks.length) {
    return <p> Н/Д</p>;
  }
  const tasksitems = tasks.map((e) => {
    return (
      <>
        <TableContainer key={e.id}>
          <IdContainer>{e.id}</IdContainer>
          <TitleContainer>{e.title}</TitleContainer>
          <ButtonContainer>
            <Link to={`/${e.id}`}>
              <GreenButton
                content={"PO"}
                onClick={() => console.log(`task ${e.id}`)}
              ></GreenButton>
            </Link>
          </ButtonContainer>
          <ButtonContainer>
            <RedButton
              content={"TA"}
              onClick={() => {
                console.log("test");
              }}
            ></RedButton>
          </ButtonContainer>
        </TableContainer>
      </>
    );
  });
  return <Table>{tasksitems}</Table>;
};
