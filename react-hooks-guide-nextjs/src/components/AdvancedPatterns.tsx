'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

interface DemoBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function DemoBox({ title, children, className = '' }: DemoBoxProps) {
  return (
    <section className={`bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-6 ${className}`}>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
        <span className="text-2xl mr-3">🚀</span>
        {title}
      </h4>
      {children}
    </section>
  );
}

export function AdvancedPatterns() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // useCallback으로 함수 최적화
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  // useRef로 DOM 접근
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // useEffect로 사이드 이펙트 관리
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Count is:', count);
    }, 5000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <article className="space-y-6">
      <header className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">고급 패턴 실험실</h3>
        <p className="text-slate-400">React의 고급 기능들을 직접 체험해보며 학습해보세요</p>
      </header>

      <DemoBox title="useCallback 최적화" className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          함수를 메모이제이션하여 불필요한 리렌더링을 방지합니다.
          의존성 배열이 변경되지 않으면 동일한 함수 참조를 반환합니다.
        </p>
        
        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={handleDecrement}
            className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-110 font-bold text-2xl"
          >
            −
          </button>
          <div className="flex items-center justify-center w-24 h-16 bg-slate-950/50 rounded-xl border border-white/10">
            <span className="text-3xl font-bold text-white">{count}</span>
          </div>
          <button
            onClick={handleIncrement}
            className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 font-bold text-2xl"
          >
            +
          </button>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> useCallback은 &quot;함수를 기억하는 Hook&quot;입니다.
            자식 컴포넌트가 React.memo로 최적화되어 있다면 특히 유용합니다.
            의존성 배열이 비어있으면 컴포넌트가 마운트될 때만 함수가 생성됩니다.
          </p>
        </aside>
      </DemoBox>

      <DemoBox title="useRef DOM 접근" className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          DOM 요소에 직접 접근하여 포커스, 스크롤 등을 제어할 수 있습니다.
          React의 선언적 방식과 함께 명령적 DOM 조작이 필요한 경우에 사용합니다.
        </p>
        
        <div className="space-y-4 mb-4">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="w-full px-4 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all text-base"
          />
          <div className="flex gap-3">
            <button
              onClick={focusInput}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-medium"
            >
              Focus Input
            </button>
            <button
              onClick={() => setText('')}
              className="px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-xl hover:shadow-lg hover:shadow-slate-500/25 transition-all duration-300 hover:scale-105 font-medium"
            >
              Clear Text
            </button>
          </div>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> useRef는 &quot;DOM 요소를 가리키는 참조&quot;입니다.
            포커스, 스크롤 위치, 애니메이션 등 React로 제어하기 어려운 DOM 조작에 유용합니다.
            ref.current를 통해 실제 DOM 요소에 접근할 수 있습니다.
          </p>
        </aside>
      </DemoBox>

      <DemoBox title="useEffect 사이드 이펙트" className="bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          컴포넌트 생명주기에 따라 사이드 이펙트를 관리합니다.
          API 호출, 타이머 설정, 이벤트 리스너 등이 여기에 해당합니다.
        </p>
        
        <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10 mb-4">
          <p className="text-sm text-slate-400 mb-2">Console 메시지 (5초마다):</p>
          <p className="text-xs text-green-400 font-mono">"Count is: {count}"</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10">
            <p className="text-sm font-semibold text-orange-400 mb-2">⏰ Timer Active</p>
            <p className="text-xs text-slate-300">5초마다 콘솔에 로그 출력</p>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10">
            <p className="text-sm font-semibold text-red-400 mb-2">🔄 Current Count</p>
            <p className="text-2xl font-bold text-white">{count}</p>
          </div>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> useEffect는 &quot;부수 효과를 관리하는 Hook&quot;입니다.
            컴포넌트가 마운트, 업데이트, 언마운트될 때 실행할 작업을 정의합니다.
            cleanup 함수를 반환하여 메모리 누수를 방지할 수 있습니다.
          </p>
        </aside>
      </DemoBox>

      <DemoBox title="성능 최적화 팁" className="bg-gradient-to-br from-purple-500/10 to-pink-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          React 애플리케이션의 성능을 최적화하는 실용적인 팁들을 알아봅니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-950/30 p-4 rounded-lg border border-green-500/20">
            <p className="text-sm font-semibold text-green-400 mb-2">✅ Best Practices</p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• React.memo로 불필요한 리렌더링 방지</li>
              <li>• useMemo로 계산 결과 캐싱</li>
              <li>• useCallback으로 함수 메모이제이션</li>
              <li>• 적절한 key prop 사용</li>
            </ul>
          </div>
          <div className="bg-red-950/30 p-4 rounded-lg border border-red-500/20">
            <p className="text-sm font-semibold text-red-400 mb-2">❌ Avoid These</p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• 매번 새로운 객체/함수 생성</li>
              <li>• 불필요한 useEffect 의존성</li>
              <li>• 배열 인덱스를 key로 사용</li>
              <li>• 과도한 상태 업데이트</li>
            </ul>
          </div>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> 성능 최적화는 &quot;필요한 곳에만 적용&quot;하는 것이 중요합니다.
            모든 컴포넌트에 React.memo를 적용하는 것보다는, 실제로 성능 문제가 있는 부분을
            프로파일링 도구로 찾아서 최적화하는 것이 효과적입니다.
          </p>
        </aside>
      </DemoBox>
    </article>
  );
}
