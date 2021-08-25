import React, { Component } from 'react';
import { Wrapper } from './style';
import Navbar from './navbar.jsx';
import Body from './body.jsx';
import Middle from './middle.jsx';
import Middle2 from './middle2.jsx'
import Middle3 from './middle3.jsx'
import Footer from './footer.jsx'
export default class App extends Component {
  render() {
    return (
     <Wrapper>
       <Navbar />
        <Body />
        <Middle />
        <Middle2 />
        <Middle3 />
        <Footer />
     </Wrapper>
    )
  }
}

