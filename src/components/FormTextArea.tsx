import React from 'react';

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-3 bg-estrel-gray-dark border border-estrel-gray-dark/50 
        rounded-md text-estrel-light focus:outline-none focus:ring-2 focus:ring-estrel-accent 
        focus:border-transparent transition-colors ${className}`}
    />
  );
};

export default FormTextArea;