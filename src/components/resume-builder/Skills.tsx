import React, { useState } from 'react';
import { Wrench, Heart, Languages } from 'lucide-react';
import { SkillTag } from './SkillTag';
import { parseSkills } from '../../utils/skillsHelpers';

interface SkillsSectionProps {
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
  };
  onChange: (field: 'technical' | 'soft' | 'languages', values: string[]) => void;
}

export function SkillsSection({ skills, onChange }: SkillsSectionProps) {
  const [inputs, setInputs] = useState({
    technical: '',
    soft: '',
    languages: ''
  });

  const handleSkillsChange = (field: 'technical' | 'soft' | 'languages', value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const removeSkill = (field: 'technical' | 'soft' | 'languages', skillToRemove: string) => {
    onChange(
      field,
      skills[field].filter(skill => skill !== skillToRemove)
    );
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: 'technical' | 'soft' | 'languages'
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newSkills = parseSkills(inputs[field]);
      const combinedSkills = [...new Set([...skills[field], ...newSkills])];
      onChange(field, combinedSkills);
      setInputs(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Technical Skills
          </label>
          <div className="relative">
            <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Type skill and press Enter or use commas"
              value={inputs.technical}
              onKeyDown={(e) => handleKeyDown(e, 'technical')}
              onChange={(e) => handleSkillsChange('technical', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {skills.technical.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <SkillTag
                  key={index}
                  skill={skill}
                  variant="technical"
                  onRemove={() => removeSkill('technical', skill)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Soft Skills
          </label>
          <div className="relative">
            <Heart className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Type skill and press Enter or use commas"
              value={inputs.soft}
              onKeyDown={(e) => handleKeyDown(e, 'soft')}
              onChange={(e) => handleSkillsChange('soft', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {skills.soft.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <SkillTag
                  key={index}
                  skill={skill}
                  variant="soft"
                  onRemove={() => removeSkill('soft', skill)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Languages
          </label>
          <div className="relative">
            <Languages className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Type language and press Enter or use commas"
              value={inputs.languages}
              onKeyDown={(e) => handleKeyDown(e, 'languages')}
              onChange={(e) => handleSkillsChange('languages', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {skills.languages.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <SkillTag
                  key={index}
                  skill={skill}
                  variant="language"
                  onRemove={() => removeSkill('languages', skill)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}