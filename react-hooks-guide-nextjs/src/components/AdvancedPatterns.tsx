'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

export default function AdvancedPatterns() {
  const [renderCount, setRenderCount] = useState(0);
  const [timerCount, setTimerCount] = useState(0);

  return (
    <div className="space-y-8">
      {/* useCallback 최적화 */}
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
        <h3 className="text-2xl font-bold text-white mb-6">🔧 useCallback 최적화</h3>
        
        {/* 동작 원리 설명 */}
        <div className="bg-slate-900/50 p-4 rounded-lg border border-white/10 mb-6">
          <h5 className="text-lg font-semibold text-blue-400 mb-3">🎯 동작 원리</h5>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-300 mb-2"><strong>useCallback 없이:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 매번 새로운 함수 생성</li>
                <li>• 자식 컴포넌트 불필요한 리렌더링</li>
                <li>• 성능 저하</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-300 mb-2"><strong>useCallback 사용:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 동일한 함수 참조 유지</li>
                <li>• 자식 컴포넌트 리렌더링 방지</li>
                <li>• 성능 향상</li>
              </ul>
            </div>
          </div>
        </div>

        <UseCallbackDemo />
      </div>

      {/* useRef DOM 접근 */}
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
        <h3 className="text-2xl font-bold text-white mb-6">🎯 useRef DOM 접근</h3>
        
        {/* 동작 원리 설명 */}
        <div className="bg-slate-900/50 p-4 rounded-lg border border-white/10 mb-6">
          <h5 className="text-lg font-semibold text-green-400 mb-3">🎯 동작 원리</h5>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-300 mb-2"><strong>일반 변수:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 리렌더링시 초기화됨</li>
                <li>• DOM 요소 접근 불가</li>
                <li>• 값 변경시 화면 업데이트</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-300 mb-2"><strong>useRef 사용:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 리렌더링시에도 값 유지</li>
                <li>• DOM 요소 직접 접근</li>
                <li>• 값 변경시 화면 업데이트 안됨</li>
              </ul>
            </div>
          </div>
        </div>

        <UseRefDemo />
      </div>

      {/* useEffect 사이드 이펙트 */}
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
        <h3 className="text-2xl font-bold text-white mb-6">⚡ useEffect 사이드 이펙트</h3>
        
        {/* 동작 원리 설명 */}
        <div className="bg-slate-900/50 p-4 rounded-lg border border-white/10 mb-6">
          <h5 className="text-lg font-semibold text-purple-400 mb-3">🎯 동작 원리</h5>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-300 mb-2"><strong>Cleanup 없이:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 이벤트 리스너 누적</li>
                <li>• 메모리 누수 발생</li>
                <li>• 성능 저하</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-300 mb-2"><strong>Cleanup 사용:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 리소스 정리</li>
                <li>• 메모리 효율적 관리</li>
                <li>• 안정적인 성능</li>
              </ul>
            </div>
          </div>
        </div>

        <UseEffectDemo />
      </div>

      {/* 성능 최적화 팁 */}
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
        <h3 className="text-2xl font-bold text-white mb-6">🚀 성능 최적화 팁</h3>
        
        {/* 동작 원리 설명 */}
        <div className="bg-slate-900/50 p-4 rounded-lg border border-white/10 mb-6">
          <h5 className="text-lg font-semibold text-orange-400 mb-3">🎯 동작 원리</h5>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-300 mb-2"><strong>최적화 전:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 모든 상태 변경시 리렌더링</li>
                <li>• 불필요한 계산 반복</li>
                <li>• 메모리 사용량 증가</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-300 mb-2"><strong>최적화 후:</strong></p>
              <ul className="text-slate-400 space-y-1 text-xs">
                <li>• 필요한 경우만 리렌더링</li>
                <li>• 계산 결과 재사용</li>
                <li>• 효율적인 메모리 관리</li>
              </ul>
            </div>
          </div>
        </div>

        <PerformanceTipsDemo />
      </div>
    </div>
  );
}

// Demo Components
function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  // useCallback으로 함수 메모이제이션
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  // 렌더링 횟수 추적
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, []);

  return (
    <div className="space-y-4">
      {/* 실시간 피드백 */}
      <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10 mb-4">
        <p className="text-sm font-semibold text-purple-400 mb-2">📊 실시간 피드백</p>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-slate-400 mb-1">현재 Count</p>
            <p className="text-2xl font-bold text-white">{count}</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">렌더링 횟수</p>
            <p className="text-2xl font-bold text-blue-400">{renderCount}</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="flex gap-3 justify-center mb-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 border border-red-500/30"
          >
            -
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 border border-green-500/30"
          >
            +
          </button>
        </div>
        <p className="text-xs text-slate-400">
          �� useCallback으로 함수가 메모이제이션되어 불필요한 리렌더링을 방지합니다!
        </p>
      </div>
    </div>
  );
}

function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const incrementRef = () => {
    countRef.current += 1;
    // ref 값 변경은 화면을 업데이트하지 않음
  };

  const showRefValue = () => {
    alert(`Ref 값: ${countRef.current}`);
  };

  // 렌더링 횟수 추적
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, []);

  return (
    <div className="space-y-4">
      {/* 실시간 피드백 */}
      <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10 mb-4">
        <p className="text-sm font-semibold text-green-400 mb-2">📊 실시간 피드백</p>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-slate-400 mb-1">Ref 값</p>
            <p className="text-2xl font-bold text-white">{countRef.current}</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">렌더링 횟수</p>
            <p className="text-2xl font-bold text-blue-400">{renderCount}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Focus me with button..."
            className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500/50"
          />
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={focusInput}
            className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 border border-green-500/30"
          >
            Focus Input
          </button>
          <button
            onClick={incrementRef}
            className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 border border-blue-500/30"
          >
            Increment Ref
          </button>
          <button
            onClick={showRefValue}
            className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 border border-purple-500/30"
          >
            Show Ref Value
          </button>
        </div>
        
        <p className="text-xs text-slate-400 text-center">
          💡 Ref 값이 변경되어도 화면이 업데이트되지 않습니다!
        </p>
      </div>
    </div>
  );
}

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [timerCount, setTimerCount] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // 타이머 설정
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimerCount(prev => prev + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerActive]);

  const toggleTimer = () => {
    setIsTimerActive(!isTimerActive);
  };

  const resetTimer = () => {
    setTimerCount(0);
    setIsTimerActive(false);
  };

  return (
    <div className="space-y-4">
      {/* 실시간 피드백 */}
      <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10 mb-4">
        <p className="text-sm font-semibold text-purple-400 mb-2">📊 실시간 피드백</p>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-slate-400 mb-1">Count</p>
            <p className="text-2xl font-bold text-white">{count}</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">Timer</p>
            <p className="text-2xl font-bold text-green-400">{timerCount}s</p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 border border-blue-500/30"
          >
            Increment Count
          </button>
          <button
            onClick={toggleTimer}
            className={`px-4 py-2 rounded-lg border transition-all ${
              isTimerActive
                ? 'bg-red-500/20 text-red-300 border-red-500/30'
                : 'bg-green-500/20 text-green-300 border-green-500/30'
            }`}
          >
            {isTimerActive ? 'Stop Timer' : 'Start Timer'}
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 border border-gray-500/30"
          >
            Reset Timer
          </button>
        </div>
        
        <p className="text-xs text-slate-400">
          💡 useEffect cleanup으로 타이머가 정리되어 메모리 누수를 방지합니다!
        </p>
      </div>
    </div>
  );
}

function PerformanceTipsDemo() {
  const [items, setItems] = useState<string[]>([]);
  const [filter, setFilter] = useState('');

  // 무거운 계산 시뮬레이션
  const expensiveFilter = React.useMemo(() => {
    return items.filter(item => 
      item.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems(prev => [...prev, newItem]);
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* 실시간 피드백 */}
      <div className="bg-slate-950/50 p-4 rounded-lg border border-white/10 mb-4">
        <p className="text-sm font-semibold text-orange-400 mb-2">📊 실시간 피드백</p>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-slate-400 mb-1">전체 아이템</p>
            <p className="text-2xl font-bold text-white">{items.length}</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">필터링된 아이템</p>
            <p className="text-2xl font-bold text-green-400">{expensiveFilter.length}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={addItem}
            className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 border border-green-500/30"
          >
            Add Item
          </button>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter items..."
            className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        <div className="max-h-40 overflow-y-auto bg-slate-900/50 rounded-lg p-2">
          {expensiveFilter.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-slate-800/50 rounded mb-1"
            >
              <span className="text-slate-300">{item}</span>
              <button
                onClick={() => removeItem(index)}
                className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs hover:bg-red-500/30 border border-red-500/30"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 text-center">
          💡 useMemo로 필터링 계산을 최적화하여 성능을 향상시킵니다!
        </p>
      </div>
    </div>
  );
}
