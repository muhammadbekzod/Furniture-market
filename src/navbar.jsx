import React, { Component } from 'react'
import { Container, NavItem, Logo} from './navbarStlye'
import logo from './img/logo.png'

export default class Navbar extends Component {
    state={
        isActive: 'home',
    }
    render() {
        return (
           <Container>
               <Logo src={logo} />
               <NavItem onClick={()=> this.setState({isActive:'home'})} isActive={this.state.isActive==='home'}>Home</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'about'})} isActive={this.state.isActive==='about'}>Service</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'menu'})} isActive={this.state.isActive==='menu'}>Doctors</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'features'})} isActive={this.state.isActive==='features'}>Products</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'contact'})} isActive={this.state.isActive==='contact'}>
                   Gallery
               </NavItem>

         
           </Container>
        )
    }
}
