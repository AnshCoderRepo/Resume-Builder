import React from 'react';
import { Wrench, Heart, Languages } from 'lucide-react';
import { useSkills } from '../../hooks/useSkills';
import { SkillInput } from './SkillInput';
import { SkillList } from './SkillList';
import { SkillField } from '../../types';

interface SkillsSectionProps {
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
  };
  onChange: (field: SkillField, values: string[]) => void;
}

export function SkillsSection({ skills, onChange }: SkillsSectionProps) {
  const { inputs, handleSkillsChange, handleKeyDown, removeSkill } = useSkills(skills, onChange);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
      <div className="space-y-4">
        <div>
          <SkillInput
            label="Technical Skills"
            icon={Wrench}
            value={inputs.technical}
            placeholder="Type skill and press Enter or use commas"
            onKeyDown={(e) => handleKeyDown(e, 'technical')}
            onChange={(value) => handleSkillsChange('technical', value)}
          />
          <SkillList
            skills={skills.technical}
            variant="technical"
            onRemove={(skill) => removeSkill('technical', skill)}
          />
        </div>

        <div>
          <SkillInput
            label="Soft Skills"
            icon={Heart}
            value={inputs.soft}
            placeholder="Type skill and press Enter or use commas"
            onKeyDown={(e) => handleKeyDown(e, 'soft')}
            onChange={(value) => handleSkillsChange('soft', value)}
          />
          <SkillList
            skills={skills.soft}
            variant="soft"
            onRemove={(skill) => removeSkill('soft', skill)}
          />
        </div>

        <div>
          <SkillInput
            label="Languages"
            icon={Languages}
            value={inputs.languages}
            placeholder="Type language and press Enter or use commas"
            onKeyDown={(e) => handleKeyDown(e, 'languages')}
            onChange={(value) => handleSkillsChange('languages', value)}
          />
          <SkillList
            skills={skills.languages}
            variant="language"
            onRemove={(skill) => removeSkill('languages', skill)}
          />
        </div>
      </div>
    </div>
  );
}