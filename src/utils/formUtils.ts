export const generateReferenceNumber = (): string => {
  return Math.random().toString(36).substring(2, 15).toUpperCase();
};

export const incidentTypes = [
  { value: 'fraud', label: 'Finanzbetrug' },
  { value: 'corruption', label: 'Korruption' },
  { value: 'harassment', label: 'Belästigung' },
  { value: 'discrimination', label: 'Diskriminierung' },
  { value: 'safety', label: 'Sicherheitsverstöße' },
  { value: 'environmental', label: 'Umweltverstöße' },
  { value: 'other', label: 'Sonstiges' },
];