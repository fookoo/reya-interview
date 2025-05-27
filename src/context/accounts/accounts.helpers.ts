import type {
  IAccountsResponse,
  IMarketResponse,
  PriceUpdate,
} from "./accounts.type.ts";

export const fetchAccounts = async (walletId: string) => {
  try {
    const response = await fetch(
      `https://api.reya.xyz/api/accounts/${walletId}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: IAccountsResponse[] = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export const fetchMarkets = async () => {
  try {
    const response = await fetch(`https://api.reya.xyz/api/markets`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: IMarketResponse[] = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export const isPriceUpdate = (
  data: Record<string, unknown>,
): data is PriceUpdate => {
  return data.type === "channel_data";
};
