'use client';

import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { NAVIGATION_SECTIONS, WHY_HOOKS_DATA } from '@/constants/navigation';
import { GlassCard } from '@/components/common/GlassCard';
import { SectionTitle } from '@/components/common/SectionTitle';
import { InfoCard } from '@/components/common/InfoCard';
import { HooksTabs } from './HooksTabs';
import { FormActionDemo } from './FormActionDemo';
import { OptimizationDemos } from './OptimizationDemos';
import { AdvancedPatterns } from './AdvancedPatterns';

// 메인 앱 컴포넌트
export default function ReactHooksGuide() {
  const headerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('useState');
  
  // Custom Hook 사용
  const activeSection = useIntersectionObserver('section[id]');
  const scrollToSection = useScrollToSection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-200">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/50 border-b border-slate-800/50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg shadow-lg shadow-blue-500/25"></div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                React Hooks
              </span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 ml-2">
                v19
              </span>
            </div>
            <nav className="flex items-baseline space-x-1 sm:space-x-2 overflow-x-auto" role="navigation" aria-label="Main navigation">
              {NAVIGATION_SECTIONS.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/50 shadow-lg shadow-blue-500/25' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  aria-label={`Go to ${section.label} section`}
                >
                  <span className="hidden sm:inline mr-1" aria-hidden="true">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-[200px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HOOKS
            </div>
          </div>
          <div className="relative">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 backdrop-blur-sm">
                ✨ React 19 Latest Features
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                React Hook의 패러다임 전환
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Hook은 Class Component의 한계를 넘어, 더 직관적이고 functional한 방식으로
              UI를 구축하는 새로운 길을 열었습니다. React 19에서는 더욱 강력해졌습니다.
            </p>
          </div>
        </section>

        {/* Introduction for Beginners */}
        <section className="mb-20">
          <InfoCard>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-3xl mr-3">📚</span>
              초보자를 위한 React Hook 이해하기
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-blue-400">Hook이란?</strong> 프로그래밍에서 &apos;갈고리&apos;처럼 React의 기능을 &apos;걸어서&apos; 사용할 수 있게 해주는 특별한 함수입니다.
                마치 레고 블록처럼 필요한 기능을 조립해서 웹 애플리케이션을 만들 수 있게 해줍니다.
              </p>
              <p>
                <strong className="text-green-400">왜 필요한가요?</strong> 예전에는 복잡한 Class 문법을 사용해야 했지만,
                Hook을 사용하면 일반 함수처럼 간단하게 작성할 수 있습니다. 마치 자동차를 운전하는데
                복잡한 엔진 구조를 몰라도 되는 것처럼요.
              </p>
              <p>
                <strong className="text-purple-400">React 19의 혁신:</strong> 최신 버전에서는 코드가 자동으로 최적화되고,
                서버에서 더 빠르게 페이지를 만들 수 있으며, 폼 처리가 훨씬 쉬워졌습니다.
              </p>
            </div>
          </InfoCard>
        </section>

        {/* Why Hooks Section */}
        <section id="why-hooks" className="mb-20 scroll-mt-20">
          <SectionTitle 
            title="Why Hooks?" 
            subtitle="Class Component의 한계를 넘어서"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_HOOKS_DATA.map(item => (
              <GlassCard key={item.title} gradient={item.gradient}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3 flex-1">{item.desc}</p>
                <div className="pt-3 border-t border-white/10 mt-auto">
                  <p className="text-xs text-slate-400 italic">{item.detail}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Core Hooks Section */}
        <section id="core-hooks" className="mb-20 scroll-mt-20">
          <SectionTitle 
            title="Core Hooks" 
            subtitle="Interactive Hook API Guide"
          />
          <GlassCard className="p-6 md:p-8">
            <HooksTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </GlassCard>
        </section>

        {/* Rules Section */}
        <section id="rules" className="mb-20 scroll-mt-20">
          <SectionTitle
            title="Rules of Hooks"
            subtitle="React가 Hook을 올바르게 추적하기 위한 필수 규칙"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <GlassCard gradient="from-red-500 to-orange-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">☝️</span>
                <h3 className="text-xl font-bold text-white">Top Level에서만 호출</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-3 flex-1">
                Hook은 loop, condition, nested function 안에서 호출하면 안 됩니다. 
                React는 Hook의 호출 순서에 의존하여 state를 관리하기 때문입니다.
              </p>
              <div className="bg-slate-900/50 p-3 rounded-lg mb-3">
                <p className="text-xs text-slate-400">
                  <strong>쉽게 설명:</strong> Hook은 항상 같은 순서로 실행되어야 합니다. 
                  마치 요리 레시피처럼 순서를 바꾸면 안 됩니다.
                </p>
              </div>
              <div className="mt-auto p-3 bg-red-950/30 rounded-lg border border-red-500/20">
                <code className="text-xs text-red-300">❌ if (condition) useEffect(...)</code>
              </div>
            </GlassCard>
            
            <GlassCard gradient="from-green-500 to-emerald-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">✌️</span>
                <h3 className="text-xl font-bold text-white">React Function 내에서만</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-3 flex-1">
                Hook은 React functional component 또는 custom Hook 안에서만 호출할 수 있습니다. 
                일반 JavaScript function에서는 작동하지 않습니다.
              </p>
              <div className="bg-slate-900/50 p-3 rounded-lg mb-3">
                <p className="text-xs text-slate-400">
                  <strong>쉽게 설명:</strong> Hook은 React 전용 도구입니다. 
                  React 컴포넌트가 아닌 곳에서는 사용할 수 없습니다.
                </p>
              </div>
              <div className="mt-auto p-3 bg-green-950/30 rounded-lg border border-green-500/20">
                <code className="text-xs text-green-300">✅ function useCustomHook() {`{...}`}</code>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Optimization Section */}
        <section id="optimization" className="mb-20 scroll-mt-20">
          <SectionTitle
            title="Performance Optimization"
            subtitle="실제로 체감할 수 있는 성능 개선"
          />
          <OptimizationDemos />
        </section>

        {/* React 19 Features Section */}
        <section id="react19" className="mb-20 scroll-mt-20">
          <SectionTitle
            title="React 19 New Features"
            subtitle="2024년 최신 기능들"
          />
          <div className="space-y-6">
            <GlassCard>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🤖</span>
                <div>
                  <h3 className="text-xl font-bold text-white">React Compiler</h3>
                  <p className="text-sm text-slate-400">자동 최적화의 마법</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                React 19의 새로운 컴파일러는 useMemo, useCallback, React.memo를 자동으로 적용합니다.
                개발자가 수동으로 최적화하지 않아도 React가 알아서 처리합니다.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-xs text-green-400 mb-2">🎉 더 이상 필요없어진 코드:</p>
                <code className="text-xs text-slate-400">
                  {`// Before React 19
const memoized = useMemo(() => expensive(), [deps]);

// React 19 - Automatic!
const result = expensive(); // 자동으로 최적화됨`}
                </code>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎣</span>
                <div>
                  <h3 className="text-xl font-bold text-white">use() Hook</h3>
                  <p className="text-sm text-slate-400">Promise와 Context를 더 쉽게</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                새로운 use() Hook으로 Promise를 직접 읽을 수 있습니다.
                조건문 안에서도 사용 가능한 유일한 Hook입니다.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <code className="text-xs text-slate-400">
                  {`// Promise를 직접 사용
const data = use(fetchPromise);

// 조건부 사용 가능!
if (condition) {
  const context = use(MyContext);
}`}
                </code>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📝</span>
                <div>
                  <h3 className="text-xl font-bold text-white">Form Actions</h3>
                  <p className="text-sm text-slate-400">폼 처리가 놀랍도록 간단해짐</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                useFormStatus, useFormState, useOptimistic 등 새로운 Hook들로
                폼 처리가 훨씬 간단해졌습니다. 로딩, 에러, 낙관적 업데이트를 쉽게 구현할 수 있습니다.
              </p>
              <FormActionDemo />
            </GlassCard>

            <GlassCard>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🚀</span>
                <div>
                  <h3 className="text-xl font-bold text-white">Server Components</h3>
                  <p className="text-sm text-slate-400">서버에서 렌더링하는 새로운 패러다임</p>
                </div>
              </div>
              <p className="text-slate-300">
                컴포넌트를 서버에서 실행하여 번들 크기를 줄이고 초기 로딩을 빠르게 합니다.
                데이터베이스 직접 접근, 파일 시스템 읽기 등이 가능합니다.
              </p>
              <div className="mt-4 p-3 bg-blue-950/30 rounded-lg border border-blue-500/20">
                <p className="text-xs text-blue-300">
                  💡 서버 컴포넌트는 &apos;use server&apos; 지시문으로 표시되며,
                  클라이언트에 JavaScript를 전송하지 않습니다.
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Advanced Section */}
        <section id="advanced" className="scroll-mt-20">
          <SectionTitle 
            title="Advanced Patterns" 
            subtitle="useRef와 Custom Hook으로 더 강력한 패턴 구현"
          />
          <AdvancedPatterns />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-slate-800/50 backdrop-blur-xl bg-slate-900/30">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-600 rounded"></div>
            <span className="text-sm text-slate-400">React Hooks Interactive Guide - v19</span>
          </div>
          <p className="text-xs text-slate-500">
            이 가이드는 React 19 최신 기능을 포함한 종합적인 Hook 학습 자료입니다.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
