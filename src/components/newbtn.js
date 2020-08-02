import styled from "styled-components";

const Button = styled.button`
  align-self: flex-start;
  display: inline-block;
  padding: 1rem 1rem;
  background-color: #ffffff;
  border: 1px solid red;
  border-radius: 0.4rem;
  transition: background-color 0.2s, border 0.2s;
  font-size: 1.4rem;
  &::before {
    content: "${(props) => props.content || "props"}";
    transition: color 0.2s;
  }
  &:hover {
    background-color: red;
    color: white;
    &::before {
      color: blue;
    }
  }
`;

export const RedButton = styled(Button)`
  border: 1px solid #ff0000;
  color: #ff0000;
  &:hover {
    background-color: #ff0000;
    color: #ffffff;
    &::before {
      color: #ffffff;
    }
  }
`;

export const GreenButton = styled(Button)`
  border: 1px solid #62a60a;
  color: #000000;
  &:hover {
    background-color: #62a60a;
    color: #ffffff;
    &::before {
      color: #ffffff;
    }
  }
`;
export const BlueButton = styled(Button)`
  border: 1px solid #f2f2f2;
  color: #000000;
  &:hover {
    border: 1px solid #0071bc;
    background-color: #0071bc;
    color: #ffffff;
    &::before {
      color: #ffffff;
    }
  }
`;
