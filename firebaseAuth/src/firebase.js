import { signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'


export class Firebase {

    // Signs-out
	static signOutUser(auth) {
        console.log('sair');
		signOut(auth);

	};

    // Sign Up
    static signUpWithEmail(auth, email, emailRp, pass, passRp, name) {

        const re = /\S+@\S+\.\S+/
		
        if(!email) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'O campo do e-mail está vazio, preencha o campos do e-mail para continuar' })
			throw new Error("E-mail field empty")
		}

		if(!re.test(email)) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'Este e-mail é invalido, tente novamente com um e-mail valido' })
			throw new Error("Invalid e-mail field")
		}

		if( email != emailRp) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'Os campos de e-mail estão diferentes, certifique-se que os campos de e-mail são iguais' })
			throw new Error("E-mails don't match")
		}

		if(!name) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'O campo do nome está vazio, preencha o campo do nome para continuar' })
			throw new Error("Name field empty")
		}

		if(!pass) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'O campo da senha está vazio, preencha o campo da senha para continuar' })
			throw new Error("Password field empty")
		}

		if(pass != passRp) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'Os campos de senha estão diferentes, certifique-se que os campos de senha são iguais' })
			throw new Error("Password repeat field empty")
		}

		if(pass.length < 6) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'Sua senha é muito curta. A senha deve ter ao menos 6 caracteres' })
			throw new Error("Password repeat field empty")
		}

		createUserWithEmailAndPassword( auth, email, pass )
			.then(() => {
                location.href = '/';
			})
			.catch((error) => {
				Swal.fire({ icon: 'error', title: 'Algo deu errado',
					text: 'Verifique se o seu e-mail está cadastrado ou tente com outro endereço de e-mail' })
				throw new Error(error)
			})

	}

    // Sign in Firebase using popup auth and Google as the identity provider.
	static async signInGoogle(auth) {
		try {
			const provider = new GoogleAuthProvider()
			await signInWithPopup(auth, provider)
		} catch (error) {
			Swal.fire({ icon: 'error', title: 'Ops...', text: 'Algo deu errado, tente novamente mais tarde' })
		}

	};

    //Sign in with e-mail and password
	static async signInEmail( auth, email, pass) {

        const re = /\S+@\S+\.\S+/

		if(!email && !pass) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'Os campos estão vazios, preencha os campos do e-mail e senha para continuar' })
			throw new Error("Email and pass empty")
		}

		if(!email) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'O campo do e-mail está vazio, preencha o campos do e-mail para continuar' })
			throw new Error("Email empty")
		}

		if(!re.test(email)) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'Este e-mail é invalido, tente novamente com um e-mail valido' })
			throw new Error("Invalid e-mail")
		}

		if(!pass) {
			Swal.fire({ icon: 'error', title: 'Ops...',
				text: 'O campo da senha está vazio, preencha o campos para continuar' })
			throw new Error("Password empty")
		}

		try{
			await signInWithEmailAndPassword(auth, email, pass)
		}catch(error) {
			Swal.fire({ icon: 'error', title: 'Ops...', text: 'E-mail ou senha incorreto' })
		}

	};

}
