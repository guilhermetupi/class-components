import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

function App() {
  console.log(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}

export default App;
