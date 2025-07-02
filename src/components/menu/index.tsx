import styles from "./styles.module.css";

import { Container } from "../container";
import { LuHouse, LuSettings, LuSun } from "react-icons/lu";
import { RiHistoryFill } from "react-icons/ri";

export function Menu() {
  return (
    <Container>
      <nav className={styles.menu}>
        <a title="Inicio" className={styles.menuLink} href="#">
          <LuHouse size={40} />
        </a>
        <a title="Historico" className={styles.menuLink} href="#">
          <RiHistoryFill size={40} />
        </a>
        <a title="Configuração" className={styles.menuLink} href="#">
          <LuSettings size={40} />
        </a>
        <a title="Tema" className={styles.menuLink} href="#">
          <LuSun size={40} />
        </a>
      </nav>
    </Container>
  );
}
