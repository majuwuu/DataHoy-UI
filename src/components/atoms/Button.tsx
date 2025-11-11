import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Button = ({ variant = 'primary', children, className = '', ...props }: Props) => {
  const base = 'px-4 py-2 rounded font-medium';
  const variants =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  return (
    <button className={`${base} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;