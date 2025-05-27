interface IPosition {
  id: number;
  orderStatus: "OPEN";
  liquidationPrice: number;
  markPrice: number;
  marketId: number;
  price: number;
  realisedPnl: number;
  priceVariationPnl: number;
  fundingPnl: number;
  livePnL: number;
  side: "long" | "short";
  size: number;
  base: number;
  unrealisedPnl: number;
  accountId: number;
  conditionalOrdersInfo: Record<string, never>;
}

export interface IAccount {
  id: number;
  name: string;
  positions: IPosition[];
}

export interface IAccountsResponse {
  collaterals: unknown[];
  id: number;
  isApproachingLiquidation: boolean;
  isLiquidationImminent: boolean;
  liquidationMarginRequirement: number;
  livePnL: number;
  livePnLUnderlyingAsset: string;
  marginRatioHealth: string;
  marginRatioHealthDangerThreshold: number;
  marginRatioHealthWarningThreshold: number;
  marginRatioPercentage: number;
  name: string;
  positions: IPosition[];
  realizedPnL: number;
  realizedPnLUnderlyingAsset: string;
  realizedPnlHistoryTotal: number;
  totalBalance: number;
  totalBalanceChange24HPercentage: number;
  totalBalanceUnderlyingAsset: string;
  totalBalanceWithHaircut: number;
  totalPositionsCount: number;
}

export interface IMarketResponse {
  id: number;
  ticker: string;
  underlyingAsset: string;
  quoteToken: string;
  quoteTokenId: string;
  markPrice: number;
  isActive: boolean;
  maxLeverage: number;
  volume24H: number;
  priceChange24H: number;
  priceChange24HPercentage: number;
  marketPriceDeviation: number;
  openInterest: number;
  fundingRate: number;
  fundingRateAnnualized: number;
  description: string;
  tickSizeDecimals: number;
  minOrderSizeBase: number;
  minOrderSize: number;
  baseSpacing: number;
  priceSpacing: number;
  orderInfo: {
    exchangeId: number;
    counterpartyAccountIds: number[];
  };
}

export type PriceUpdate = {
  type: "channel_data";
  connection_id: string;
  message_id: number;
  id: string;
  channel: string;
  version: string;
  contents: {
    model: "price";
    operation: "update";
    result: {
      marketId: number;
      oraclePrice: string;
      poolPrice: string;
      price: string;
      updatedAt: number;
    };
  };
};
