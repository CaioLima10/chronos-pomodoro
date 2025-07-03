import styles from "./styles.module.css";

type DefualtButtonProps = {
  icon: React.ReactNode;
  type: string;
  bgColor?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefualtButton({
  icon,
  type,
  bgColor = "green",
  ...rest
}: DefualtButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[bgColor]}`}
      type={type}
      {...rest}
    >
      {icon}
    </button>
  );
}
