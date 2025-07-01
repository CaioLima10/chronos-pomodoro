import styles from "./styles.module.css";

import { Container } from "../container";
import { LuTimer } from "react-icons/lu";

export function Logo() {
  return (
    <Container>
      <div className={styles.logo}>
        <a title="Logo" className={styles.logoLink} href="#">
          <LuTimer size={64} />
          <h1>Chronos</h1>
        </a>
      </div>
    </Container>
  );
}
