import React from 'react';
import { Hero } from '../components/Hero';
import { ImpactStrip } from '../components/ImpactStrip';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { InteractiveConsole } from '../components/InteractiveConsole';
import { SkillsSection } from '../components/SkillsSection';
import { AboutSection } from '../components/AboutSection';
import { EducationSection } from '../components/EducationSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = ({ onOpenResumeModal }) => {
  return (
    <main className="bg-[#090D15] min-h-screen text-[#F3F5FA] selection:bg-[#FF705C]/25 selection:text-[#FF705C]">
      {/* 01. Hero (Identity, System Signal Path, Portrait, Cover Trigger) */}
      <Hero onOpenResumeModal={onOpenResumeModal} />

      {/* 02. Proof Strip (3 Credible Production Metrics) */}
      <ImpactStrip />

      {/* 03. Featured Work (3 Equal Column Cards) */}
      <ProjectsSection />

      {/* 04. Experience (Z.APPS Production SaaS Ownership) */}
      <ExperienceSection />

      {/* 05. Signature Architecture Explorer (Interactive Pipeline Tabs) */}
      <InteractiveConsole />

      {/* 06. Skills & Competencies (Evidence-Backed Labels) */}
      <SkillsSection />

      {/* 07. About & Two-Stage Trajectory */}
      <AboutSection />

      {/* 08. Education & Academic Timeline */}
      <EducationSection />

      {/* 09. Contact & Coordinates */}
      <ContactSection onOpenResumeModal={onOpenResumeModal} />
    </main>
  );
};
