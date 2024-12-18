import React from 'react';
import { Shield } from 'lucide-react';

const FormHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <Shield className="w-20 h-20 mx-auto text-estrel-accent mb-6" />
      <h1 className="font-display text-4xl text-estrel-light mb-4">
        Vertrauliche Hinweisgebermeldung
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-estrel-light/80 text-lg">
          Ihr Vertrauen ist uns wichtig. Unser Hinweisgebersystem ermöglicht es Ihnen, 
          Bedenken sicher und vertraulich zu melden.
        </p>
      </div>
    </div>
  );
};

export default FormHeader;