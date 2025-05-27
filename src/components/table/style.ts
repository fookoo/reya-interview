import styled from "@emotion/styled";

export const TableStyled = styled("div")`
  padding: var(--size-sm);
  border-bottom: 1px solid var(--border-color);

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0%;
  }

  table {
    width: 100%;

    margin-top: var(--size-sm);

    thead {
      color: var(--light-text-color);
      th {
        text-align: left;
        font-size: 10px;
      }
    }

    tbody {
      font-size: 11px;
      font-weight: 500;
    }
  }
`;
