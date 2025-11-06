import { getAuth, createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

class FireBaseAuthService {
  #auth;
  
  constructor(app) {
    this.#auth = getAuth(app);
  }

  criarUsuarioComEmailESenha(email, senha) {
    createUserWithEmailAndPassword(this.#auth, email, senha)
      .then((credenciaisDoUsuario) => {
        console.log("Usuário criado com sucesso!", credenciaisDoUsuario.user);
      })
      .catch((error) => {
        console.error("Erro ao criar usuário:", error.message);
      });
  }
}

export default FireBaseAuthService;
