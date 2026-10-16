import { useEffect, useState } from "react";
import { Palette, Sun, Moon, RotateCcw } from "lucide-react";
import styles from "./Configuracoes.module.css";

export function Configuracoes() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "claro";
  });

  useEffect(() => {
    localStorage.setItem("tema", tema);

    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  function restaurarPadrao() {
    setTema("claro");
  }

  return (
    <main className={styles.pagina}>
      <header className={styles.cabecalho}>
        <h1>Configurações</h1>
        <p>Personalize a aparência do Agreste Têxtil.</p>
      </header>

      <section className={styles.secao}>
        <div className={styles.tituloSecao}>
          <Palette size={22} />

          <div>
            <h2>Aparência</h2>
            <p>Personalize as cores do sistema.</p>
          </div>
        </div>

        <div className={styles.opcao}>
          <div>
            <h3>Tema do sistema</h3>
            <p>Escolha entre o tema claro e o escuro.</p>
          </div>

          <div className={styles.botoesTema}>
            <button
              type="button"
              className={tema === "claro" ? styles.selecionado : ""}
              onClick={() => setTema("claro")}
            >
              <Sun size={18} />
              Claro
            </button>

            <button
              type="button"
              className={tema === "escuro" ? styles.selecionado : ""}
              onClick={() => setTema("escuro")}
            >
              <Moon size={18} />
              Escuro
            </button>
          </div>
        </div>
      </section>

      <section className={styles.secao}>
        <div className={styles.tituloSecao}>
          <RotateCcw size={22} />

          <div>
            <h2>Preferências</h2>
            <p>Gerencie suas configurações.</p>
          </div>
        </div>

        <div className={styles.opcao}>
          <div>
            <h3>Restaurar configurações</h3>
            <p>Volte ao tema claro padrão do sistema.</p>
          </div>

          <button
            type="button"
            className={styles.botaoRestaurar}
            onClick={restaurarPadrao}
          >
            <RotateCcw size={16} />
            Restaurar padrão
          </button>
        </div>
      </section>
    </main>
  );
}
