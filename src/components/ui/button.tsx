import React from "react";

type Variants = "primary" | "secondary" | "destructive" | "outline";
type Sizes = "sm" | "md" | "lg";

const variantMaps: Record<Variants, string> = {
  primary: "bg-primary hover:bg-primary/85 text-white",
  secondary: "bg-secondary hover:bg-secondary/85 text-primary",
  destructive: "bg-destructive hover:bg-destructive/85 text-white",
  outline:
    "border border-secondary hover:bg-secondary hover:text-primary text-primary",
};
const sizeMaps: Record<Sizes, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type ButtonProps = {
  variant?: Variants;
  size?: Sizes;
  children: React.ReactNode;
  onClick?: () => void;
  [key: string]: unknown;
};

const Button = (props: ButtonProps) => {
  const { variant = "primary", size = "md", children, onClick } = props;
  return (
    <button
      className={`${variantMaps[variant]} ${sizeMaps[size]} rounded-md transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
