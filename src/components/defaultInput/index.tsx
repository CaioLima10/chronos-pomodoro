type DefaultInputProps = {
  id: string;
  textLabel: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ id, textLabel, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input id={id} type={type} />
    </>
  );
}
