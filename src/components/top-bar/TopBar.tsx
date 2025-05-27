import LogoImage from "../../assets/logo.png";
import { WalletBox } from "../wallet-box/WalletBox.tsx";
import { useAccounts } from "../../context/accounts/accounts.context.tsx";

export const TopBar = () => {
  const { account } = useAccounts();
  return (
    <nav>
      <img className="logo" src={LogoImage} alt="" />
      <h1>Portfolio {account && <>:: {account.name}</>}</h1>
      <WalletBox />
    </nav>
  );
};
