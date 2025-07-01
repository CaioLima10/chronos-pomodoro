import type { ReactNode } from "react";
import styles from "./styles.module.css";
import { Container } from "../container";
interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <Container>
      <h1 className={styles.heading}>{children}</h1>;
    </Container>
  );
}
