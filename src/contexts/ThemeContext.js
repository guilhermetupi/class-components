import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = 'dark';

    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch (e) {
      console.error(e);
    }

    this.state = { theme };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.theme !== this.state.theme) { // monitorar mudanças no estado
      console.log('tema mudou')
    }
  }

  handleToggleTheme = () => {
    this.setState((prevState) => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }), () => localStorage.setItem('theme', JSON.stringify(this.state.theme)));
  }

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme || 'dark', handleToggleTheme: this.handleToggleTheme }}>
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
