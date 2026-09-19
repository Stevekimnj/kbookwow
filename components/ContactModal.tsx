"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, X, CheckCircle, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

/**
 * ContactModal 컴포넌트
 * 헤더나 빠른 액션 버튼을 눌렀을 때 나타나는 팝업 형태의 상담 신청 창입니다.
 */
export default function ContactModal({
  isOpen,
  onClose,
  defaultProgram,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    parentName: "",
    contactInfo: "",
    childAge: "",
    program: defaultProgram || "전체 프로그램 상담",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 60,
          origin: { y: 0.5 },
          colors: ["#6366F1", "#EC4899", "#06B6D4", "#F59E0B"],
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-lg bg-[#0F121C] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              신청이 성공적으로 접수되었습니다! ✨
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              아이의 성향과 수준에 맞춘 무료 체험 수업 스케줄을 빠르게 안내해 드리겠습니다.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/15 text-white hover:bg-white/25"
            >
              창 닫기
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-pink-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>K Book WOW Free Trial</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              무료 체험 & 상담 신청
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              아이의 첫 한국어 모험, K Book WOW와 함께 시작해보세요.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  학부모 성함 *
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 김민정 (Sarah Kim)"
                  value={formData.parentName}
                  onChange={(e) =>
                    setFormData({ ...formData, parentName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  이메일 또는 연락처 *
                </label>
                <input
                  type="text"
                  required
                  placeholder="연락받으실 이메일 / 전화번호"
                  value={formData.contactInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, contactInfo: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  자녀 나이 또는 학년 *
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 만 7세 / 초등 1학년"
                  value={formData.childAge}
                  onChange={(e) =>
                    setFormData({ ...formData, childAge: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  희망 프로그램 *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) =>
                    setFormData({ ...formData, program: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141824] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-400"
                >
                  <option value="전체 프로그램 상담">전체 프로그램 상담</option>
                  <option value="온라인 한국어 읽기 & 쓰기">온라인 한국어 읽기 & 쓰기</option>
                  <option value="나만의 그림책 창작 워크숍">나만의 그림책 창작 워크숍</option>
                  <option value="창의적 글쓰기 워크숍">창의적 글쓰기 워크숍</option>
                  <option value="한국 문화 & 전통 공예 활동">한국 문화 & 전통 공예 활동</option>
                  <option value="도예 기반 한국어 융합 수업">도예 기반 한국어 융합 수업</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                {isLoading ? "접수 중..." : "체험 수업 신청 완료하기"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
