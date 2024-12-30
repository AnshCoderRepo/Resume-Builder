export type SkillVariant = 'technical' | 'soft' | 'language';
export type SkillField = 'technical' | 'soft' | 'languages';

export interface Skills {
  technical: string[];
  soft: string[];
  languages: string[];
}