import clsx from "clsx";
import React from "react";

export type CheckBoxVariants = "outline" | "outlineAlt";
type Sizes = "sm" | "md" | "lg";

const variantMaps: Record<CheckBoxVariants, string> = {
  outline: "border hover:bg-primary/5 focus:bg-primary/5 focus:border-primary ",
  outlineAlt:
    "border hover:bg-secondary/5 focus:bg-secondary/5 focus:border-primary ",
};
const sizeMaps: Record<Sizes, string> = {
  sm: "w-4 h-4 text-sm",
  md: "w-6 h-6 text-base",
  lg: "w-8 h-8 text-lg",
};

type CheckBoxProps = {
  variant?: CheckBoxVariants;
  size?: Sizes;
  onClick?: () => void;
} & Omit<React.ComponentPropsWithoutRef<"input">, "ref" | "variant" | "size">;

const CheckBox = (props: CheckBoxProps) => {
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
      className={`bg-transparent outline-none rounded-md transition disabled:opacity-50 ${classes}`}
      type="checkbox"
      onClick={onClick}
      {...userProps}
    />
  );
};

export default CheckBox;
