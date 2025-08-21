'use client';

import { useCallback } from 'react';

interface UseScrollToSectionOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export const useScrollToSection = (options: UseScrollToSectionOptions = {}) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - (options.offset || 80);
      window.scrollTo({ 
        top: offset, 
        behavior: options.behavior || 'smooth' 
      });
    }
  }, [options.offset, options.behavior]);

  return scrollToSection;
};
