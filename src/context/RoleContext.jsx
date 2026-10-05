import React, { createContext, useContext, useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [activeLens, setActiveLens] = useState(() => {
    const saved = localStorage.getItem('thandlam_portfolio_lens');
    return saved && personalInfo.lenses[saved] ? saved : 'engineer';
  });

  useEffect(() => {
    localStorage.setItem('thandlam_portfolio_lens', activeLens);
  }, [activeLens]);

  const currentLensData = personalInfo.lenses[activeLens];

  return (
    <RoleContext.Provider value={{ activeLens, setActiveLens, currentLensData }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
