import React from 'react';
import FormField from './FormField';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { WhistleblowerFormData } from '../types/form';

interface ContactSectionProps {
  formData: WhistleblowerFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ formData, onChange }) => {
  return (
    <div className="border-t border-estrel-gray-light/10 pt-8">
      <h3 className="text-xl font-display text-estrel-light mb-6">Kontaktpräferenzen</h3>
      <div className="space-y-6">
        <FormField label="Wie möchten Sie kontaktiert werden?">
          <FormSelect
            name="contactPreference"
            value={formData.contactPreference}
            onChange={onChange}
          >
            <option value="anonymous">Anonym bleiben</option>
            <option value="email">E-Mail</option>
            <option value="phone">Telefon</option>
            <option value="mail">Post</option>
          </FormSelect>
        </FormField>

        {formData.contactPreference !== 'anonymous' && (
          <FormField label="Kontaktinformationen">
            <FormInput
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={onChange}
              placeholder="Geben Sie Ihre Kontaktinformationen ein"
            />
          </FormField>
        )}
      </div>
    </div>
  );
};

export default ContactSection;