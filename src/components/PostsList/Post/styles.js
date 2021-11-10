import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.postBackgroundColor};
    padding: ${theme.spacing.medium}px;
    border-radius: ${theme.borderRadius};
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0 0 ${theme.spacing.small}px;
    }

    small {
      opacity: 0.7;
    }

    & + article {
      margin-top: ${theme.spacing.small}px;
    }
  `}
`;
