import { ShoppingCart, ClipboardList, Package, Users } from "lucide-react";

import styles from "./Dashboard.module.css";

const indicadores = [
  {
    titulo: "Vendas do dia",
    valor: "R$ 12.480,00",
    icone: ShoppingCart,
  },
  {
    titulo: "Pedidos em andamento",
    valor: "8",
    icone: ClipboardList,
  },
  {
    titulo: "Produtos com estoque baixo",
    valor: "5 itens",
    icone: Package,
  },
  //{
  // titulo: "Comissões do mês",
  //  valor: "R$ 3.250,00",
  //   icone: Users,
  //  },
];

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.cabecalho}>
        <div>
          <h1>Dashboard</h1>
          <p>Confira o resumo da sua confecção.</p>
        </div>
      </header>

      <section className={styles.indicadores}>
        {indicadores.map((item) => {
          const Icone = item.icone;

          return (
            <article className={styles.card} key={item.titulo}>
              <div className={styles.cardTopo}>
                <span>{item.titulo}</span>

                <div className={styles.icone}>
                  <Icone size={21} />
                </div>
              </div>

              <h2>{item.valor}</h2>
            </article>
          );
        })}
      </section>

      <section className={styles.pedidos}>
        <h2>Pedidos por etapa</h2>

        <div className={styles.etapas}>
          <article className={styles.etapa}>
            <span>Pedido Recebido</span>
            <strong>12</strong>
          </article>

          <article className={styles.etapa}>
            <span>Em Produção</span>
            <strong>8</strong>
          </article>

          <article className={styles.etapa}>
            <span>Em Transporte</span>
            <strong>5</strong>
          </article>
        </div>
      </section>
    </div>
  );
}
