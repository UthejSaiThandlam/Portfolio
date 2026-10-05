import React from 'react';
import { useRole } from '../context/RoleContext';
import { Hero } from '../components/Hero';
import { ImpactStrip } from '../components/ImpactStrip';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProductWorkSection } from '../components/ProductWorkSection';
import { SkillsSection } from '../components/SkillsSection';
import { HowIWork } from '../components/HowIWork';
import { EducationSection } from '../components/EducationSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = ({ onOpenResumeModal }) => {
  const { activeLens } = useRole();

  const renderOrderedSections = () => {
    switch (activeLens) {
      case 'product':
        return (
          <>
            <Hero onOpenResumeModal={onOpenResumeModal} />
            <ImpactStrip />
            {/* Product lens emphasizes ownership and PM artifacts first */}
            <ExperienceSection />
            <ProductWorkSection />
            <ProjectsSection />
            <HowIWork />
            <SkillsSection />
            <EducationSection />
            <ContactSection onOpenResumeModal={onOpenResumeModal} />
          </>
        );

      case 'analyst':
        return (
          <>
            <Hero onOpenResumeModal={onOpenResumeModal} />
            <ImpactStrip />
            {/* Analyst lens emphasizes dashboards and data modeling first */}
            <ProductWorkSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <HowIWork />
            <EducationSection />
            <ContactSection onOpenResumeModal={onOpenResumeModal} />
          </>
        );

      case 'engineer':
      default:
        return (
          <>
            <Hero onOpenResumeModal={onOpenResumeModal} />
            <ImpactStrip />
            {/* Standard engineer flow: Projects -> Experience -> Product -> Skills */}
            <ProjectsSection />
            <ExperienceSection />
            <ProductWorkSection />
            <SkillsSection />
            <HowIWork />
            <EducationSection />
            <ContactSection onOpenResumeModal={onOpenResumeModal} />
          </>
        );
    }
  };

  return (
    <main>
      {renderOrderedSections()}
    </main>
  );
};
