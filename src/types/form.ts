export interface WhistleblowerFormData {
  incidentType: string;
  description: string;
  date: string;
  location: string;
  witnesses: string;
  affectedPersons: string;
  affectedPersonsRole: string;
  evidenceDescription: string;
  contactPreference: string;
  contactInfo: string;
}

export type FormField = keyof WhistleblowerFormData;