import { ReactNode } from 'react';

const Button = ({ variant, color, onClick, children }: ButtonProps) => {
  const colorClass: Record<ColorType, string> = {
    primary: 'text-navy bg-navy',
    secondary: 'text-gray bg-gray',
    success: 'text-green bg-green',
    error: 'text-red bg-red',
  };

  const variantClass: Record<VariantType, string> = {
    outlined: 'rounded bg-transparent hover:bg-neutral-200',
    contained: 'text-white border-b-zinc-400 border-r-zinc-400 hover:bg-neutral-500',
  };

  return (
    <button
      className={`border-2 px-3 py-2 font-accent shadow-md ${colorClass[color]} ${variantClass[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type VariantType = 'contained' | 'outlined';
type ColorType = 'primary' | 'secondary' | 'success' | 'error';

interface ButtonProps {
  variant: VariantType;
  color: ColorType;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default Button;
