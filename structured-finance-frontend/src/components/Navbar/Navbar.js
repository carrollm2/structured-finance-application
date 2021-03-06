import React from 'react';
import {MenuItems} from './MenuItems'
import {Button} from '../Button/Button.js'
import './Navbar.css'

class Navbar extends React.Component{

    state = {clicked: false}

    handleOnClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> The Wa<i class="fas fa-chart-line"></i></h1>
                <div className="menu-icon" onClick={this.handleOnClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }

}

export default Navbar