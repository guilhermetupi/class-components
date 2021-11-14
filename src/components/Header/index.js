import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button type='button' onClick={handleToggleTheme}>
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}

// export default function Header({ onToggleTheme, selectedTheme }) {
//   return (
//   <Container>
//     <h1>JStack's Blog</h1>
//     <button type="button" onClick={() => onToggleTheme()}>
//       {selectedTheme === "dark" ? "🌞" : "🌙"}
//     </button>
//   </Container>
// );
// }

// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToggleTheme: PropTypes.func.isRequired,
// };
