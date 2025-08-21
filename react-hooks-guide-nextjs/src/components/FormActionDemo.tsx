'use client';

import React, { useState } from 'react';

export function FormActionDemo() {
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
