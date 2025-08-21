'use client';

import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { NAVIGATION_SECTIONS, WHY_HOOKS_DATA } from '@/constants/navigation';
import { HooksTabs } from './HooksTabs';
import { FormActionDemo } from './FormActionDemo';
import { OptimizationDemos } from './OptimizationDemos';
import { AdvancedPatterns } from './AdvancedPatterns';

/**
 * React Hooks Interactive Guide - Main Component
 * 
 * Modern Tech Portfolio Theme 적용:
 * - Glassmorphism & Gradient backgrounds
 * - Interactive animations
 * - Professional yet creative design
 * - Mobile-first responsive approach
 */
export default function ReactHooksGuide() {
  const headerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('useState');

  // Custom Hook 사용으로 관심사 분리
  const activeSection = useIntersectionObserver('section[id]');
  const scrollToSection = useScrollToSection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-200">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/50 border-b border-slate-800/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 min-w-0 flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg shadow-lg shadow-blue-500/25 flex-shrink-0"></div>
              <div className="text-center min-w-0">
                <h1 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  React Hooks
                </h1>
                <p className="text-xs text-slate-400 uppercase tracking-wider leading-tight">Interactive Guide</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 ml-2 flex-shrink-0">
                v19
              </span>
            </div>
            <nav className="flex items-center space-x-3 lg:space-x-4 overflow-x-auto flex-1 justify-end ml-6" role="navigation" aria-label="Main navigation">
              {NAVIGATION_SECTIONS.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 lg:px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeSection === section.id 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/50 shadow-lg shadow-blue-500/25' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  aria-label={`Go to ${section.label} section`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-20 relative">
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
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-3xl mr-3">📚</span>
              초보자를 위한 React Hook 이해하기
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-blue-400">Hook이란?</strong> 프로그래밍에서 '갈고리'처럼 React의 기능을 '걸어서' 사용할 수 있게 해주는 특별한 함수입니다.
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
          </div>
        </section>

        {/* Why Hooks Section */}
        <section id="why-hooks" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🔍 Hook을 사용해야 하는 이유
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Class Component의 한계를 넘어서는 새로운 패러다임을 경험해보세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_HOOKS_DATA.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3 flex-1">{item.desc}</p>
                  <div className="pt-3 border-t border-white/10 mt-auto">
                    <p className="text-xs text-slate-400 italic">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Hooks Section */}
        <section id="core-hooks" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ⚡ Core Hooks
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Interactive Hook API Guide로 React의 핵심을 마스터하세요
            </p>
          </div>
          <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 md:p-8">
            <HooksTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              📋 Rules of Hooks
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              React가 Hook을 올바르게 추적하기 위한 필수 규칙들
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-slate-900/50 border border-red-500/30 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">☝️</span>
                  <h3 className="text-xl font-bold text-white">Top Level에서만 호출</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Hook은 loop, condition, nested function 안에서 호출하면 안 됩니다.
                  React는 Hook의 호출 순서에 의존하여 state를 관리하기 때문입니다.
                </p>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-red-500/20">
                  <p className="text-xs text-red-300 font-mono">❌ if (condition) useEffect(...)</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-slate-900/50 border border-green-500/30 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">✌️</span>
                  <h3 className="text-xl font-bold text-white">React Function 내에서만</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Hook은 React functional component 또는 custom Hook 안에서만 호출할 수 있습니다.
                  일반 JavaScript function에서는 작동하지 않습니다.
                </p>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-green-500/20">
                  <p className="text-xs text-green-300 font-mono">✅ function useCustomHook() {`{...}`}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Optimization */}
        <section id="optimization" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🚀 Performance Optimization
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              실제로 체감할 수 있는 성능 개선을 경험해보세요
            </p>
          </div>
          
          {/* Metrics Explanation */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">📊 성능 메트릭이 왜 중요한가요?</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-blue-400">Render Count (렌더링 횟수):</strong>
                <p className="text-slate-400 mt-1">화면을 다시 그리는 횟수입니다. 적을수록 좋습니다. 
                마치 그림을 그릴 때 전체를 지우고 다시 그리는 것보다 필요한 부분만 수정하는 것이 효율적인 것과 같습니다.</p>
              </div>
              <div>
                <strong className="text-green-400">Execution Time (실행 시간):</strong>
                <p className="text-slate-400 mt-1">계산에 걸리는 시간입니다. 복잡한 계산 결과를 저장해두면 
                매번 다시 계산하지 않아도 됩니다. 계산기 결과를 메모해두는 것과 같습니다.</p>
              </div>
              <div>
                <strong className="text-purple-400">UI Responsiveness (반응성):</strong>
                <p className="text-slate-400 mt-1">사용자 입력에 얼마나 빠르게 반응하는지를 나타냅니다. 
                타이핑할 때 글자가 바로 나타나야 사용하기 편합니다.</p>
              </div>
              <div>
                <strong className="text-orange-400">Memory Usage (메모리 사용):</strong>
                <p className="text-slate-400 mt-1">컴퓨터 메모리를 얼마나 효율적으로 사용하는지를 나타냅니다. 
                사용하지 않는 것은 정리해야 메모리가 부족하지 않습니다.</p>
              </div>
            </div>
          </div>

          <OptimizationDemos />
        </section>

        {/* React 19 Features Section */}
        <section id="react19" className="mb-20 scroll-mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-3xl mr-3">✨</span>
              React 19의 혁신적인 새로운 Hook들
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              React 19에서는 개발자 경험을 크게 향상시키는 새로운 Hook들과 기능들이 추가되었습니다.
              특히 <strong className="text-blue-400">Actions</strong>, <strong className="text-green-400">Form Actions</strong>, 
              <strong className="text-purple-400">use() Hook</strong> 등이 핵심입니다.
            </p>
            
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🚀</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Actions & useTransition</h3>
                    <p className="text-sm text-slate-400">비동기 상태 관리의 혁신</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  React 19의 <strong className="text-blue-400">Actions</strong>는 async 함수를 transitions에서 사용할 수 있게 해줍니다.
                  pending 상태, 에러 처리, 낙관적 업데이트를 자동으로 관리합니다.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-xs text-green-400 mb-2">🎉 React 19의 새로운 방식:</p>
                  <code className="text-xs text-slate-400 font-mono block">
                    {`// Before React 19
const [isPending, setIsPending] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async () => {
  setIsPending(true);
  try {
    await updateName(name);
    redirect("/path");
  } catch (err) {
    setError(err);
  } finally {
    setIsPending(false);
  }
};

// React 19 - Actions!
const [isPending, startTransition] = useTransition();

const handleSubmit = () => {
  startTransition(async () => {
    const error = await updateName(name);
    if (error) return error;
    redirect("/path");
  });
};`}
                  </code>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">📝</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Form Actions & useActionState</h3>
                    <p className="text-sm text-slate-400">폼 처리가 놀랍도록 간단해짐</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  <strong className="text-green-400">useActionState</strong>와 <strong className="text-blue-400">Form Actions</strong>로 
                  폼 처리가 훨씬 간단해졌습니다. 자동 폼 리셋, 에러 처리, pending 상태를 자동으로 관리합니다.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-xs text-green-400 mb-2">🎉 React 19의 Form Actions:</p>
                  <code className="text-xs text-slate-400 font-mono block">
                    {`// React 19 - Form Actions
const [error, submitAction, isPending] = useActionState(
  async (previousState, formData) => {
    const error = await updateName(formData.get("name"));
    if (error) return error;
    redirect("/path");
    return null;
  },
  null,
);

return (
  <form action={submitAction}>
    <input type="text" name="name" />
    <button type="submit" disabled={isPending}>
      Update
    </button>
    {error && <p>{error}</p>}
  </form>
);`}
                  </code>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🎣</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">use() Hook</h3>
                    <p className="text-sm text-slate-400">Promise와 Context를 더 쉽게</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  새로운 <strong className="text-purple-400">use() Hook</strong>으로 Promise를 직접 읽을 수 있습니다. 
                  조건문 안에서도 사용 가능한 유일한 Hook입니다.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <code className="text-xs text-slate-400 font-mono block">
                    {`// Promise를 직접 사용
const data = use(fetchPromise);

// 조건부 사용 가능!
if (condition) {
  const context = use(MyContext);
}

// React 19에서는 더 안전하고 예측 가능한 방식으로 작동`}
                  </code>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🔧</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">useFormStatus & useOptimistic</h3>
                    <p className="text-sm text-slate-400">폼 상태 관리의 새로운 패러다임</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  <strong className="text-orange-400">useFormStatus</strong>로 폼의 pending 상태를 쉽게 관리하고,
                  <strong className="text-pink-400">useOptimistic</strong>으로 즉시 UI 업데이트를 구현할 수 있습니다.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-xs text-green-400 mb-2">🎉 새로운 Form Hooks:</p>
                  <code className="text-xs text-slate-400 font-mono block">
                    {`// useFormStatus로 폼 상태 관리
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

// useOptimistic으로 즉시 UI 업데이트
const [optimisticMessages, addOptimisticMessage] = useOptimistic(
  messages,
  (state, newMessage) => [...state, { ...newMessage, sending: true }]
);`}
                  </code>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🚀</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Server Components & React Compiler</h3>
                    <p className="text-sm text-slate-400">자동 최적화의 마법</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  React 19의 새로운 컴파일러는 <strong className="text-green-400">useMemo</strong>, 
                  <strong className="text-blue-400">useCallback</strong>, <strong className="text-purple-400">React.memo</strong>를 
                  자동으로 적용합니다. 개발자가 수동으로 최적화하지 않아도 React가 알아서 처리합니다.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-xs text-green-400 mb-2">🎉 더 이상 필요없어진 코드:</p>
                  <code className="text-xs text-slate-400 font-mono block">
                    {`// Before React 19
const memoized = useMemo(() => expensive(), [deps]);
const callback = useCallback(() => handler(), [deps]);
const MemoizedComponent = React.memo(Component);

// React 19 - Automatic!
const result = expensive(); // 자동으로 최적화됨
const handler = () => {}; // 자동으로 메모이제이션됨
const Component = () => {}; // 자동으로 메모이제이션됨`}
                  </code>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">💎</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Resource Preloading APIs</h3>
                    <p className="text-sm text-slate-400">성능 최적화의 새로운 차원</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  <strong className="text-yellow-400">prefetchDNS</strong>, <strong className="text-green-400">preconnect</strong>, 
                  <strong className="text-blue-400">preload</strong>, <strong className="text-purple-400">preinit</strong> 등 
                  새로운 리소스 프리로딩 API들로 페이지 성능을 크게 향상시킬 수 있습니다.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-xs text-green-400 mb-2">🎉 새로운 Resource APIs:</p>
                  <code className="text-xs text-slate-400 font-mono block">
                    {`import { prefetchDNS, preconnect, preload, preinit } from 'react-dom'

function MyComponent() {
  preinit('https://.../script.js', {as: 'script'}) // 즉시 로드 및 실행
  preload('https://.../font.woff', { as: 'font' }) // 폰트 프리로드
  preload('https://.../style.css', { as: 'style' }) // 스타일시트 프리로드
  prefetchDNS('https://...') // DNS 프리페치
  preconnect('https://...') // 연결 프리페치
  
  return <div>...</div>
}`}
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-950/30 rounded-lg border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">🚀 React 19 업그레이드 가이드</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong>1단계:</strong> React 19.1.0으로 업그레이드</p>
                <p><strong>2단계:</strong> 새로운 Actions 패턴 적용</p>
                <p><strong>3단계:</strong> Form Actions로 폼 처리 현대화</p>
                <p><strong>4단계:</strong> React Compiler의 자동 최적화 활용</p>
                <p><strong>5단계:</strong> Resource Preloading APIs로 성능 향상</p>
              </div>
              <p className="text-xs text-blue-300 mt-3">
                💡 React 19는 이전 버전과의 호환성을 유지하면서 점진적으로 새로운 기능을 도입할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Patterns */}
        <section id="advanced" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              💎 Advanced Patterns
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              useRef와 Custom Hook으로 더 강력한 패턴 구현
            </p>
          </div>
          <AdvancedPatterns />
        </section>

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
      </main>

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
