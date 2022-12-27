import imgLogo from "../assets/rocket-logo.svg";
import { HeaderContainer, Logo } from "./style";
export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={imgLogo} />
        <div data-text="do">to</div>
      </Logo>
    </HeaderContainer>
  );
}
