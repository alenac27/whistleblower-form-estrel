import React from 'react';
import { AlertTriangle } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-estrel-gray-dark border-l-4 border-estrel-accent p-6 mb-8 rounded-r">
      <div className="flex items-start">
        <AlertTriangle className="w-6 h-6 text-estrel-accent mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-estrel-light font-medium mb-2">Rechtlicher Hinweis</h3>
          <p className="text-estrel-light/80">
            Dieses Formular ist durch das Hinweisgeberschutzgesetz geschützt. Ihre Identität wird 
            vertraulich behandelt, es sei denn, Sie entscheiden sich für eine Offenlegung. 
            Alle Übermittlungen werden verschlüsselt und sicher gespeichert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;