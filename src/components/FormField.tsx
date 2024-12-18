import React from 'react';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, children, required = false }) => {
  return (
    <div className="mb-6">
      <label className="block text-estrel-light/90 text-sm font-medium mb-2">
        {label}
        {required && <span className="text-estrel-accent ml-1">*</span>}
      </label>
      {children}
    </div>
  );
};

export default FormField;