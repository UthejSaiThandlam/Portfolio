import React from 'react';
import { useRole } from '../context/RoleContext';
import { Hero } from '../components/Hero';
import { ImpactStrip } from '../components/ImpactStrip';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { InteractiveConsole } from '../components/InteractiveConsole';
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
            <AboutSection />
            <ExperienceSection />
            <ProductWorkSection />
            <ProjectsSection />
            <InteractiveConsole />
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
            <AboutSection />
            <ProductWorkSection />
            <ProjectsSection />
            <InteractiveConsole />
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
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <InteractiveConsole />
            <EducationSection />
            <ProductWorkSection />
            <HowIWork />
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
