import { Loader } from "../loader/Loader.tsx";
import { useToggle } from "e30studio";
import { useAccounts } from "../../context/accounts/accounts.context.tsx";
import { useCallback } from "react";
import { Account, Accounts, FlexDiv, WalletBoxStyled } from "./style.ts";
import { formatCurrency } from "../../helpers.ts";

export const WalletBox = () => {
  const { isLoading, accounts, selectAccount } = useAccounts();
  const { value, toggle, close } = useToggle(false);

  const handleAccountSelect = useCallback(
    (accountId: number) => () => {
      close();
      selectAccount(accountId);
    },
    [close, selectAccount],
  );

  return (
    <WalletBoxStyled>
      {isLoading && (
        <FlexDiv>
          Loading <Loader style={{ width: "16px", height: "16px" }} />
        </FlexDiv>
      )}
      {!isLoading && <div onClick={toggle}>Accounts</div>}
      {value && (
        <Accounts>
          {accounts?.map((account) => (
            <Account key={account.id} onClick={handleAccountSelect(account.id)}>
              <div>{account.name}</div>
              <div>{formatCurrency(account.totalBalance)}</div>
            </Account>
          ))}
        </Accounts>
      )}
    </WalletBoxStyled>
  );
};
