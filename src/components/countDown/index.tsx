import styles from "./styles.module.css";

import { Container } from "../container";
export function CountDown() {
  return (
    <Container>
      <h1 className={styles.count}>00:00</h1>
    </Container>
  );
}
