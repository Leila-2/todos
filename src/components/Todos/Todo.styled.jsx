import styled from "styled-components";

export const StyledTodoEd = styled.form`
  margin-top: 100px;
  border-bottom: 0.7px dashed #979797;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 80%;
    height: 47px;
    margin-left: 20px;
    font-size: 30px;
    line-height: 1.2;
    color: #ffffff;
    ::placeholder {
      font-weight: 275;
      font-size: 30px;
      line-height: 1.2;
    }
  }
  button {
    background-color: #ea9215;
    color: #303841;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 5px;

    transition-property: box-shadow;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :focus,
    :hover {
      box-shadow: 0px 0px 7px 1px rgba(234, 146, 21, 0.49);
    }
  }
`;

export const StyledTodoList = styled.ul`
  margin-top: 78px;

  li {
    height: 42px;
    display: flex;
    align-items: center;

    border-bottom: 0.7px dashed #979797;
    color: #ffffff;
    :not(last-child) {
      margin-top: 30px;
    }
    :first-child {
      margin-top: 0px;
    }
  }

  p {
    margin-left: 20px;
    font-weight: 300;
    font-size: 25px;
    line-height: 1.2;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;

    :checked + svg {
      fill: #ea9215;
    }
  }
  svg {
    margin-bottom: 10px;
    width: 40px;
    height: 40px;
    fill: #303841;

    transition-property: margin-bottom;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      margin-bottom: 30px;
    }
  }
`;
