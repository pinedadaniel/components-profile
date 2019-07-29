import React from 'react';
import logo from '../images/logo-ag-min.png';
import '../styles/NavBarStyle.css';

class NavBar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className='row-fluid'> 
                    <div className='col-sm-12'> 
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <h4 className="font-weight-light">Conferencia</h4>
                        <h4 className="font-weight-bold">Geek</h4>
                    </a> 
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;