import styled from "@emotion/styled";

export const LoaderStyled = styled("img")`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: var(--size-md);
  height: var(--size-md);

  animation: spin 2s linear infinite;
`;