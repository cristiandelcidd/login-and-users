import { LoginFormFieldProps } from "../interfaces";

const LoginFormField = ({
  onChange,
  type,
  name,
  value,
}: LoginFormFieldProps) => {
  const labelToCamelCase = name.charAt(0).toUpperCase() + name.substring(1);

  return (
    <>
      <label htmlFor={name}>{labelToCamelCase}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default LoginFormField;
