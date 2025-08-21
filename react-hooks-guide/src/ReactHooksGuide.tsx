import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useScrollToSection } from './hooks/useScrollToSection';
import { NAVIGATION_SECTIONS, WHY_HOOKS_DATA } from './constants/navigation';
import { GlassCard as CommonGlassCard } from './components/common/GlassCard';
import { SectionTitle as CommonSectionTitle } from './components/common/SectionTitle';
import { InfoCard as CommonInfoCard } from './components/common/InfoCard';

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
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${activeSection === section.id
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
          <CommonInfoCard>
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
          </CommonInfoCard>
        </section>

        {/* Why Hooks Section */}
        <section id="why-hooks" className="mb-20 scroll-mt-20">
                  <CommonSectionTitle 
          title="Why Hooks?" 
          subtitle="Class Component의 한계를 넘어서"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_HOOKS_DATA.map(item => (
            <CommonGlassCard key={item.title} gradient={item.gradient}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3 flex-1">{item.desc}</p>
              <div className="pt-3 border-t border-white/10 mt-auto">
                <p className="text-xs text-slate-400 italic">{item.detail}</p>
              </div>
            </CommonGlassCard>
          ))}
        </div>
        </section>

        {/* Core Hooks Section */}
        <section id="core-hooks" className="mb-20 scroll-mt-20">
                  <CommonSectionTitle 
          title="Core Hooks" 
          subtitle="Interactive Hook API Guide"
        />
                <CommonGlassCard className="p-6 md:p-8">
          <HooksTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </CommonGlassCard>
        </section>

        {/* Rules Section */}
        <section id="rules" className="mb-20 scroll-mt-20">
          <CommonSectionTitle
            title="Rules of Hooks"
            subtitle="React가 Hook을 올바르게 추적하기 위한 필수 규칙"
          />
                    <div className="grid sm:grid-cols-2 gap-6">
            <CommonGlassCard gradient="from-red-500 to-orange-500">
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
            </CommonGlassCard>
            
            <CommonGlassCard gradient="from-green-500 to-emerald-500">
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
            </CommonGlassCard>
          </div>
        </section>

        {/* Optimization Section with Detailed Metrics */}
        <section id="optimization" className="mb-20 scroll-mt-20">
          <CommonSectionTitle
            title="Performance Optimization"
            subtitle="실제로 체감할 수 있는 성능 개선"
          />

          {/* Metrics Explanation */}
          <CommonInfoCard className="mb-8">
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
          </CommonInfoCard>

          <OptimizationDemos />
        </section>

        {/* React 19 Features Section */}
        <section id="react19" className="mb-20 scroll-mt-20">
          <CommonSectionTitle
            title="React 19 New Features"
            subtitle="2024년 최신 기능들"
          />
          <div className="space-y-6">
            <CommonGlassCard>
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
            </CommonGlassCard>

            <CommonGlassCard>
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
            </CommonGlassCard>

            <CommonGlassCard>
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
            </CommonGlassCard>

            <CommonGlassCard>
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
                  💡 서버 컴포넌트는 'use server' 지시문으로 표시되며,
                  클라이언트에 JavaScript를 전송하지 않습니다.
                </p>
              </div>
            </CommonGlassCard>
          </div>
        </section>

        {/* Advanced Section */}
        <section id="advanced" className="scroll-mt-20">
                  <CommonSectionTitle 
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

      <style>{`
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





// Hooks 탭 컴포넌트 (더 상세한 설명 추가)
function HooksTabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [theme, setTheme] = useState('light');
  const [reducerCount, setReducerCount] = useState(0);
  const originalTitle = useRef(document.title);

  useEffect(() => {
    const title = originalTitle.current;
    if (activeTab === 'useEffect' && inputValue) {
      document.title = `Input: ${inputValue}`;
    }
    return () => {
      if (activeTab === 'useEffect') {
        document.title = title;
      }
    };
  }, [inputValue, activeTab]);

  const hooksData = {
    useState: {
      title: 'useState',
      emoji: '📦',
      desc: 'State management의 기본 Hook. Component 내에서 dynamic data를 관리합니다.',
      detail: '일반 변수와 달리 값이 변경되면 화면이 자동으로 업데이트됩니다. 마치 Excel의 셀처럼 값이 바뀌면 연관된 부분이 자동으로 재계산됩니다.',
      code: `const [count, setCount] = useState(0);

// Direct update
setCount(count + 1);

// Functional update (safer)
setCount(prevCount => prevCount + 1);

// Object state
const [user, setUser] = useState({ name: '', age: 0 });`,
      demo: (
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur border border-white/10 rounded-xl p-6 mt-6 text-center">
          <p className="text-sm text-slate-400 mb-2">버튼을 클릭하면 숫자가 증가합니다</p>
          <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {count}
          </div>
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Increment
          </button>
          <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
            <p className="text-xs text-slate-400">
              <strong>초보자 팁:</strong> useState는 "기억하는 변수"입니다.
              일반 변수는 화면이 다시 그려질 때 초기화되지만, state는 값을 기억합니다.
            </p>
          </div>
        </div>
      )
    },
    useEffect: {
      title: 'useEffect',
      emoji: '⚡',
      desc: 'Side effect를 처리하는 Hook. Network request, DOM manipulation, subscription 등을 처리합니다.',
      detail: '컴포넌트가 화면에 나타날 때, 업데이트될 때, 사라질 때 실행할 작업을 정의합니다. 마치 이벤트 알림을 설정하는 것과 같습니다.',
      code: `useEffect(() => {
  // Runs after render
  console.log('Component rendered!');
  
  // Cleanup function
  return () => {
    console.log('Cleaning up!');
  };
}, [dependency]); // Re-run when dependency changes

// Common patterns:
useEffect(() => {}, []); // Run once on mount
useEffect(() => {}); // Run after every render`,
      demo: (
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur border border-white/10 rounded-xl p-6 mt-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Type below to change page title:
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-xl text-white placeholder-slate-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all"
            placeholder="Type here..."
          />
          <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
            <p className="text-xs text-slate-400">
              <strong>초보자 팁:</strong> useEffect는 "부수 효과"를 관리합니다.
              화면 렌더링 외에 추가로 해야 할 작업(API 호출, 타이머 설정 등)을 여기서 처리합니다.
            </p>
          </div>
        </div>
      )
    },
    useContext: {
      title: 'useContext',
      emoji: '🌐',
      desc: 'Prop drilling 해결. Component tree 전체에서 global data를 직접 공유합니다.',
      detail: '부모에서 자식으로 props를 계속 전달하는 대신, Context를 통해 직접 데이터에 접근할 수 있습니다. 마치 와이파이처럼 무선으로 데이터를 전달합니다.',
      code: `const ThemeContext = createContext('light');

// Provide data
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>

// Consume data anywhere in the tree
const theme = useContext(ThemeContext);

// With default value
const SettingsContext = createContext({
  language: 'en',
  theme: 'dark'
});`,
      demo: (
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur border border-white/10 rounded-xl p-6 mt-6">
          <p className="text-center mb-4 text-sm text-slate-300">Switch theme</p>
          <div className={`p-6 rounded-xl text-center font-bold text-lg transition-all duration-500 ${theme === 'dark'
              ? 'bg-slate-900 text-white shadow-xl shadow-purple-500/20'
              : 'bg-white/90 text-slate-900 shadow-xl shadow-blue-500/20'
            }`}>
            {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => setTheme('light')}
              className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
            >
              Light
            </button>
            <button
              onClick={() => setTheme('dark')}
              className="px-4 py-2 bg-purple-500/20 backdrop-blur border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all"
            >
              Dark
            </button>
          </div>
          <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
            <p className="text-xs text-slate-400">
              <strong>초보자 팁:</strong> Context는 "전역 변수"처럼 어디서든 접근 가능한 데이터입니다.
              테마, 언어 설정, 로그인 정보 등을 공유할 때 유용합니다.
            </p>
          </div>
        </div>
      )
    },
    useReducer: {
      title: 'useReducer',
      emoji: '🎛️',
      desc: 'Complex state logic 관리. useState의 강력한 대안으로 Redux pattern을 component 내에서 구현합니다.',
      detail: '여러 연관된 state를 하나로 관리하고, 복잡한 상태 변경 로직을 체계적으로 처리합니다. 은행 계좌처럼 입금, 출금 등 다양한 거래를 관리하는 것과 비슷합니다.',
      code: `const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { 
        count: state.count + 1,
        history: [...state.history, '+1']
      };
    case 'decrement':
      return { 
        count: state.count - 1,
        history: [...state.history, '-1']
      };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);`,
      demo: (
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur border border-white/10 rounded-xl p-6 mt-6 text-center">
          <p className="text-sm text-slate-400 mb-2">복잡한 상태 관리 예제</p>
          <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            {reducerCount}
          </div>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setReducerCount(reducerCount - 1)}
              className="w-12 h-12 bg-red-500/20 backdrop-blur border border-red-500/30 text-red-300 rounded-xl hover:bg-red-500/30 transition-all hover:scale-110"
            >
              −
            </button>
            <button
              onClick={() => setReducerCount(0)}
              className="px-4 py-2 bg-slate-500/20 backdrop-blur border border-slate-500/30 text-slate-300 rounded-xl hover:bg-slate-500/30 transition-all"
            >
              Reset
            </button>
            <button
              onClick={() => setReducerCount(reducerCount + 1)}
              className="w-12 h-12 bg-green-500/20 backdrop-blur border border-green-500/30 text-green-300 rounded-xl hover:bg-green-500/30 transition-all hover:scale-110"
            >
              +
            </button>
          </div>
          <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
            <p className="text-xs text-slate-400">
              <strong>초보자 팁:</strong> useReducer는 useState보다 복잡하지만,
              여러 상태가 서로 연관되어 있을 때 더 체계적으로 관리할 수 있습니다.
            </p>
          </div>
        </div>
      )
    }
  };

  const currentHook = hooksData[activeTab as keyof typeof hooksData];

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {Object.keys(hooksData).map(hook => (
            <button
              key={hook}
              onClick={() => setActiveTab(hook)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activeTab === hook
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
            >
              <span className="mr-2">{hooksData[hook as keyof typeof hooksData].emoji}</span>
              {hook}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 flex items-center">
          <span className="text-3xl mr-3">{currentHook.emoji}</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {currentHook.title}
          </span>
        </h3>
        <p className="text-slate-300 mb-2">{currentHook.desc}</p>
        <p className="text-sm text-slate-400 mb-6 italic">{currentHook.detail}</p>
        <div className="bg-slate-950/50 backdrop-blur text-slate-300 p-4 rounded-xl font-mono text-sm border border-white/5">
          <pre className="overflow-x-auto">{currentHook.code}</pre>
        </div>
        {currentHook.demo}
      </div>
    </>
  );
}

// Form Action Demo (React 19)
function FormActionDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [optimisticName, setOptimisticName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="bg-slate-900/50 p-4 rounded-lg mt-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter your name (optimistic update)"
          onChange={(e) => setOptimisticName(e.target.value)}
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 text-sm"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm disabled:opacity-50 transition-all"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Form'}
        </button>
      </form>
      {optimisticName && (
        <p className="mt-3 text-sm text-green-400">
          👋 Hello, {optimisticName}! (Optimistic Update)
        </p>
      )}
      <div className="mt-4 p-3 bg-slate-950/50 rounded-lg">
        <p className="text-xs text-slate-400">
          <strong>React 19 특징:</strong> useOptimistic으로 서버 응답을 기다리지 않고
          즉시 UI를 업데이트할 수 있습니다. 사용자 경험이 훨씬 빨라집니다.
        </p>
      </div>
    </div>
  );
}

// 최적화 데모 컴포넌트 (상세 설명 추가)
function OptimizationDemos() {
  const [nonOptRenders, setNonOptRenders] = useState(1);
  const [optRenders] = useState(1);
  const [nonOptTime, setNonOptTime] = useState(0);
  const [optTime, setOptTime] = useState(0);
  const memoizedResult = useRef<boolean | null>(null);
  const [nonOptInput, setNonOptInput] = useState('');
  const [optInput, setOptInput] = useState('');
  const [nonOptDots, setNonOptDots] = useState(Array(100).fill(false));
  const [nonOptListeners, setNonOptListeners] = useState(0);
  const [optListeners, setOptListeners] = useState(0);
  const [optComponents, setOptComponents] = useState(0);

  const heavyCalculation = useCallback((num: number) => {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }, []);

  return (
    <div className="space-y-8">
      {/* Demo 1: Render Count */}
              <CommonGlassCard>
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-3">🔄</span>
            <div>
              <h3 className="text-2xl font-bold text-white">Render Optimization</h3>
              <p className="text-slate-400 text-sm">React.memo로 불필요한 re-rendering 방지</p>
            </div>
          </div>
          
          <CommonInfoCard className="mb-6">
          <p className="text-xs text-slate-300">
            <strong>왜 중요한가요?</strong> 화면을 다시 그리는 것은 비용이 큽니다.
            변경되지 않은 부분은 다시 그리지 않는 것이 효율적입니다.
            마치 집 전체를 다시 페인트칠하는 대신 필요한 벽만 칠하는 것과 같습니다.
          </p>
        </CommonInfoCard>

        <div className="grid sm:grid-cols-2 gap-6">
          <DemoBox type="error">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              최적화 전
            </h4>
            <p className="text-sm text-slate-400 mb-4">매번 re-rendering 발생</p>
            <button
              onClick={() => setNonOptRenders(nonOptRenders + 1)}
              className="w-full px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all border border-red-500/30"
            >
              Parent Re-render
            </button>
            <div className="mt-4 p-3 bg-red-950/20 rounded-lg">
              <p className="text-center">
                <span className="text-3xl font-bold text-red-400">{nonOptRenders}</span>
                <span className="block text-xs text-red-400/70 mt-1">Render Count</span>
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              부모가 바뀔 때마다 자식도 다시 그려짐 (비효율적)
            </p>
          </DemoBox>

          <DemoBox type="success">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              최적화 후 (React.memo)
            </h4>
            <p className="text-sm text-slate-400 mb-4">Props 변경시만 re-rendering</p>
            <button
              onClick={() => { }}
              className="w-full px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-all border border-green-500/30"
            >
              Parent Re-render
            </button>
            <div className="mt-4 p-3 bg-green-950/20 rounded-lg">
              <p className="text-center">
                <span className="text-3xl font-bold text-green-400">{optRenders}</span>
                <span className="block text-xs text-green-400/70 mt-1">Render Count</span>
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Props가 같으면 재사용 (효율적) - React 19에서는 자동!
            </p>
          </DemoBox>
        </div>
      </CommonGlassCard>

      {/* Demo 2: JS Execution Time */}
      <CommonGlassCard>
        <div className="flex items-center mb-6">
          <span className="text-3xl mr-3">⚡</span>
          <div>
            <h3 className="text-2xl font-bold text-white">Computation Memoization</h3>
            <p className="text-slate-400 text-sm">useMemo로 expensive calculation 캐싱</p>
          </div>
        </div>

        <CommonInfoCard className="mb-6">
          <p className="text-xs text-slate-300">
            <strong>왜 중요한가요?</strong> 복잡한 계산을 매번 반복하면 앱이 느려집니다.
            한 번 계산한 결과를 저장해두고 재사용하면 훨씬 빠릅니다.
            마치 수학 문제의 답을 외워두는 것과 같습니다.
          </p>
        </CommonInfoCard>

        <div className="grid sm:grid-cols-2 gap-6">
          <DemoBox type="error">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              최적화 전
            </h4>
            <p className="text-sm text-slate-400 mb-4">매번 recalculation</p>
            <button
              onClick={() => {
                const t0 = performance.now();
                heavyCalculation(1000000007);
                const t1 = performance.now();
                setNonOptTime(Number((t1 - t0).toFixed(2)));
              }}
              className="w-full px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all border border-red-500/30"
            >
              Calculate Prime
            </button>
            <div className="mt-4 p-3 bg-red-950/20 rounded-lg">
              <p className="text-center">
                <span className="text-3xl font-bold text-red-400">{nonOptTime}</span>
                <span className="text-xs text-red-400/70 mt-1">milliseconds</span>
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              큰 소수 판별을 매번 다시 계산 (느림)
            </p>
          </DemoBox>

          <DemoBox type="success">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              최적화 후 (useMemo)
            </h4>
            <p className="text-sm text-slate-400 mb-4">Result caching</p>
            <button
              onClick={() => {
                const t0 = performance.now();
                if (memoizedResult.current === null) {
                  memoizedResult.current = heavyCalculation(1000000007);
                }
                const t1 = performance.now();
                setOptTime(Number((t1 - t0).toFixed(2)));
              }}
              className="w-full px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-all border border-green-500/30"
            >
              Calculate Prime
            </button>
            <div className="mt-4 p-3 bg-green-950/20 rounded-lg">
              <p className="text-center">
                <span className="text-3xl font-bold text-green-400">{optTime}</span>
                <span className="block text-xs text-green-400/70 mt-1">milliseconds</span>
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              첫 번째만 계산, 이후는 저장된 값 사용 (빠름)
            </p>
          </DemoBox>
        </div>
      </CommonGlassCard>

      {/* Demo 3: UI Responsiveness */}
      <CommonGlassCard>
        <div className="flex items-center mb-6">
          <span className="text-3xl mr-3">🎯</span>
          <div>
            <h3 className="text-2xl font-bold text-white">UI Responsiveness</h3>
            <p className="text-slate-400 text-sm">Input performance 비교</p>
          </div>
        </div>

        <CommonInfoCard className="mb-6">
          <p className="text-xs text-slate-300">
            <strong>왜 중요한가요?</strong> 타이핑할 때 글자가 늦게 나타나면 답답합니다.
            불필요한 작업을 줄이면 사용자 입력에 즉시 반응할 수 있습니다.
            스마트폰이 터치에 바로 반응하는 것처럼 빨라야 합니다.
          </p>
        </CommonInfoCard>

        <div className="grid sm:grid-cols-2 gap-6">
          <DemoBox type="error">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              최적화 전
            </h4>
            <input
              type="text"
              value={nonOptInput}
              onChange={(e) => {
                setNonOptInput(e.target.value);
                setNonOptDots(nonOptDots.map(() => Math.random() > 0.5));
              }}
              placeholder="Laggy typing..."
              className="w-full px-4 py-2 bg-white/5 border border-red-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50"
            />
            <div className="mt-4 grid grid-cols-10 gap-1">
              {nonOptDots.slice(0, 50).map((active, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${active ? 'bg-red-400 scale-110' : 'bg-slate-700'
                    }`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              타이핑할 때마다 100개 점을 다시 그림 (버벅거림)
            </p>
          </DemoBox>

          <DemoBox type="success">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              최적화 후
            </h4>
            <input
              type="text"
              value={optInput}
              onChange={(e) => setOptInput(e.target.value)}
              placeholder="Smooth typing!"
              className="w-full px-4 py-2 bg-white/5 border border-green-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50"
            />
            <div className="mt-4 grid grid-cols-10 gap-1">
              {Array(50).fill(null).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-slate-700" />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              점들은 변경 없어서 다시 그리지 않음 (부드러움)
            </p>
          </DemoBox>
        </div>
      </CommonGlassCard>

      {/* Demo 4: Memory Management */}
      <CommonGlassCard>
        <div className="flex items-center mb-6">
          <span className="text-3xl mr-3">💾</span>
          <div>
            <h3 className="text-2xl font-bold text-white">Memory Management</h3>
            <p className="text-slate-400 text-sm">useEffect cleanup으로 memory leak 방지</p>
          </div>
        </div>

        <CommonInfoCard className="mb-6">
          <p className="text-xs text-slate-300">
            <strong>왜 중요한가요?</strong> 사용하지 않는 것을 계속 메모리에 두면 앱이 느려집니다.
            마치 집에 쓰레기를 계속 쌓아두면 공간이 부족해지는 것과 같습니다.
            cleanup 함수로 필요없는 것을 정리해야 합니다.
          </p>
        </CommonInfoCard>

        <div className="grid sm:grid-cols-2 gap-6">
          <DemoBox type="error">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              No Cleanup
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => setNonOptListeners(nonOptListeners + 1)}
                className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all border border-blue-500/30 text-sm"
              >
                Add
              </button>
              <button
                onClick={() => { }}
                className="flex-1 px-3 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all border border-red-500/30 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="mt-4 p-3 bg-red-950/20 rounded-lg">
              <p className="text-center">
                <span className="text-3xl font-bold text-red-400">{nonOptListeners}</span>
                <span className="block text-xs text-red-400/70 mt-1">Active Listeners</span>
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              제거해도 메모리에 남아있음 (Memory Leak!)
            </p>
          </DemoBox>

          <DemoBox type="success">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              With Cleanup
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setOptComponents(optComponents + 1);
                  setOptListeners(optListeners + 1);
                }}
                className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all border border-blue-500/30 text-sm"
              >
                Add
              </button>
              <button
                onClick={() => {
                  if (optComponents > 0) {
                    setOptComponents(optComponents - 1);
                    setOptListeners(optListeners - 1);
                  }
                }}
                className="flex-1 px-3 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all border border-red-500/30 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="mt-4 p-3 bg-green-950/20 rounded-lg">
              <p className="text-center">
                <span className="text-3xl font-bold text-green-400">{optListeners}</span>
                <span className="block text-xs text-green-400/70 mt-1">Active Listeners</span>
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              제거하면 메모리도 정리됨 (Clean!)
            </p>
          </DemoBox>
        </div>
      </CommonGlassCard>
    </div>
  );
}

// 고급 패턴 컴포넌트
function AdvancedPatterns() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <CommonGlassCard gradient="from-blue-500 to-cyan-500">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">🎯</span>
          <h3 className="text-xl font-bold text-white">useRef</h3>
        </div>
        <p className="text-slate-300 text-sm mb-3">
          DOM element 직접 제어와 re-render 없는 mutable value 저장
        </p>
        <p className="text-xs text-slate-400 mb-6 italic flex-1">
          화면 업데이트 없이 값을 저장하거나, HTML 요소를 직접 제어할 때 사용합니다.
          마치 메모지에 적어두는 것처럼 React가 신경쓰지 않는 정보를 저장합니다.
        </p>

        <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 mt-auto">
          <input
            ref={inputRef}
            type="text"
            placeholder="Click button to focus"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`w-full px-4 py-2 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all ${focused ? 'border-blue-400 shadow-lg shadow-blue-500/20' : 'border-white/20'
              }`}
          />
          <button
            onClick={() => {
              inputRef.current?.focus();
              inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
            }}
            className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Focus & Select All
          </button>
        </div>

        <div className="mt-4 p-3 bg-slate-950/30 rounded-lg">
          <code className="text-xs text-blue-300">
            {`inputRef.current?.focus()`}
          </code>
        </div>
      </CommonGlassCard>

      <CommonGlassCard gradient="from-purple-500 to-pink-500">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">🪝</span>
          <h3 className="text-xl font-bold text-white">Custom Hook</h3>
        </div>
        <p className="text-slate-300 text-sm mb-3">
          Reusable logic을 custom hook으로 추출하여 재사용
        </p>
        <p className="text-xs text-slate-400 mb-6 italic flex-1">
          자주 사용하는 로직을 함수로 만들어 여러 컴포넌트에서 재사용할 수 있습니다.
          마치 요리 레시피를 만들어두고 필요할 때마다 사용하는 것과 같습니다.
        </p>

        <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 mt-auto">
          <p className="text-sm text-slate-400 mb-3">Resize your browser window</p>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {windowWidth}
            </div>
            <div className="text-sm text-slate-400 mt-2">pixels</div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-slate-950/30 rounded-lg">
          <code className="text-xs text-purple-300">
            {`const width = useWindowWidth()`}
          </code>
        </div>
      </CommonGlassCard>
    </div>
  );
}

// Demo Box 컴포넌트
function DemoBox({ children, type = 'default' }: { children: React.ReactNode; type?: 'error' | 'success' | 'default' }) {
  const styles = {
    error: 'bg-red-500/5 border-red-500/20 hover:border-red-500/30',
    success: 'bg-green-500/5 border-green-500/20 hover:border-green-500/30',
    default: 'bg-white/5 border-white/10 hover:border-white/20'
  };

  return (
    <div className={`backdrop-blur-xl rounded-xl p-4 border transition-all ${styles[type]}`}>
      {children}
    </div>
  );
}
