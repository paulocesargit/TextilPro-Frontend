import { useState } from "react";
import styles from "./Vendas.module.css";

export function Vendas() {
  const [vendas, setVendas] = useState([
    {
      id: 1,
      cliente: "Maria Silva",
      produto: "Tecido de algodão",
      valor: 450,
      status: "Concluída",
    },
    {
      id: 2,
      cliente: "João Santos",
      produto: "Malha PV",
      valor: 320,
      status: "Pendente",
    },
  ]);

  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("Pendente");

  function cadastrarVenda(event) {
    event.preventDefault();

    const novaVenda = {
      id: vendas.length + 1,
      cliente: cliente,
      produto: produto,
      valor: Number(valor),
      status: status,
    };

    setVendas([...vendas, novaVenda]);

    setCliente("");
    setProduto("");
    setValor("");
    setStatus("Pendente");
  }

  const totalVendido = vendas
    .filter((venda) => venda.status === "Concluída")
    .reduce((total, venda) => total + venda.valor, 0);

  const vendasPendentes = vendas.filter(
    (venda) => venda.status === "Pendente",
  ).length;

  return (
    <div className={styles.vendas}>
      <div className={styles.vendasCabecalho}>
        <div>
          <h1>Controle de vendas</h1>
          <p>Consulte e registre as vendas da Agreste Têxtil.</p>
        </div>
      </div>

      <div className={styles.vendasResumo}>
        <div className={styles.vendasCard}>
          <p>Total vendido</p>
          <h2>
            {totalVendido.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
        </div>

        <div className={styles.vendasCard}>
          <p>Vendas realizadas</p>
          <h2>{vendas.length}</h2>
        </div>

        <div className={styles.vendasCard}>
          <p>Vendas pendentes</p>
          <h2>{vendasPendentes}</h2>
        </div>
      </div>

      <div className={styles.vendasConteudo}>
        <h2>Registrar nova venda</h2>

        <form onSubmit={cadastrarVenda}>
          <div className={styles.vendasCampo}>
            <label htmlFor="cliente">Nome do cliente</label>
            <input
              id="cliente"
              type="text"
              value={cliente}
              onChange={(event) => setCliente(event.target.value)}
              placeholder="Digite o nome do cliente"
              required
            />
          </div>

          <div className={styles.vendasCampo}>
            <label htmlFor="produto">Produto</label>
            <input
              id="produto"
              type="text"
              value={produto}
              onChange={(event) => setProduto(event.target.value)}
              placeholder="Digite o nome do produto"
              required
            />
          </div>

          <div className={styles.vendasCampo}>
            <label htmlFor="valor">Valor da venda (R$)</label>
            <input
              id="valor"
              type="number"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
              placeholder="Ex.: 150"
              min="0.01"
              step="0.01"
              required
            />
          </div>

          <div className={styles.vendasCampo}>
            <label htmlFor="status">Situação</label>
            <select
              id="status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="Pendente">Pendente</option>
              <option value="Concluída">Concluída</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </div>

          <button type="submit" className={styles.vendasBotao}>
            Cadastrar venda
          </button>
        </form>
      </div>

      <div className={styles.vendasConteudo}>
        <h2>Vendas cadastradas</h2>

        <div className={styles.vendasTabela}>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              {vendas.map((venda) => (
                <tr key={venda.id}>
                  <td>{venda.id}</td>
                  <td>{venda.cliente}</td>
                  <td>{venda.produto}</td>
                  <td>
                    {venda.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td>{venda.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
