import React from 'react';
import { SkillVariant } from '../../types';

interface SkillTagProps {
  skill: string;
  variant: SkillVariant;
  onRemove: () => void;
}

const variantStyles: Record<SkillVariant, string> = {
  technical: 'bg-blue-50 text-blue-700',
  soft: 'bg-green-50 text-green-700',
  language: 'bg-purple-50 text-purple-700'
};

export function SkillTag({ skill, variant, onRemove }: SkillTagProps) {
  return (
    <span className={`group px-2 py-1 ${variantStyles[variant]} rounded-md text-sm flex items-center gap-1`}>
      {skill}
      <button
        onClick={onRemove}
        className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
        aria-label={`Remove ${skill}`}
      >
        ×
      </button>
    </span>
  );
}