'use client';

import { useState, useEffect } from 'react';

/**
 * Enhanced Intersection Observer Hook for Section Navigation
 * 
 * 개선된 기능:
 * - 더 정확한 섹션 감지
 * - 스크롤 위치 기반 활성 섹션 결정
 * - 헤더 높이 고려한 오프셋 계산
 */
export function useIntersectionObserver(selector: string) {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = document.querySelectorAll(selector);
    if (sections.length === 0) return;

    // 헤더 높이 고려한 오프셋 (스크롤 시 정확한 위치 계산)
    const headerHeight = 80; // 헤더 높이
    const offset = headerHeight + 20; // 추가 여백

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`, // 상단에서 헤더 높이만큼 오프셋
        threshold: 0.1, // 10% 이상 보일 때 감지
      }
    );

    // 스크롤 위치 기반 추가 감지
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // 현재 스크롤 위치에 가장 가까운 섹션 찾기
      let currentSection = 'hero';
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const distance = Math.abs(sectionTop - scrollPosition);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section.getAttribute('id') || 'hero';
        }
      });

      setActiveSection(currentSection);
    };

    // 초기 활성 섹션 설정
    handleScroll();

    // 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer 등록
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selector]);

  return activeSection;
}
