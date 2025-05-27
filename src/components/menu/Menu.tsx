import menuImg from "../../assets/menu.jpeg";
import { MenuStyled } from "./style.ts";

export const Menu = () => {
  return (
    <MenuStyled>
      <div>
        <img src={menuImg} alt={"Overview"} />
        Overview
      </div>
      <div>Portfolio overview</div>
    </MenuStyled>
  );
};
