import React from 'react';
import { Award, Plus, X } from 'lucide-react';
import { Certification } from '../../types/resume';

interface CertificationsProps {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

export function CertificationsSection({ certifications, onChange }: CertificationsProps) {
  const addCertification = () => {
    onChange([...certifications, { name: '', issuer: '', date: '' }]);
  };

  const removeCertification = (index: number) => {
    onChange(certifications.filter((_, i) => i !== index));
  };

  const updateCertification = (index: number, field: keyof Certification, value: string) => {
    onChange(
      certifications.map((cert, i) =>
        i === index ? { ...cert, [field]: value } : cert
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
        <button
          onClick={addCertification}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Certification
        </button>
      </div>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="relative bg-white p-4 rounded-lg shadow-sm">
            <button
              onClick={() => removeCertification(index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Certification Name"
                value={cert.name}
                onChange={(e) => updateCertification(index, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                value={cert.issuer}
                onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Date"
                value={cert.date}
                onChange={(e) => updateCertification(index, 'date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}