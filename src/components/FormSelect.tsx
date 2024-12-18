import React from 'react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ className = '', ...props }) => {
  return (
    <select
      {...props}
      className={`w-full px-4 py-3 bg-estrel-gray-dark border border-estrel-gray-dark/50 
        rounded-md text-estrel-light focus:outline-none focus:ring-2 focus:ring-estrel-accent 
        focus:border-transparent transition-colors ${className}`}
    />
  );
};

export default FormSelect;