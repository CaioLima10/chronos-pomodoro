import styles from "./styles.module.css";

import { Container } from "../container";
import { LuHouse, LuSettings, LuSun } from "react-icons/lu";
import { RiHistoryFill } from "react-icons/ri";

export function Menu() {
  return (
    <Container>
      <nav className={styles.menu}>
        <a
          title="Inicio"
          aria-label="Ir para o Inicio"
          className={styles.menuLink}
          href="#"
        >
          <LuHouse size={40} />
        </a>
        <a
          title="Historico"
          aria-label="Ir para o Historico"
          className={styles.menuLink}
          href="#"
        >
          <RiHistoryFill size={40} />
        </a>
        <a
          title="Configurações"
          aria-label="Ir para as Configurações"
          className={styles.menuLink}
          href="#"
        >
          <LuSettings size={40} />
        </a>
        <a
          title="Tema"
          aria-label="Escolha o tema do seu Pomodoro"
          className={styles.menuLink}
          href="#"
        >
          <LuSun size={40} />
        </a>
      </nav>
    </Container>
  );
}
