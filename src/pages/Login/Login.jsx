import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import logo from "../../assets/LGAgresteTextilSF.png";

export function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function entrar(event) {
    event.preventDefault();

    if (!usuario || !senha) {
      alert("Preencha o usuário e a senha.");
      return;
    }

    if (usuario === "paulo" && senha === "paulo12345") {
      localStorage.setItem("usuario", usuario);
      navigate("/dashboard");
    } else {
      alert("Usuário ou senha incorretos.");
      setUsuario("");
      setSenha("");
    }
  }

  return (
    <div className={styles.login}>
      <form className={styles.formulario} onSubmit={entrar}>
        <img src={logo} alt="imagem agreste textil" />

        <h1>AGESTEXTIL</h1>
        <p>Acesse sua conta</p>

        <label htmlFor="usuario">Usuário</label>
        <input
          id="usuario"
          type="text"
          placeholder="Digite seu usuário"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
