import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

const Heading = styled`
${(props) =>
  props.as === "h1" &&
  css`
    font-size: 3rem;
    font-weight: 600;
  `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  font-size: 20px;
  font-weight: 600;
  background-color: yellow;
`;

export default Heading;
