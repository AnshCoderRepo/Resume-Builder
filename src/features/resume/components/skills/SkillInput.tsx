import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillInputProps {
  label: string;
  icon: LucideIcon;
  value: string;
  placeholder: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (value: string) => void;
}

export function SkillInput({
  label,
  icon: Icon,
  value,
  placeholder,
  onKeyDown,
  onChange,
}: SkillInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onKeyDown={onKeyDown}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}