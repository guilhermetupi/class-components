import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
      // handleToggleTheme: () =>
      //   this.setState({
      //     theme: this.state.theme === "dark" ? "light" : "dark",
      //   }),
    };

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme() {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout onToggleTheme={this.handleToggleTheme} selectedTheme={theme} />
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
