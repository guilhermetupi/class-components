import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor() {
    super();
  }

  state = {
    theme: 'dark',
  }

  handleToggleTheme = () => {
    this.setState((prevState) => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
  }

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme, handleToggleTheme: this.handleToggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// export function ThemeProvider({ children, selectedTheme }) {
//   const [theme, setTheme] = useState('dark');

//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
