import clsx from "clsx";
import React from "react";

export type InputVariants = "destructive" | "outline" | "outlineAlt";
type Sizes = "sm" | "md" | "lg";

const variantMaps: Record<InputVariants, string> = {
  destructive:
    "border hover:bg-destructive/5 focus:bg-destructive/5 focus:border-destructive text-destructive",
  outline: "border hover:bg-primary/5 focus:bg-primary/5 focus:border-primary ",
  outlineAlt:
    "border hover:bg-secondary/5 focus:bg-secondary/5 focus:border-primary ",
};
const sizeMaps: Record<Sizes, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type InputProps = {
  variant?: InputVariants;
  size?: Sizes;
  onClick?: () => void;
} & Omit<React.ComponentPropsWithoutRef<"input">, "ref" | "variant" | "size">;

const Input = (props: InputProps) => {
  const {
    variant = "outline",
    size = "md",
    className,
    onClick,
    ...userProps
  } = props;

  const classes = clsx([variantMaps[variant], sizeMaps[size], className]);

  return (
    <input
      className={`bg-transparent outline-none rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed ${classes}`}
      onClick={onClick}
      {...userProps}
    />
  );
};

export default Input;
