import React, { useState } from 'react';
import { Lock, Send } from 'lucide-react';
import { WhistleblowerFormData } from '../types/form';
import { incidentTypes } from '../utils/formUtils';
import FormHeader from './FormHeader';
import LegalNotice from './LegalNotice';
import FormField from './FormField';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import ContactSection from './ContactSection';
import SuccessMessage from './SuccessMessage';
import AffectedPersonsSection from './AffectedPersonsSection';

const WhistleblowerForm: React.FC = () => {
  const [formData, setFormData] = useState<WhistleblowerFormData>({
    incidentType: '',
    description: '',
    date: '',
    location: '',
    witnesses: '',
    affectedPersons: '',
    affectedPersonsRole: '',
    evidenceDescription: '',
    contactPreference: 'anonymous',
    contactInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FormHeader />
        <LegalNotice />

        <form onSubmit={handleSubmit} className="space-y-8 bg-estrel-gray-dark p-8 rounded-lg shadow-xl">
          <FormField label="Art des Vorfalls" required>
            <FormSelect
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              required
            >
              <option value="">Vorfallstyp auswählen</option>
              {incidentTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </FormSelect>
          </FormField>

          <FormField label="Detaillierte Beschreibung" required>
            <FormTextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Bitte geben Sie spezifische Details zum Vorfall an..."
            />
          </FormField>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Datum des Vorfalls" required>
              <FormInput
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField label="Ort" required>
              <FormInput
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Wo ist dies geschehen?"
              />
            </FormField>
          </div>

          <AffectedPersonsSection formData={formData} onChange={handleChange} />

          <FormField label="Zeugen (falls vorhanden)">
            <FormTextArea
              name="witnesses"
              value={formData.witnesses}
              onChange={handleChange}
              rows={2}
              placeholder="Listen Sie eventuelle Zeugen des Vorfalls auf (optional)"
            />
          </FormField>

          <FormField label="Beschreibung der Beweise">
            <FormTextArea
              name="evidenceDescription"
              value={formData.evidenceDescription}
              onChange={handleChange}
              rows={3}
              placeholder="Beschreiben Sie vorhandene Beweise (Dokumente, E-Mails, Fotos, etc.)"
            />
          </FormField>

          <ContactSection formData={formData} onChange={handleChange} />

          <div className="flex items-center justify-between pt-8 border-t border-estrel-gray-light/10">
            <p className="text-sm text-estrel-light/70 flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Ihre Meldung ist geschützt und verschlüsselt
            </p>
            <button
              type="submit"
              className="flex items-center px-8 py-3 bg-estrel-accent text-estrel-dark font-medium 
                rounded-md hover:bg-estrel-accent/90 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-estrel-accent transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Meldung einreichen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhistleblowerForm;