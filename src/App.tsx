import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/themes/default";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
          <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
