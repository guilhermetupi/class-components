import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.footerBackgroundColor};
    padding: 0 ${theme.spacing.large}px;
    border-radius: ${theme.borderRadius};
    margin-top: ${theme.spacing.large}px;
  `}
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
