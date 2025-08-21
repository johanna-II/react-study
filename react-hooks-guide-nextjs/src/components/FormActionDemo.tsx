'use client';

import React, { useState } from 'react';

export default function FormActionDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success
      if (formData.name && formData.email) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
        <h4 className="text-xl font-bold text-white mb-4">📝 React 19 Form Actions 데모</h4>
        <p className="text-slate-300 mb-6">
          이 데모는 React 19의 새로운 Form Actions 기능을 시뮬레이션합니다.
          실제 Form Actions에서는 <code className="text-blue-400">useActionState</code>와 
          <code className="text-green-400">useFormStatus</code>를 사용합니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              이름 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              이메일 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              placeholder="메시지를 입력하세요 (선택사항)"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              isSubmitting
                ? 'bg-slate-600/50 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>제출 중...</span>
              </div>
            ) : (
              '폼 제출하기'
            )}
          </button>
        </form>

        {/* Status Display */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span className="text-green-300 font-medium">폼이 성공적으로 제출되었습니다!</span>
            </div>
            <p className="text-sm text-green-400/80 mt-2">
              React 19 Form Actions에서는 자동으로 폼이 리셋되고 상태가 관리됩니다.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-red-400">❌</span>
              <span className="text-red-300 font-medium">제출에 실패했습니다.</span>
            </div>
            <p className="text-sm text-red-400/80 mt-2">
              이름과 이메일을 모두 입력해주세요.
            </p>
          </div>
        )}
      </div>

      {/* React 19 Code Example */}
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
        <h4 className="text-xl font-bold text-white mb-4">💻 React 19 Form Actions 코드</h4>
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600/50">
          <p className="text-sm text-green-400 mb-3">🎉 실제 React 19에서는 이렇게 사용합니다:</p>
          <pre className="text-sm text-slate-300 font-mono overflow-x-auto bg-slate-800/50 p-4 rounded-lg border border-slate-600/50">
            <code className="language-typescript">{`// React 19 Form Actions
const [error, submitAction, isPending] = useActionState(
  async (previousState, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    
    if (!name || !email) {
      return "이름과 이메일을 모두 입력해주세요.";
    }
    
    try {
      await submitForm({ name, email });
      redirect("/success");
      return null;
    } catch (error) {
      return "제출에 실패했습니다. 다시 시도해주세요.";
    }
  },
  null
);

return (
  <form action={submitAction}>
    <input type="text" name="name" required />
    <input type="email" name="email" required />
    <button type="submit" disabled={isPending}>
      {isPending ? "제출 중..." : "제출하기"}
    </button>
    {error && <p className="error">{error}</p>}
  </form>
);`}</code>
          </pre>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
          <h5 className="text-lg font-semibold text-blue-400 mb-3">🚀 React 19의 장점</h5>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• 자동 폼 리셋</li>
            <li>• 내장 에러 처리</li>
            <li>• Pending 상태 자동 관리</li>
            <li>• 낙관적 업데이트 지원</li>
          </ul>
        </div>
        
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
          <h5 className="text-lg font-semibold text-green-400 mb-3">💡 기존 방식과의 차이</h5>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• useState + useEffect 불필요</li>
            <li>• 수동 에러 처리 제거</li>
            <li>• 복잡한 상태 관리 단순화</li>
            <li>• 더 나은 사용자 경험</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
