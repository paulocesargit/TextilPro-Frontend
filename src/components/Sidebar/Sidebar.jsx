import { NavLink } from "react-router";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  ClipboardList,
  Users,
  ChartColumn,
  Settings,
  LogOut,
} from "lucide-react";
import logo from "../../assets/RenderTextilpro.png";

import styles from "./Sidebar.module.css";

const menuItems = [
  {
    nome: "Início",
    caminho: "/dashboard",
    icone: LayoutDashboard,
  },
  {
    nome: "Vendas",
    caminho: "/vendas",
    icone: ShoppingCart,
  },
  {
    nome: "Estoque",
    caminho: "/estoque",
    icone: Package,
  },
  {
    nome: "Pedidos",
    caminho: "/pedidos",
    icone: ClipboardList,
  },
  //  {
  //    nome: "Comissões",
  //   caminho: "/comissoes",
  //  icone: Users,
  // },
  //{
  //  nome: "Relatórios",
  //   caminho: "/relatorios",
  //    icone: ChartColumn,
  // },
  {
    nome: "Configurações",
    caminho: "/configuracoes",
    icone: Settings,
  },
];

export function Sidebar() {
  function sair() {
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="Agreste Têxtil" />
      </div>

      <nav className={styles.menu}>
        {menuItems.map((item) => {
          const Icone = item.icone;

          return (
            <NavLink
              key={item.caminho}
              to={item.caminho}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.ativo}` : styles.link
              }
            >
              <Icone size={19} />
              <span>{item.nome}</span>
            </NavLink>
          );
        })}
      </nav>

      <button className={styles.botaoSair} onClick={sair}>
        <LogOut size={19} />
        <span>Sair</span>
      </button>
    </aside>
  );
}
