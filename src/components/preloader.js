import React from "react";
import styled from "styled-components";

const Blink = styled.div`
  font-size: 2.4rem;
  animation: blink-animation 1s steps(5, start) infinite;
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`;

export const PreLoader = () => {
  return (
    <>
      <Blink> Заугрузка... </Blink>;
    </>
  );
};
