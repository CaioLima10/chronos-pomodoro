import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  textLabel: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  textLabel,
  type,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
