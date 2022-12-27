import styled from "styled-components";

export const FormCreatedTask = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 736px;
  height: 53px;
  left: calc(50% - 736px / 2);
  top: 173px;

  input {
    box-sizing: border-box;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    width: 39.88rem;
    height: 3.38rem;
    background: var(--gray-500);
    border: 0.06rem solid var(--gray-700);
    border-radius: 0.5rem;
    color: white;
    flex: none;
    order: 0;
    flex-grow: 1;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;
    width: 90px;
    height: 52px;
    background: #1e6f9f;
    border:0;
    border-radius: 8px;
    transition: 0.3s;

    &:hover:enabled {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px;
      gap: 8px;
      width: 90px;
      height: 52px;
      background: #4ea8de;
      border-radius: 8px;
      cursor: pointer;
    }

    &:disabled {
      background-color: dimgrey;
      opacity: 1;
    }

    span {
      width: 34px;
      height: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 140%;
      color: #f2f2f2;
    }
  }
`;

export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  position: absolute;
  width: 736px;
  height: 287px;
  left: calc(50% - 736px / 2);
  top: 291px;
`;

export const ContainerLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px;
  width: 736px;
  height: 19px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: #4ea8de;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const DivLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  height: 19px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DivCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  gap: 10px;
  width: 25px;
  height: 19px;
  background: #333333;
  border-radius: 999px;
  flex: none;
  order: 1;
  flex-grow: 0;

  span {
    /* width: 9px; */
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #d9d9d9;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
