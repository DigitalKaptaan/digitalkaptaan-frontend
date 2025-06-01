import React from "react";
import styles from "../styles/components/CustomButton.module.css";

type Props = {
  title: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning"
    | "withoutBorder";
  disabled?: boolean;
  className?: string;
};

const CustomButton = ({
  title,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: Props) => {
  const buttonClass = [
    styles.button,
    styles[variant],
    disabled ? styles.disabled : "",
    className,
  ].join(" ");

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {title}
    </button>
  );
};

export default CustomButton;
