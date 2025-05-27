import React from "react";

import { useAccounts } from "../../context/accounts/accounts.context.tsx";
import { TableStyled } from "./style.ts";
import { Market } from "./Market.tsx";
import { formatCurrency } from "../../helpers.ts";

export const Table: React.FC = () => {
  const { account, prices } = useAccounts();

  return (
    <TableStyled>
      <h2>Positions</h2>
      <table>
        <thead>
          <tr>
            <th>Market</th>
            <th>Size</th>
            <th>Position Value</th>
            <th>Mark Price</th>
          </tr>
        </thead>
        <tbody>
          {account.positions.map((position) => {
            const openPrice = position.markPrice;
            const currentMarkPrice = prices[position.marketId];
            const currentPrice = position.base * currentMarkPrice;

            return (
              <tr key={position.id}>
                <td>
                  <Market id={position.marketId} side={position.side} />
                </td>
                <td>{position.base.toFixed(2)}</td>
                <td>{formatCurrency(currentPrice)}</td>
                <td>{formatCurrency(openPrice)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyled>
  );
};
