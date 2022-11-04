import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import { Firebase } from '../../firebase';
import { getAuth } from 'firebase/auth';

function Header() {
    const logout = () => {
        Firebase.signOutUser(getAuth());
        location.reload();
    }
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="logo">
                        LOGOMARCA
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/" >Início</Link></li>
                            <li><Link to="/config">Configurações</Link></li>
                            <li><Link onClick={logout} >Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;