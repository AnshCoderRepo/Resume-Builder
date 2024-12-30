import React from 'react';
import { FolderGit2, Plus, X } from 'lucide-react';
import { Project } from '../../types/resume';

interface ProjectsProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

export function ProjectsSection({ projects, onChange }: ProjectsProps) {
  const addProject = () => {
    onChange([
      ...projects,
      { title: '', description: '', link: '', technologies: [] }
    ]);
  };

  const removeProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof Project, value: string | string[]) => {
    onChange(
      projects.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      )
    );
  };

  const handleTechnologies = (index: number, value: string) => {
    const technologies = value.split(',').map(tech => tech.trim()).filter(Boolean);
    updateProject(index, 'technologies', technologies);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-white p-4 rounded-lg shadow-sm">
            <button
              onClick={() => removeProject(index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => updateProject(index, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              
              <input
                type="url"
                placeholder="Project Link"
                value={project.link}
                onChange={(e) => updateProject(index, 'link', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />

              <textarea
                placeholder="Project Description"
                value={project.description}
                onChange={(e) => updateProject(index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
              />

              <input
                type="text"
                placeholder="Technologies (comma-separated)"
                value={project.technologies.join(', ')}
                onChange={(e) => handleTechnologies(index, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}