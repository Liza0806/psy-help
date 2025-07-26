import cls from "./Button.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={cls.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
