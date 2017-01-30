import React, {Component} from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MenuIcon from './components/MenuIcon.jsx'

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div id="menu-icon">
          <MenuIcon menuName="Search"/>
          <MenuIcon menuName="Profiles"/>
          <MenuIcon menuName="Browse"/>
          <MenuIcon nmenuNameame="Test"/>
          <MenuIcon menuName="Blog"/>
          <MenuIcon menuName="Something"/>
        </div>
        <div id="content">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}