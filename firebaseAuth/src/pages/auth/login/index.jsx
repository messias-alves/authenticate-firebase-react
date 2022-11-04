import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Firebase } from '../../../firebase';
import { getAuth } from 'firebase/auth';

import '../style.css';
import '../../../components/styled.css';

import GoogleIcon from '@mui/icons-material/Google';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginWithGoogle = () => {
        Firebase.signInGoogle(getAuth());
    };

    const loginWithEmail = (e) => {
        e.preventDefault();
        Firebase.signInEmail(getAuth(), email, password);
    };

    return (
            <div className="AreaLogin">
                <h1>Faça login em sua conta</h1>
                <button className="btnWithIcons" onClick={loginWithGoogle}>
                    <GoogleIcon />
                    <div className="center">Fazer login com o Google</div>
                </button>
                <p>OU</p>
                <form>
                    <div className="form-input">
                        <label>E-mail</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-input">
                        <label>Senha</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="btn" onClick={loginWithEmail}>
                        Entrar
                    </button>

                    <div className="footerLogin">
                        Não tem uma conta? 
                        <Link to="/registrar">Registre-se</Link>
                    </div>
                </form>
            </div>
    );
}

export default Login;