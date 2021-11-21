import React from 'react';
import { useTheme } from 'styled-components';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    console.log('unmount');
  }

  handleScroll = () => {
    console.log('scroll');
  };

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}

// export default function Layout() {
//   return (
//     <>
//       <Header />
//       <PostsList />
//       <Footer />
//     </>
//   );
// }
