import styled from "@emotion/styled";

export const AppLayout = styled("div")`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 54px auto 34px;

  nav,
  article,
  footer {
    width: 100%;
    display: flex;
  }

  nav {
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    .logo {
      padding: 11px;
      width: 32px;
      border-right: 1px solid var(--border-color);
    }

    h1 {
      padding: 0 16px;
      color: var(--light-text-color);
      font-size: 14px;
      font-weight: 500;
    }
  }

  article {
    display: grid;
    grid-template-columns: 232px auto;

    .content {
      height: calc(100vh - 88px);
      overflow-y: auto;
    }
  }

  footer {
    background-color: var(--footer-background-color);
    border-top: 1px solid var(--border-color);

    ul {
      display: none;
      list-style: none;
    }
  }
`;
