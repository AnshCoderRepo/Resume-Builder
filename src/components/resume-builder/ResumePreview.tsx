import React from 'react';
import { ResumeData } from '../../types/resume';
import { ExternalLink } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const SectionDivider = () => (
    <div className="w-full h-px bg-gray-300 my-6"></div>
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-[21cm] mx-auto">
      {/* Personal Info */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{data.personalInfo.fullName}</h1>
        <div className="mt-2 text-gray-600 space-y-1">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.address}</p>
          {data.personalInfo.linkedin && (
            <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              LinkedIn <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <SectionDivider />

      {/* Objective */}
      {data.personalInfo.objective && (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Objective</h2>
            <p className="text-gray-700 leading-relaxed">{data.personalInfo.objective}</p>
          </div>
          <SectionDivider />
        </>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
            {data.skills.technical.length > 0 && (
              <div className="mb-2">
                <h3 className="font-medium text-gray-700">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.technical.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div className="mb-2">
                <h3 className="font-medium text-gray-700">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.soft.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-700">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.languages.map((language, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <SectionDivider />
        </>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-medium">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
          <SectionDivider />
        </>
      )}

      {/* Rest of the sections with SectionDivider... */}
      
      {/* Projects */}
      {data.projects.length > 0 && (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Projects</h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-1">{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <SectionDivider />
        </>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Certifications</h2>
            {data.certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-medium">{cert.name}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            ))}
          </div>
          <SectionDivider />
        </>
      )}

      {/* Achievements */}
      {data.achievements.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Achievements</h2>
          {data.achievements.map((achievement, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{achievement.title}</h3>
              <p className="text-sm text-gray-500">{achievement.date}</p>
              <p className="mt-1">{achievement.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}