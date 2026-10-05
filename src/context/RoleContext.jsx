import React, { createContext, useContext, useState, useEffect } from 'react';

export const ROLE_LENSES = {
  engineer: {
    id: 'engineer',
    label: 'Engineer',
    subtitle: 'Specialized in Python backend, PostgreSQL optimization, and multi-tenant SaaS architecture.'
  },
  product: {
    id: 'product',
    label: 'Product',
    subtitle: 'Product-minded builder who ships to real users with clear requirements & telemetry.'
  },
  analyst: {
    id: 'analyst',
    label: 'Analyst',
    subtitle: 'Data-driven builder turning operational database records into business clarity.'
  }
};

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [activeLens, setActiveLens] = useState(() => {
    try {
      const saved = localStorage.getItem('thandlam_portfolio_lens');
      return saved && ROLE_LENSES[saved] ? saved : 'engineer';
    } catch {
      return 'engineer';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('thandlam_portfolio_lens', activeLens);
    } catch (e) {
      console.warn('LocalStorage unavailable:', e);
    }
  }, [activeLens]);

  const currentLensData = ROLE_LENSES[activeLens] || ROLE_LENSES.engineer;

  return (
    <RoleContext.Provider value={{ activeLens, setActiveLens, currentLensData, ROLE_LENSES }}>
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
