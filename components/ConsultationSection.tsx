"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Send,
  CheckCircle,
} from "lucide-react";

interface ConsultationProps {
  preselectedProgram?: string;
}

export default function ConsultationSection({ preselectedProgram }: ConsultationProps) {
  const [formData, setFormData] = useState({
    parentName: "",
    contactInfo: "",
    childAge: "",
    koreanLevel: "기초 (자음/모음 익히는 단계)",
    program: preselectedProgram || "무료 체험 수업 신청",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6B70B8", "#F4B6A8", "#A7D8F0"],
        });
      } catch (err) {
        console.error("Confetti error:", err);
      }
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 bg-[var(--bg-main)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 왼쪽 안내 카피 */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              우리 아이의 <br />
              <span className="gradient-text-primary">한국어 이야기</span>를 <br />
              오늘 한 장부터 시작해 보세요.
            </h2>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed font-normal">
              우리 아이에게 어떤 프로그램이 가장 잘 맞을지 고민되시나요?
              현재 한국어 수준 진단과 함께 1:1 맞춤 커리큘럼 상담을 무료로 진행해 드립니다.
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-navy">
                궁금한 점이 있으시면 편하게 카카오톡으로 문의주세요!
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-yellow-900 bg-[#FEE500] hover:bg-[#F4DC00] transition-colors shadow-sm"
              >
                카카오톡으로 문의하기
              </a>
            </div>
          </div>

          {/* 오른쪽 신청 폼 */}
          <div className="lg:col-span-7">
            <div className="clean-card rounded-3xl p-8 sm:p-10 relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm border border-emerald-100">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">
                    무료 체험 신청이 완료되었습니다! 🎉
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                    따뜻한 관심에 감사드립니다. 남겨주신 연락처로 24시간 이내에
                    자녀의 맞춤 수업 시간표와 체험 안내를 드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        ...formData,
                        parentName: "",
                        contactInfo: "",
                        childAge: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 mt-4 rounded-full text-sm font-semibold border border-gray-200 text-[var(--text-secondary)] hover:bg-gray-50 transition-colors"
                  >
                    새로운 상담 신청하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">학부모 성함 *</label>
                      <input
                        type="text"
                        required
                        placeholder="예: 김민정 (Sarah Kim)"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">이메일 또는 전화번호 *</label>
                      <input
                        type="text"
                        required
                        placeholder="이메일 / 전화번호 입력"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">자녀 나이 또는 학년 *</label>
                      <input
                        type="text"
                        required
                        placeholder="예: 만 7세 (초등학교 1학년)"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">관심 프로그램 *</label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-navy text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                      >
                        <option value="무료 체험 수업 신청">무료 체험 수업 신청</option>
                        <option value="전체 프로그램 상담">전체 프로그램 상담 / 추천</option>
                        <option value="온라인 한국어 읽기 & 쓰기">온라인 한국어 읽기 & 쓰기</option>
                        <option value="나만의 그림책 창작 워크숍">나만의 그림책 창작 워크숍</option>
                        <option value="창의적 글쓰기 워크숍">창의적 글쓰기 워크숍</option>
                        <option value="한국 문화 & 전통 공예 활동">한국 문화 & 전통 공예 활동</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">현재 자녀의 한국어 수준</label>
                    <select
                      value={formData.koreanLevel}
                      onChange={(e) => setFormData({ ...formData, koreanLevel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-navy text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                    >
                      <option value="입문">입문: 아주 간단한 단어만 아는 상태</option>
                      <option value="기초 (자음/모음)">기초: 자음·모음을 읽기 시작하는 상태</option>
                      <option value="중급 (듣기는 되나 말하기/쓰기 부족)">중급: 일상 대화는 듣지만 말하기·쓰기가 서툰 상태</option>
                      <option value="심화 (긴 동화책 읽기 및 표현력 확장 희망)">심화: 한국어로 읽고 쓸 수 있는 상태</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">남기고 싶은 말씀 (선택)</label>
                    <textarea
                      rows={3}
                      placeholder="아이의 관심사나 희망하시는 수업 요일/시간대를 편하게 적어주세요."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-navy placeholder-gray-400 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-full text-base font-bold text-white bg-[var(--color-primary)] hover:bg-[#585ca3] shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <span>신청 접수 중...</span>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span>무료 체험 수업 신청하기</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-400">
                    🔒 소중한 개인정보는 수업 상담 및 레벨 진단 목적으로만 안전하게 사용됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
