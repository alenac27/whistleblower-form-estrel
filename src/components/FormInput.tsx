import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 bg-estrel-gray-dark border border-estrel-gray-dark/50 
        rounded-md text-estrel-light focus:outline-none focus:ring-2 focus:ring-estrel-accent 
        focus:border-transparent transition-colors ${className}`}
    />
  );
};

export default FormInput;