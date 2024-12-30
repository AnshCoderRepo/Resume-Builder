import React from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Target } from 'lucide-react';
import { PersonalInfo } from '../../types/resume';

interface PersonalInfoSectionProps {
  data: PersonalInfo;
  onChange: (field: keyof PersonalInfo, value: string) => void;
}

export function PersonalInfoSection({ data, onChange }: PersonalInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
      <div className="space-y-3">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Full Name"
            value={data.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Address"
            value={data.address}
            onChange={(e) => onChange('address', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="tel"
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="relative">
          <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="url"
            placeholder="LinkedIn Profile URL"
            value={data.linkedin}
            onChange={(e) => onChange('linkedin', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="relative">
          <Target className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
          <textarea
            placeholder="Career Objective"
            value={data.objective}
            onChange={(e) => onChange('objective', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}