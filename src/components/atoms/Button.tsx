import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'default' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'icon';
  className?: string;
};

export const Button = ({ variant = 'primary', size = 'medium', children, className = '', ...props }: Props) => {
  const base = 'rounded font-medium';
  const variants =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : variant === 'secondary'
      ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      : variant === 'default'
      ? 'bg-slate-900 text-white hover:bg-slate-800'
      : 'bg-transparent text-gray-800 hover:bg-gray-100';

  const sizes =
    size === 'small'
      ? 'px-2 py-1 text-sm'
      : size === 'medium'
      ? 'px-4 py-2 text-base'
      : size === 'large'
      ? 'px-6 py-3 text-lg'
      : 'p-2';

  return (
    <button className={`${base} ${variants} ${sizes} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

export const editorMeta = {
  displayName: "Button",
  props: {
    variant: { type: "select", options: ["primary", "secondary", "default", "ghost"] },
    size: { type: "select", options: ["small", "medium", "large", "icon"] },
    children: { type: "string" },
  },
};