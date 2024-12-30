import React, { useState } from 'react';
import { PersonalInfoSection } from './components/resume-builder/PersonalInfo';
import { ExperienceSection } from './components/resume-builder/Experience';
import { EducationSection } from './components/resume-builder/Education';
import { SkillsSection } from './components/resume-builder/Skills';
import { ProjectsSection } from './components/resume-builder/Projects';
import { CertificationsSection } from './components/resume-builder/Certifications';
import { AchievementsSection } from './components/resume-builder/Achievements';
import { ResumePreview } from './components/resume-builder/ResumePreview';
import { ExportButton } from './components/resume-builder/ExportButton';
import { ResumeData } from './types/resume';
import { FileText } from 'lucide-react';
import { exportAsPDF } from './utils/exportResume';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
    },
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
      languages: [],
    },
    projects: [],
    certifications: [],
    achievements: [],
  });

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const handleExport = async () => {
    await exportAsPDF('resume-preview');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Resume Builder</h1>
          </div>
          <ExportButton onExport={handleExport} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <PersonalInfoSection
              data={resumeData.personalInfo}
              onChange={handlePersonalInfoChange}
            />
            <SkillsSection
              skills={resumeData.skills}
              onChange={(field, values) => 
                setResumeData(prev => ({
                  ...prev,
                  skills: { ...prev.skills, [field]: values }
                }))
              }
            />
            <ExperienceSection
              experiences={resumeData.experience}
              onChange={(experiences) => setResumeData(prev => ({ ...prev, experience: experiences }))}
            />
            <EducationSection
              education={resumeData.education}
              onChange={(education) => setResumeData(prev => ({ ...prev, education }))}
            />
            <ProjectsSection
              projects={resumeData.projects}
              onChange={(projects) => setResumeData(prev => ({ ...prev, projects }))}
            />
            <CertificationsSection
              certifications={resumeData.certifications}
              onChange={(certifications) => setResumeData(prev => ({ ...prev, certifications }))}
            />
            <AchievementsSection
              achievements={resumeData.achievements}
              onChange={(achievements) => setResumeData(prev => ({ ...prev, achievements }))}
            />
          </div>
          
          <div className="lg:sticky lg:top-8">
            <div id="resume-preview">
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;