import React from "react";
import type {
  IAccount,
  IAccountsResponse,
  IMarketResponse,
} from "./accounts.type.ts";

interface IAccountsContext {
  isLoading: boolean;
  account: IAccount;
  accounts: IAccountsResponse[];
  markets: IMarketResponse[];
  prices: Record<number, number>;
  selectAccount: (id: number) => void;
  market: (id: number) => IMarketResponse | null;
}

export const defaultAccountsContext: IAccountsContext = {
  account: { id: -1, name: "", positions: [] },
  isLoading: false,
  accounts: [],
  markets: [],
  prices: {},
  selectAccount: () => {},
  market: () => null,
};

export const AccountsContext = React.createContext(defaultAccountsContext);

export const useAccounts = () => React.useContext(AccountsContext);
