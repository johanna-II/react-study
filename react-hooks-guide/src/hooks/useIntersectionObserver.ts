import { useState, useEffect } from 'react';

interface UseIntersectionObserverOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useIntersectionObserver = (
  selector: string,
  options: UseIntersectionObserverOptions = {}
) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: options.rootMargin || '-80px 0px 0px 0px',
        threshold: options.threshold || 0.3 
      }
    );

    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [selector, options.rootMargin, options.threshold]);

  return activeSection;
};
