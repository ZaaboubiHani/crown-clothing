import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/4.3 crown.svg.svg";
import './header.style.scss';

const Header:React.FC = ()=>(
    <div className="header">
        <Link className="logo-container" to='/' >
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
            SHOP    
            </Link>    
            <Link className="option" to='/shop'>
            CONTACT    
            </Link>    
        </div>
    </div>
)

export default Header;