'use client';

import React, { useState, useMemo } from 'react';

interface DemoBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function DemoBox({ title, children, className = '' }: DemoBoxProps) {
  return (
    <section className={`bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-6 ${className}`}>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
        <span className="text-2xl mr-3">⚡</span>
        {title}
      </h4>
      {children}
    </section>
  );
}

export function OptimizationDemos() {
  const [count, setCount] = useState(0);
  const [expensiveValue, setExpensiveValue] = useState(1);
  const [renderCount, setRenderCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // 클라이언트 사이드에서만 실행 (Hydration 오류 방지)
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // useMemo로 계산 최적화
  const memoizedValue = useMemo(() => {
    if (isClient) {
      console.log('Expensive calculation running...');
      setRenderCount(prev => prev + 1);
    }
    return expensiveValue * 2;
  }, [expensiveValue, isClient]);

  return (
    <article className="space-y-6">
      <header className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">성능 최적화 실험실</h3>
        <p className="text-slate-400">아래 버튼들을 클릭해보며 성능 최적화의 효과를 직접 체감해보세요</p>
      </header>

      <DemoBox title="React.memo 최적화" className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          부모 컴포넌트가 리렌더링되어도 자식 컴포넌트는 props가 변경되지 않으면
          리렌더링되지 않습니다. 개발자 도구의 Console을 확인해보세요.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium"
          >
            Count: {count}
          </button>
          <button
            onClick={() => setExpensiveValue(v => v + 1)}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 font-medium"
          >
            Expensive: {expensiveValue}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10">
            <p className="text-sm font-semibold text-green-400 mb-2">✅ Memoized Value</p>
            <p className="text-2xl font-bold text-white">{memoizedValue}</p>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10">
            <p className="text-sm font-semibold text-blue-400 mb-2">🔄 Render Count</p>
            <p className="text-2xl font-bold text-white">{isClient ? renderCount : '...'}</p>
          </div>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> React.memo는 &quot;기억하는 컴포넌트&quot;입니다.
            props가 변경되지 않으면 이전에 렌더링된 결과를 재사용하여 불필요한 계산을 방지합니다.
            마치 캐시처럼 작동하여 성능을 크게 향상시킵니다.
          </p>
        </aside>
      </DemoBox>

      <DemoBox title="useMemo 최적화" className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          의존성이 변경되지 않으면 계산을 다시 하지 않습니다.
          Expensive Value를 변경해보면 계산이 실행되는 것을 Console에서 확인할 수 있습니다.
        </p>
        
        <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10 mb-4">
          <p className="text-sm text-slate-400 mb-2">Console 메시지:</p>
          <p className="text-xs text-green-400 font-mono">&quot;Expensive calculation running...&quot;</p>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> useMemo는 &quot;계산 결과를 기억하는 Hook&quot;입니다.
            복잡한 계산이나 API 호출 결과를 캐시하여 동일한 입력에 대해 재계산하지 않습니다.
            특히 배열이나 객체를 반환하는 계산에서 유용합니다.
          </p>
        </aside>
      </DemoBox>

      <DemoBox title="Key Prop 최적화" className="bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          배열 렌더링 시 고유한 ID를 key로 사용하여 불필요한 리렌더링을 방지합니다.
          React가 각 요소를 정확히 식별할 수 있도록 도와줍니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-950/30 p-4 rounded-lg border border-green-500/20">
            <p className="text-sm font-semibold text-green-400 mb-2">✅ Good Examples</p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• key=&quot;user-123&quot;</li>
              <li>• key=&quot;post-456&quot;</li>
              <li>• key=&#123;item.id&#125;</li>
              <li>• key=&#123;`type-id`&#125;</li>
            </ul>
          </div>
          <div className="bg-red-950/30 p-4 rounded-lg border border-red-500/20">
            <p className="text-sm font-semibold text-red-400 mb-2">❌ Bad Examples</p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• key=&#123;index&#125;</li>
              <li>• key=&#123;Math.random()&#125;</li>
              <li>• key=&#123;Date.now()&#125;</li>
              <li>• key=&#123;undefined&#125;</li>
            </ul>
          </div>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> Key는 React의 &quot;식별자&quot;입니다.
            배열의 순서가 바뀌거나 요소가 추가/제거될 때 React가 어떤 요소가 변경되었는지
            정확히 파악할 수 있도록 도와줍니다. 고유하고 안정적인 값을 사용해야 합니다.
          </p>
        </aside>
      </DemoBox>

      <DemoBox title="useCallback 최적화" className="bg-gradient-to-br from-purple-500/10 to-pink-500/10">
        <p className="text-slate-300 leading-relaxed mb-4">
          함수를 메모이제이션하여 불필요한 리렌더링을 방지합니다.
          특히 자식 컴포넌트에 함수를 props로 전달할 때 중요합니다.
        </p>
        
        <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10 mb-4">
          <code className="text-xs text-slate-300 font-mono block">
{`// ❌ 매번 새로운 함수 생성
const handleClick = () => setCount(c => c + 1);

// ✅ 함수 메모이제이션
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);`}
          </code>
        </div>
        
        <aside className="p-4 bg-slate-900/50 rounded-lg border border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>💡 초보자 팁:</strong> useCallback은 &quot;함수를 기억하는 Hook&quot;입니다.
            의존성 배열이 변경되지 않으면 동일한 함수 참조를 반환합니다.
            자식 컴포넌트가 React.memo로 최적화되어 있다면 특히 유용합니다.
          </p>
        </aside>
      </DemoBox>
    </article>
  );
}
