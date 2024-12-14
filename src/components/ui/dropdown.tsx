import clsx from "clsx";
import React from "react";

export type DropdownVariants = "outline" | "outlineAlt";
type Sizes = "sm" | "md" | "lg";

const variantMaps: Record<DropdownVariants, string> = {
  outline:
    "border border-secondary/20 focus:border-secondary/50 hover:bg-secondary/5 text-secondary",
  outlineAlt:
    "border border-primary/20 focus:border-primary/50 hover:bg-primary/5 text-primary",
};
const sizeMaps: Record<Sizes, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type DropdownProps = {
  variant?: DropdownVariants;
  size?: Sizes;
  options: Array<{ value: string; label: string }>;
  onClick?: () => void;
} & Omit<React.ComponentPropsWithoutRef<"select">, "ref" | "variant" | "size">;

const Dropdown = (props: DropdownProps) => {
  const {
    variant = "outline",
    size = "md",
    className,
    options,
    onClick,
    ...userProps
  } = props;

  const classes = clsx([variantMaps[variant], sizeMaps[size], className]);

  return (
    <select
      className={`rounded-md transition bg-transparent ${classes}`}
      onClick={onClick}
      {...userProps}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
