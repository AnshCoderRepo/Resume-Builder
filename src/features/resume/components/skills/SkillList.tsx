import React from 'react';
import { SkillTag } from './SkillTag';
import { SkillVariant } from '../../types';

interface SkillListProps {
  skills: string[];
  variant: SkillVariant;
  onRemove: (skill: string) => void;
}

export function SkillList({ skills, variant, onRemove }: SkillListProps) {
  if (skills.length === 0) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillTag
          key={`${skill}-${index}`}
          skill={skill}
          variant={variant}
          onRemove={() => onRemove(skill)}
        />
      ))}
    </div>
  );
}