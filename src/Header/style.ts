import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 12.5rem;
  background: var(--gray-700);
  display: flex;
  justify-content: center;
  padding-top: 4.5rem;
  padding-bottom: 5rem;
  vertical-align: baseline;
`;

export const Logo = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 0.75rem;

  img {
    height: 3rem;
    vertical-align: baseline;
  }

  div {
    width: 5, 75rem;
    height: 3rem;
    font-family: "Inter";
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    color: var(--blue);
  }

  &:after {
    color: var(--purple-dark);
    content: attr(data-text);
  }
`;
