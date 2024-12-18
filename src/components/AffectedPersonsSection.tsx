import React from 'react';
import FormField from './FormField';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import { WhistleblowerFormData } from '../types/form';

interface AffectedPersonsSectionProps {
  formData: WhistleblowerFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const AffectedPersonsSection: React.FC<AffectedPersonsSectionProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <FormField label="Betroffene Personen">
        <FormTextArea
          name="affectedPersons"
          value={formData.affectedPersons}
          onChange={onChange}
          rows={3}
          placeholder="Namen oder Identifizierungsmerkmale der betroffenen Personen (falls bekannt)"
        />
      </FormField>

      <FormField label="Rolle der betroffenen Personen">
        <FormSelect
          name="affectedPersonsRole"
          value={formData.affectedPersonsRole}
          onChange={onChange}
        >
          <option value="">Rolle auswählen</option>
          <option value="employee">Mitarbeiter</option>
          <option value="manager">Führungskraft</option>
          <option value="customer">Kunde</option>
          <option value="supplier">Lieferant</option>
          <option value="public">Öffentlichkeit</option>
          <option value="other">Sonstige</option>
        </FormSelect>
      </FormField>
    </div>
  );
};

export default AffectedPersonsSection;