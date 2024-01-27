import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case "secondary":
        return "bg-gray-300 text-gray-800 hover:bg-gray-400";
      case "danger":
        return "bg-red-500 text-white hover:bg-red-600";
      default:
        return "bg-zinc-500 text-white hover:bg-zinc-600";
    }
  };

  const classes = `px-2 py-2 rounded-lg focus:outline-none ${getVariantClasses()}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
