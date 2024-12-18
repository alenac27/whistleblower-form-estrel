import React from 'react';
import { Shield } from 'lucide-react';
import { generateReferenceNumber } from '../utils/formUtils';

const SuccessMessage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-estrel-gray-dark p-8 rounded-lg shadow-xl text-center">
        <Shield className="w-20 h-20 mx-auto text-estrel-accent mb-6" />
        <h2 className="text-3xl font-display text-estrel-light mb-4">
          Meldung erfolgreich übermittelt
        </h2>
        <p className="text-estrel-light/80 mb-8">
          Ihre Meldung wurde sicher übermittelt. Falls Sie Kontaktinformationen angegeben haben,
          werden Sie über Ihren bevorzugten Kommunikationsweg kontaktiert. Bitte bewahren Sie
          diese Referenznummer für Ihre Unterlagen auf.
        </p>
        <div className="inline-block bg-estrel-dark px-6 py-4 rounded-md">
          <p className="font-mono text-xl text-estrel-accent">
            {generateReferenceNumber()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;