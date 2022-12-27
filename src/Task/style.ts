import styled, { css } from "styled-components";

interface DescriptionProps {
  done: boolean;
}

export const TaskContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;
  width: 736px;
  height: 72px;
  background: #262626;
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  align-items: center;

  div:first-of-type {
    flex-grow: 1;
  }

  input[type="checkbox"] {
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    outline: 2px solid var(--blue);
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background-color: var(--blue-dark);
  }

  span {
    width: 632px;
    height: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #f2f2f2;
    flex: none;
    order: 1;
    flex-grow: 1;
  }

  img {
    background: none;
  }

  img:hover {
    background: #d9c4af;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Description = styled.span<DescriptionProps>`
  ${(props) => {
    return css`
      ${props.done ? 'text-decoration: line-through':''}
    `;
  }}
`;