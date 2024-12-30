export const parseSkills = (value: string): string[] => {
  return value
    .split(/[,\n]/) // Split by comma or newline
    .map(skill => skill.trim())
    .filter(Boolean)
    .filter((skill, index, self) => self.indexOf(skill) === index);
};

export const formatSkills = (skills: string[]): string => {
  return skills.join(', ');
};