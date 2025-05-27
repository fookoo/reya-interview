import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useQuery } from "@tanstack/react-query";

import type { IAccount, IMarketResponse } from "./accounts.type.ts";
import {
  AccountsContext,
  defaultAccountsContext,
} from "./accounts.context.tsx";
import {
  fetchAccounts,
  fetchMarkets,
  isPriceUpdate,
} from "./accounts.helpers.ts";

export const AccountsProvider: React.FC<{
  walletId?: string;
  children: React.ReactNode;
}> = ({
  walletId = "0xB4B77d6180cc14472A9a7BDFF01cc2459368D413",
  children,
}) => {
  const wsRef = useRef<WebSocket | null>(null);
  const positionsRef = useRef<string[]>([]);

  const [account, setAccount] = useState<IAccount | null>(null);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const { data: accounts, isLoading: isLoadingAccounts } = useQuery({
    queryKey: ["wallet", walletId],
    queryFn: () => fetchAccounts(walletId),
    refetchOnWindowFocus: false,
  });
  const { data: markets, isLoading: isLoadingMarkets } = useQuery({
    queryKey: ["markets"],
    queryFn: () => fetchMarkets(),
    refetchOnWindowFocus: false,
  });

  const selectAccount = useCallback(
    (accountId: number) => {
      const selectedAccount = accounts?.filter(({ id }) => id === accountId);

      if (!selectedAccount) {
        throw new Error("Account not found");
      }

      setAccount({
        id: selectedAccount[0].id,
        name: selectedAccount[0].name,
        positions: selectedAccount[0].positions,
      });
    },
    [accounts],
  );

  const market = useCallback(
    (lookForId: number): IMarketResponse | null =>
      markets?.find(({ id }) => id === lookForId) ?? null,
    [markets],
  );

  const value = useMemo(() => {
    const defaultAccount = accounts?.[0] ?? defaultAccountsContext.account;

    return {
      account: account ?? defaultAccount,
      accounts: accounts ?? [],
      markets: markets ?? [],
      isLoading: isLoadingAccounts || isLoadingMarkets,
      prices,
      selectAccount,
      market,
    };
  }, [
    account,
    accounts,
    isLoadingAccounts,
    isLoadingMarkets,
    market,
    markets,
    prices,
    selectAccount,
  ]);

  useEffect(() => {
    const noAccountIsSelected = !account;
    const thereIsNoAccounts = !accounts || (accounts && accounts.length === 0);

    if (noAccountIsSelected) {
      if (!thereIsNoAccounts) {
        setAccount({
          id: accounts[0].id,
          name: accounts[0].name,
          positions: accounts[0].positions,
        });
      }

      return;
    }

    const ws = new WebSocket(`wss://websocket.reya.xyz`);

    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket opened", account?.positions);
      const mark = (marketId = 9) =>
        `${market(marketId)?.ticker.replace("rUSD", "USD").replace("-", "").toUpperCase()}MARK`;

      positionsRef.current = (account?.positions ?? []).map(
        ({ marketId }) => `/api/trading/prices/${mark(marketId)}`,
      );

      positionsRef.current.forEach((channel) => {
        ws.send(
          JSON.stringify({
            type: "subscribe",
            channel,
          }),
        );
      });
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (isPriceUpdate(data)) {
          setPrices((prev) => {
            return {
              ...prev,
              [data.contents.result.marketId]:
                Number(data.contents.result.price) / 1e18,
            };
          });
        }
      } catch {
        console.error("Invalid JSON:", event.data);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      if (positionsRef.current.length) {
        positionsRef.current.forEach((channel) => {
          ws.send(
            JSON.stringify({
              type: "unsubscribe",
              channel,
            }),
          );
        });
      }

      ws.close();
    };
  }, [account, accounts, market]);

  return (
    <AccountsContext.Provider value={value}>
      {children}
    </AccountsContext.Provider>
  );
};
