import { createGlobalStyle } from "styled-components";
import * as theme from "./components/navbar/style";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 1%, 16%);
  font-family: monospace;
  overflow-x: hidden;
}
`

.light {
    background-color: hsl(0, 0%, 93%);
  }
  .dark {
    background-color: hsl(0, 0%, 20%);
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: monospace;
    overflow-x: hidden;
  }
  
  .light {
    background-color: ${theme.light.colors.header};
  }
  .dark {
    background-color: ${theme.dark.colors.header};
  }