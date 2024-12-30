import React from 'react';
import { Trophy, Plus, X } from 'lucide-react';
import { Achievement } from '../../types/resume';

interface AchievementsProps {
  achievements: Achievement[];
  onChange: (achievements: Achievement[]) => void;
}

export function AchievementsSection({ achievements, onChange }: AchievementsProps) {
  const addAchievement = () => {
    onChange([...achievements, { title: '', description: '', date: '' }]);
  };

  const removeAchievement = (index: number) => {
    onChange(achievements.filter((_, i) => i !== index));
  };

  const updateAchievement = (index: number, field: keyof Achievement, value: string) => {
    onChange(
      achievements.map((achievement, i) =>
        i === index ? { ...achievement, [field]: value } : achievement
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Achievements</h2>
        <button
          onClick={addAchievement}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Achievement
        </button>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="relative bg-white p-4 rounded-lg shadow-sm">
            <button
              onClick={() => removeAchievement(index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Achievement Title"
                value={achievement.title}
                onChange={(e) => updateAchievement(index, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Achievement Description"
                value={achievement.description}
                onChange={(e) => updateAchievement(index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
              />
              <input
                type="text"
                placeholder="Date"
                value={achievement.date}
                onChange={(e) => updateAchievement(index, 'date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}