'use client';

import { useCallback } from 'react';

/**
 * Enhanced Scroll to Section Hook
 * 
 * 개선된 기능:
 * - 헤더 높이 고려한 정확한 스크롤 위치
 * - 부드러운 스크롤 애니메이션
 * - 에러 처리 및 안전성 향상
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined') return;

    try {
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Section with id "${sectionId}" not found`);
        return;
      }

      // 헤더 높이 고려한 오프셋 계산
      const headerHeight = 80; // 헤더 높이
      const additionalOffset = 20; // 추가 여백
      const totalOffset = headerHeight + additionalOffset;

      // 요소의 위치 계산
      const elementTop = element.offsetTop;
      const scrollPosition = elementTop - totalOffset;

      // 부드러운 스크롤 애니메이션
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });

      // URL 해시 업데이트 (선택사항)
      if (history.pushState) {
        history.pushState(null, '', `#${sectionId}`);
      }

    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  }, []);

  return scrollToSection;
}
