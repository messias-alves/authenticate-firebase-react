import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Firebase } from '../../../firebase';
import { getAuth } from 'firebase/auth';

import '../style.css';
import '../../../components/styled.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Registrar() {
    const [email, setEmail] = useState("");
    const [emailrp, setEmailrp] = useState("");
    const [password, setPassword] = useState("");
    const [passwordrp, setPasswordrp] = useState("");
    const [name, setName] = useState("");

    const signUpEmail = (e) => {
        e.preventDefault();
        Firebase.signUpWithEmail(getAuth(), email, emailrp, password, passwordrp, name);
    };


    return (
        <div className="AreaLogin">
                <h1 className="organize">
                    <Link to='/'><ArrowBackIosIcon /></Link>
                    Crie sua conta</h1>
                <p>Crie sua conta é grátis</p>
                <form>
                <div className="form-input">
                        <label>Nome</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-input">
                        <label>E-mail</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-input">
                        <label>Confirme seu E-mail</label>
                        <input type="email" onChange={(e) => setEmailrp(e.target.value)} />
                    </div>
                    <div className="form-input">
                        <label>Senha</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-input">
                        <label>Confirme sua Senha</label>
                        <input type="password" onChange={(e) => setPasswordrp(e.target.value)} />
                    </div>
                    <button className="btn" onClick={signUpEmail}>
                        Comece agora!
                    </button>

                    <div className="footerLogin">
                        Já tem uma conta? 
                        <Link to="/">Faça login</Link>
                    </div>
                </form>
            </div>
    );
}

export default Registrar;