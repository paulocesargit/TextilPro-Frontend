import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Cadastro.module.css";
import logo from "../../assets/RenderTextilpro.png";
import { toast } from "sonner";

export function Cadastro() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [genero, setGenero] = useState("");

  const navigate = useNavigate();

  function cadastrar(event) {
    event.preventDefault();

    if (!usuario || !senha || !confirmarSenha) {
      toast.warning("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      toast.error("As senhas não coincidem.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste = usuarios.find((item) => item.usuario === usuario);

    if (usuarioExiste) {
      toast.warning("Esse usuário já está cadastrado.");
      return;
    }

    usuarios.push({
      usuario: usuario,
      senha: senha,
      genero: genero,
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    toast.success("Cadastro realizado com sucesso!");

    navigate("/login");
  }

  /* function cadastrar(event) {
    event.preventDefault();

    if (!usuario || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    navigate("/");
  }*/

  return (
    <div className={styles.cadastro}>
      <form className={styles.formulario} onSubmit={cadastrar}>
        <img src={logo} alt="TextilPro Têxtil" />

        <p>Crie sua conta</p>

        <label htmlFor="usuario">Usuário</label>
        <input
          id="usuario"
          type="text"
          placeholder="Digite seu usuário"
          value={usuario}
          onChange={(event) =>
            setUsuario(event.target.value.replace(/[^a-zA-ZÀ-ÿ]/g, ""))
          }
        />

        <label htmlFor="senha">Senha</label>
        <div className={styles.campoSenha}>
          <input
            id="senha"
            type={mostrarSenha ? "text" : "password"}
            placeholder="Crie uma senha"
            value={senha}
            maxLength={5}
            onChange={(event) => setSenha(event.target.value)}
          />

          <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
          >
            {mostrarSenha ? "🙈" : "👁"}
          </button>
        </div>

        <label htmlFor="confirmarSenha">Confirmar senha</label>
        <div className={styles.campoSenha}>
          <input
            id="confirmarSenha"
            type={mostrarConfirmarSenha ? "text" : "password"}
            placeholder="Digite a senha novamente"
            value={confirmarSenha}
            maxLength={5}
            onChange={(event) => setConfirmarSenha(event.target.value)}
          />

          <button
            type="button"
            onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
            aria-label={
              mostrarConfirmarSenha ? "Ocultar senha" : "Mostrar senha"
            }
          >
            {mostrarConfirmarSenha ? "🙈" : "👁"}
          </button>
        </div>
        <div className={styles.campogenero}>
          <label htmlFor="genero">Gênero</label>
          <div className={styles.selectSet}>
            <select
              id="genero"
              name="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
        </div>
        <button type="submit">Criar conta</button>

        <div className={styles.voltarLogin}>
          <span>Já tem uma conta?</span>
          <button type="button" onClick={() => navigate("/login")}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
