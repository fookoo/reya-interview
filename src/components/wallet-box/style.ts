import styled from "@emotion/styled";

export const Accounts = styled("div")`
  position: absolute;
  z-index: 2;
  top: 48px;
  right: 0;
  width: min-content;

  padding: var(--size-sm);
  background-color: var(--wallet-background-color);
  border: 1px solid var(--wallet-border-color);
  border-radius: var(--size-xs);

  cursor: pointer;
`;
export const Account = styled("div")`
  display: flex;
  gap: 5ch;
  white-space: nowrap;

  div:last-of-type {
    margin-left: auto;
  }
`;
export const FlexDiv = styled("div")`
  display: flex;
  align-items: center;
  gap: 2ch;
`;
export const WalletBoxStyled = styled("div")`
  position: relative;

  color: var(--light-text-color);
  padding: var(--size-xs);
  margin-left: auto;
  margin-right: var(--size-sm);
  height: 16px;
  font-size: var(--size-sm);
  background-color: var(--wallet-background-color);
  border-radius: var(--size-xs);
  border: 1px solid var(--wallet-border-color);
`;
