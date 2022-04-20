import { ReactComponent as Logo } from "../icons/ellipse.svg";
import { StyledHeader } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <p>
        <span>Todo</span>
        Editor
      </p>
    </StyledHeader>
  );
}
