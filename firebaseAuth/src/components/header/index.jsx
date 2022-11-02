import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="logo">
                        LOGOMARCA
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/config">Configurações</Link></li>
                            <li><Link to="/logout">Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;