import styled from "styled-components";

export const Empty = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 24px;
  gap: 16px;
  width: 736px;
  height: 244px;
  border-top: 1px solid #333333;
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  img {
    width: 56px;
    height: 56px;
    background: url(.png);
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  span {
    width: 688px;
    height: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #808080;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  &:last-child {
    font-weight: 400;
  }
`;
