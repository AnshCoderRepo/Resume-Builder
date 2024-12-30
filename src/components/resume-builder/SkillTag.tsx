import React from 'react';

interface SkillTagProps {
  skill: string;
  variant: 'technical' | 'soft' | 'language';
  onRemove: () => void;
}

export function SkillTag({ skill, variant, onRemove }: SkillTagProps) {
  const variantStyles = {
    technical: 'bg-blue-50 text-blue-700',
    soft: 'bg-green-50 text-green-700',
    language: 'bg-purple-50 text-purple-700'
  };

  return (
    <span className={`group px-2 py-1 ${variantStyles[variant]} rounded-md text-sm flex items-center gap-1`}>
      {skill}
      <button
        onClick={onRemove}
        className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
      >
        ×
      </button>
    </span>
  );
}