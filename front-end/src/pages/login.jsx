import React from 'react'
import { useNavigate } from 'react-router-dom';



function Login() {
  
  //Função para navegar entre páginas do Login para Cadastro adicionando funcionalidade ao botão
  const navigate = useNavigate();
    function irPara(rota) {
    navigate(rota)
  }

  return (
    <div>

      <div classNam="left-content">
        <img src="../public/react.svg" alt="Logo" />
        <h1>BEM-VINDO DE VOLTA!</h1>
        <form id="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='exmplo@gmail.com' required/>

          <label htmlFor="password">Senha</label>
          <input type="password" placeholder='Senha' required/>

          <button onClick={() => irPara("/redefinir-senha")}>Esqueci minha senha</button>
          <button type="submit">Entrar</button>
          
        </form>

      <p>Não tem uma conta? <button onClick={() => irPara("/cadastro")}>Ir para cadastro</button></p>

      </div>

      <div className="right-content">
        <img src="../public/vite.svg" alt="Foto Pinacoteca" />
      </div>
    </div>

  )
}
export default Login

