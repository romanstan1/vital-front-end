import styled, { css } from "styled-components";

// eslint-disable-next-line
export const rem = (px: any) => `${px / 16}rem`;

interface Props {
  $bold?: boolean;
  $uppercase?: boolean;
  $italic?: boolean;
}

export const styles = {
  h1: css`
    font-size: ${rem(25)};
    line-height: ${rem(25)};
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin: 10px 0;
  `,
  h2: css`
    font-size: ${rem(22)};
    line-height: ${rem(26)};
    font-weight: 600;
    font-family: "Inter", sans-serif;
  `,
  h25: css`
    font-size: ${rem(20)};
    line-height: ${rem(20)};
    font-weight: 600;
    font-family: "Inter", sans-serif;
  `,
  h3: css`
    font-size: ${rem(19)};
    line-height: ${rem(44)};
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin: 5px 0;
  `,
  h4: css<Props>`
    font-weight: 400;
    font-size: ${rem(18)};
    line-height: ${rem(18)};
    font-family: "Inter", sans-serif;
    margin: 5px 0;
    ${({ $bold }) =>
      $bold &&
      css`
        font-weight: 600;
      `};
  `,
  p1: css<Props>`
    font-size: ${rem(16)};
    line-height: ${rem(16)};
    margin: 5px 0;
    font-family: "Inter", sans-serif;
    ${({ $bold }) =>
      $bold &&
      css`
        font-weight: 600;
      `};
  `,

  p2: css<Props>`
    font-size: ${rem(14)};
    line-height: ${rem(21)};
    margin: 5px 0;
    font-family: "Inter", sans-serif;
    ${({ $bold }) =>
      $bold &&
      css`
        font-weight: 600;
      `};
    ${({ $italic }) =>
      $italic &&
      css`
        font-style: italic;
      `};
  `,

  p3: css<Props>`
    font-size: ${rem(17)};
    line-height: ${rem(20)};
    margin: 5px 0;
    font-family: "Inter", sans-serif;
    ${({ $bold }) =>
      $bold &&
      css`
        font-weight: 600;
      `};
    ${({ $italic }) =>
      $italic &&
      css`
        font-style: italic;
      `};
  `,

  label1: css`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
    font-weight: 400;
    font-family: "Inter";
  `,
  label2: css`
    font-size: ${rem(15)};
    line-height: ${rem(22.5)};
    font-weight: 400;
    font-feature-settings: "kern";
    font-family: "Inter";
  `,
  label3: css`
    font-size: ${rem(10)};
    line-height: ${rem(15)};
    font-weight: 400;
    font-family: "Inter";
  `,
};

// eslint-disable-next-line
const weightHelper = (props: any) => {
  if (props.$bold) {
    return css`
      font-weight: 600;
    `;
  }
};

// eslint-disable-next-line
const styleHelper = (props: any) => {
  if (props.$uppercase) {
    return css`
      text-transform: uppercase;
    `;
  }
};

/* eslint-disable */
const fontBase = css`
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  ${(props) => weightHelper(props)}
  ${(props) => styleHelper(props)}
`;
/* eslint-enable */

export const H1 = styled.h1`
  ${styles.h1}
`;
export const H2 = styled.h2`
  ${styles.h2}
`;
export const H25 = styled.h2`
  ${styles.h25}
`;
export const H3 = styled.h3`
  ${styles.h3}
`;
export const H4 = styled.h4<Props>`
  ${styles.h4}
`;

export const P1 = styled.p<Props>`
  ${styles.p1}
  ${fontBase}
`;
export const P2 = styled.p<Props>`
  ${styles.p2}
  ${fontBase}
`;
export const P3 = styled.p<Props>`
  ${styles.p3}
  ${fontBase}
`;

export const L1 = styled.p<Props>`
  ${styles.label1}
  ${fontBase}
`;
export const L2 = styled.p<Props>`
  ${styles.label2}
  ${fontBase}
`;
export const L3 = styled.p<Props>`
  ${styles.label3}
  ${fontBase}
`;
