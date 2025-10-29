import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-pina.png";

function Login() {
  //Função para navegar entre páginas do Login para Cadastro adicionando funcionalidade ao botão
  const navigate = useNavigate();
  function irPara(rota) {
    navigate(rota);
  }

  return (
    <div className="login-container">
      <div className="left-content">
        <img src={logo} alt="Logo" />
        <h1>Bem-vindo de volta!</h1>

        <form id="login-form" className="input-group">
          <div className="email-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="exemplo@email.com" required />
          </div>
          <div className="password-group">
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Senha" required />
            <div className="forgot-my-password-group">
              <button
                className="hiperlink btn-"
                onClick={() => irPara("/redefinir-senha")}
              >
                Esqueci minha senha
              </button>
            </div>
          </div>

          <button className="btn-primary" type="submit">
            Entrar
          </button>
        </form>

        <p>
          Não tem uma conta?
          <button className="hiperlink" onClick={() => irPara("/cadastro")}>
            Crie uma
          </button>
        </p>
      </div>

      <div className="right-content">
        <img src="" alt="Foto Pinacoteca" />
      </div>
    </div>
  );
}
export default Login;
