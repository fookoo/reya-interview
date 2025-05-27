import React from "react";
import { useAccounts } from "../../context/accounts/accounts.context.tsx";

export const Market: React.FC<{ id: number; side: "long" | "short" }> = ({
  id = 0,
  side,
}) => {
  const { market } = useAccounts();

  return (
    <span
      style={{
        color: side === "long" ? "green" : "red",
      }}
    >
      {market(id)?.quoteToken}
    </span>
  );
};
