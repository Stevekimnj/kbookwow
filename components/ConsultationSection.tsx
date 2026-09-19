"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon, ThreadsIcon } from "@/components/Icons";

interface ConsultationProps {
  preselectedProgram?: string;
}

/**
 * ConsultationSection 컴포넌트
 * 학부모님이 자녀의 무료 체험 수업 또는 1:1 맞춤 상담을 신청할 수 있는
 * 세련된 다크 글래스모피즘 인터랙티브 폼 섹션입니다.
 */
export default function ConsultationSection({ preselectedProgram }: ConsultationProps) {
  const [formData, setFormData] = useState({
    parentName: "",
    contactInfo: "",
    childAge: "",
    koreanLevel: "기초 (자음/모음 익히는 단계)",
    program: preselectedProgram || "전체 프로그램 상담",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 실제 제출 효과 시뮬레이션
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // 화려한 컨페티 축하 애니메이션 발사
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366F1", "#EC4899", "#06B6D4", "#F59E0B"],
        });
      } catch (err) {
        console.error("Confetti error:", err);
      }
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#090A10] overflow-hidden">
      {/* 배경 오로라 조명 */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/20 to-pink-600/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 왼쪽: 상담 안내 및 빠른 소셜 연락처 */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-300">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Start Your Korean Odyssey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              아이의 첫 한국어, <br />
              <span className="gradient-text-primary">무료 체험 수업</span>으로 <br />
              시작해보세요!
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              우리 아이에게 어떤 프로그램이 가장 잘 맞을지 고민되시나요?
              현재 한국어 수준 진단과 함께 1:1 맞춤 커리큘럼 상담을 무료로 진행해 드립니다.
            </p>

            {/* 빠른 소셜 및 상담 채널 */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">공식 인스타그램 DM</div>
                  <a
                    href="https://www.instagram.com/kbookwow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-pink-400 transition-colors"
                  >
                    @kbookwow
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <ThreadsIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">스레드 소통 채널</div>
                  <a
                    href="https://www.threads.com/@kbookwow?xmt=AQG0oellG63L68OHc9nkuXkxfX950WnVa-CCW6EoVWVH6s4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    @kbookwow on Threads
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 신청 폼 카드 */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/15 relative shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    무료 체험 신청이 완료되었습니다! 🎉
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                    따뜻한 관심에 감사드립니다. 남겨주신 연락처로 24시간 이내에
                    선생님께서 자녀의 맞춤 수업 시간표와 체험 안내를 드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        parentName: "",
                        contactInfo: "",
                        childAge: "",
                        koreanLevel: "기초 (자음/모음 익히는 단계)",
                        program: "전체 프로그램 상담",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    새로운 상담 신청하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 학부모 성함 */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                      />
                    </div>

                    {/* 연락처 / 이메일 */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        이메일 또는 전화번호(카카오톡) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="이메일 / 전화번호 입력"
                        value={formData.contactInfo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactInfo: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 자녀 나이/학년 */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        자녀 나이 또는 학년 *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="예: 만 7세 (초등학교 1학년)"
                        value={formData.childAge}
                        onChange={(e) =>
                          setFormData({ ...formData, childAge: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                      />
                    </div>

                    {/* 관심 프로그램 */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        관심 프로그램 *
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) =>
                          setFormData({ ...formData, program: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                      >
                        <option value="전체 프로그램 상담">전체 프로그램 상담 / 추천 요청</option>
                        <option value="온라인 한국어 읽기 & 쓰기">온라인 한국어 읽기 & 쓰기</option>
                        <option value="나만의 그림책 창작 워크숍">나만의 그림책 창작 워크숍</option>
                        <option value="창의적 글쓰기 워크숍">창의적 글쓰기 워크숍</option>
                        <option value="한국 문화 & 전통 공예 활동">한국 문화 & 전통 공예 활동</option>
                        <option value="도예 기반 한국어 융합 수업">도예 기반 한국어 융합 수업</option>
                      </select>
                    </div>
                  </div>

                  {/* 현재 한국어 수준 */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      현재 자녀의 한국어 수준
                    </label>
                    <select
                      value={formData.koreanLevel}
                      onChange={(e) =>
                        setFormData({ ...formData, koreanLevel: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                    >
                      <option value="입문">입문: 한국어를 처음 접하거나 아주 간단한 단어만 아는 상태</option>
                      <option value="기초 (자음/모음)">기초: 자음·모음을 알고 간단한 글자를 읽기 시작하는 상태</option>
                      <option value="중급 (듣기는 되나 말하기/쓰기 부족)">중급: 집에서 일상 대화는 듣지만 말하기·쓰기가 서툰 상태</option>
                      <option value="심화 (긴 동화책 읽기 및 표현력 확장 희망)">심화: 한국어로 읽고 쓸 수 있으나 창의적 표현과 어휘를 키우고 싶은 상태</option>
                    </select>
                  </div>

                  {/* 추가 문의 내용 */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      선생님께 남기고 싶은 말씀 (선택)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="아이의 관심사(그림 그리기, 만들기 등)나 희망하시는 수업 요일/시간대를 편하게 적어주세요."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                    />
                  </div>

                  {/* 제출 버튼 */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-pink-500 hover:to-indigo-600 shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <span>신청 접수 중...</span>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span>무료 체험 수업 및 상담 신청하기</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    🔒 남겨주신 소중한 개인정보는 수업 상담 및 레벨 진단 목적으로만 안전하게 사용됩니다.
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
