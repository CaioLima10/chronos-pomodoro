import styles from "./styles.module.css";

export function Cycles() {
  return (
    <div className={styles.containerCycles}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        <div className={`${styles.cycleDot} ${[styles.workTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.workTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.workTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.shortBreakTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.shortLongTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.workTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.workTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.shortLongTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.shortBreakTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.workTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.shortLongTime]}`} />
        <div className={`${styles.cycleDot} ${[styles.shortLongTime]}`} />
        <div className={styles.cycleDot} />
      </div>
    </div>
  );
}
