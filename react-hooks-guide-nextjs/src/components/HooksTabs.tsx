'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HooksTabsProps } from '@/types';

export function HooksTabs({ activeTab, setActiveTab }: HooksTabsProps) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [theme, setTheme] = useState('light');
  const [reducerCount, setReducerCount] = useState(0);
  const originalTitle = useRef<string>('');

  useEffect(() => {
    // 클라이언트 사이드에서만 document에 접근
    if (typeof window !== 'undefined') {
      originalTitle.current = document.title;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const title = originalTitle.current;
      if (activeTab === 'useEffect' && inputValue) {
        document.title = `Input: ${inputValue}`;
      }
      return () => {
        if (activeTab === 'useEffect') {
          document.title = title;
        }
      };
    }
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
