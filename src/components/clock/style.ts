import styled from "@emotion/styled";

export const ClockStyled = styled("div")`
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--size-sm);

  div:last-of-type {
    color: var(--dark-text-color);
  }
`;