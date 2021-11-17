import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends Component {
  // handleForceRender = () => this.forceUpdate(); // Força renderização do componente

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme]}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

// function App() {
//   console.log(localStorage.getItem("theme"));
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

//   const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

//   function handleToggleTheme() {
//     setTheme(theme === "dark" ? "light" : "dark");
//   }

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

// return (
//   <ThemeProvider theme={currentTheme}>
//     <GlobalStyle />
//     <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
//   </ThemeProvider>
// );
// }

export default App;
