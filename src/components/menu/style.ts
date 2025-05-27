import styled from "@emotion/styled";

export const MenuStyled = styled("div")`
  padding: var(--size-sm);
  border-right: 1px solid #323232;

  div {
    display: flex;
    align-items: center;
    gap: 1ch;
    color: #f9f9fa;

    &:first-of-type {
      height: 41px;
      border-radius: 8px;
      background-color: #222222;
      font-size: 14px;

      border: 1px solid #323232;
      padding: 0 10px;
    }

    &:last-of-type {
      height: 34px;
      font-size: 12px;

      &:before {
        content: "";
        background-color: #f9f9fa;
        width: 1px;
        height: 32px;

        margin: 0 4px 0 10px;
      }
    }
  }
  img {
    width: 14px;
    height: 14px;
  }
`;
