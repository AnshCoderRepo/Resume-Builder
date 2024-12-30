import { useState } from 'react';
import { parseSkills } from '../utils/skillsHelpers';
import { SkillField } from '../types';

interface SkillInputs {
  technical: string;
  soft: string;
  languages: string;
}

interface Skills {
  technical: string[];
  soft: string[];
  languages: string[];
}

export function useSkills(
  skills: Skills,
  onChange: (field: SkillField, values: string[]) => void
) {
  const [inputs, setInputs] = useState<SkillInputs>({
    technical: '',
    soft: '',
    languages: ''
  });

  const handleSkillsChange = (field: SkillField, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const removeSkill = (field: SkillField, skillToRemove: string) => {
    onChange(
      field,
      skills[field].filter(skill => skill !== skillToRemove)
    );
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: SkillField
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newSkills = parseSkills(inputs[field]);
      const combinedSkills = [...new Set([...skills[field], ...newSkills])];
      onChange(field, combinedSkills);
      setInputs(prev => ({ ...prev, [field]: '' }));
    }
  };

  return {
    inputs,
    handleSkillsChange,
    handleKeyDown,
    removeSkill
  };
}