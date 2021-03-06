import { render } from '@testing-library/react';
import React , {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <header id="header">
                    <div className="container-fluid">
                        <div id= "logo" className="pull-left">
                            <h1><a href="#intro" className="scrolto">Cyber</a></h1>
                        </div>
                        <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href="#intro">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            {/* <li className="menu-has-children"><a href="/#">Drop Down</a>
                                <ul>
                                    <li><a href="/#">Drop Down 1</a></li>
                                    <li><a href="/#">Drop Down 3</a></li>
                                    <li><a href="/#">Drop Down 4</a></li>
                                    <li><a href="/#">Drop Down 5</a></li>
                                </ul>
                            </li> */}
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;