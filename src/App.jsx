import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeModalLens, setResumeModalLens] = useState('engineer');

  const handleOpenResume = (lens = 'engineer') => {
    setResumeModalLens(lens);
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <RoleProvider>
      <Router>
        <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
          <Navbar onOpenResumeModal={handleOpenResume} />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenResumeModal={handleOpenResume} />} />
              <Route path="/projects/:slug" element={<CaseStudyPage />} />
              <Route path="*" element={<HomePage onOpenResumeModal={handleOpenResume} />} />
            </Routes>
          </div>

          <Footer />

          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={handleCloseResume}
            initialLens={resumeModalLens}
          />
        </div>
      </Router>
    </RoleProvider>
  );
}

export default App;
