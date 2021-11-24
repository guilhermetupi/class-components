import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

function HOC(Header) {
  return class extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(value) => (
            <Header {...value} />
          )}
        </ThemeContext.Consumer>

      );
    }
  };
}

class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.theme !== this.props.theme) {
      console.log('mudou o tema');
    }
  }

  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type='button' onClick={this.props.handleToggleTheme}>
          {this.props.theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </Container>
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

export default HOC(Header);