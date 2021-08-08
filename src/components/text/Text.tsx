import styled from "styled-components";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: var(${config.theme});
`;

export const Paragraph = styled.p`
`;
