import React from 'react';

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ title, children, className = '' }: Props) => (
  <div className={`p-4 rounded-lg shadow bg-white ${className}`}>
    {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
    <div>{children}</div>
  </div>
);

export default Card;