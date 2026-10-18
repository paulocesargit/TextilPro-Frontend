import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Loading } from "../../components/Loanding/Loading.jsx";
import { LoadingF } from "../../components/LoandingFormulario/LoadingF.jsx";
import styles from "./Login.module.css";
import logo from "../../assets/RenderTextilpro.png";

export function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [carregandoCadastro, setCarregandoCadastro] = useState(false);
  const navigate = useNavigate();

  function entrar(event) {
    event.preventDefault();

    if (!usuario || !senha) {
      toast.warning("Preencha o usuário e a senha.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
      (item) => item.usuario === usuario && item.senha === senha,
    );

    if (usuarioEncontrado) {
      localStorage.setItem("usuario", usuarioEncontrado.usuario);
      localStorage.setItem("genero", usuarioEncontrado.genero);
      const temaSalvo =
        localStorage.getItem(`tema_${usuarioEncontrado.usuario}`) || "claro";

      document.documentElement.setAttribute("data-tema", temaSalvo);

      setCarregando(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      toast.error("Usuário ou senha incorretos.");

      setUsuario("");
      setSenha("");
    }
  }

  function irParaCadastro() {
    setCarregandoCadastro(true);

    setTimeout(() => {
      navigate("/Cadastro");
    }, 2000);
  }

  /*
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
*/

  if (carregando) {
    return <Loading mensagem="Preparando seu ambiente..." />;
  }

  return (
    <div className={styles.login}>
      <form className={styles.formulario} onSubmit={entrar}>
        <img src={logo} alt="imagem agreste textil" />

        {carregandoCadastro ? (
          <div className={styles.carregamentoCadastro}>
            <LoadingF mensagem="Preparando cadastro..." />
          </div>
        ) : (
          <>
            <p>Um sistema profissional para negócios têxteis.</p>
            <p>Acesse sua conta</p>

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
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              maxLength={5}
              onChange={(event) => setSenha(event.target.value)}
            />

            <button type="submit">Entrar</button>
            <div className={styles.criarConta}>
              {" "}
              <span>Não tem uma conta?</span>{" "}
              <button type="button" onClick={irParaCadastro}>
                {" "}
                Criar conta{" "}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
