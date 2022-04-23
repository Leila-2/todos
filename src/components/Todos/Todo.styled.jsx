import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  background-color: #4a5a65;
  color: #ea9215;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;

  display: block;
  margin: 15px auto;
  transition-property: margin-bottom;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    margin-bottom: 20px;
  }
`;
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
    justify-content: space-between;

    border-bottom: 0.7px dashed #979797;
    color: #ffffff;
    :not(last-child) {
      margin-top: 30px;
    }
    :first-child {
      margin-top: 0px;
    }
    div {
      display: flex;
      align-items: center;
    }

    button {
    background-color:#D05757;
    color: #fff;
    font-weight: 600;
    font-size:14px;
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom:5px;

    transition-property: margin-bottom;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :focus,
    :hover {
     margin-bottom:20px
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

    transition-property: width, height;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      width: 45px;
      height: 45px;
    }
  }
`;
