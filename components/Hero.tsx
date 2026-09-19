"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2, Heart, Award } from "lucide-react";
import { getImagePath } from "@/lib/utils";

interface HeroProps {
  onOpenContact: () => void;
}

/**
 * Hero 컴포넌트
 * K Book WOW의 비전과 감성을 전달하는 메인 랜딩 페이지 상단 섹션입니다.
 * 신비로운 다크 우주 배경, 오로라 글로우, 떠오르는 한글 모티프, 고화질 비주얼 아트를 배치하여
 * 첫 방문자에게 강렬하고 감성적인 인상을 심어줍니다.
 */
export default function Hero({ onOpenContact }: HeroProps) {
  // 떠다니는 한글 글자 애니메이션 배열
  const floatingLetters = [
    { char: "ㄱ", top: "15%", left: "10%", delay: "0s", size: "text-2xl" },
    { char: "꿈", top: "25%", right: "12%", delay: "1.5s", size: "text-3xl" },
    { char: "책", top: "60%", left: "8%", delay: "2.5s", size: "text-3xl" },
    { char: "와", top: "75%", right: "10%", delay: "1s", size: "text-2xl" },
    { char: "별", top: "40%", right: "20%", delay: "3s", size: "text-xl" },
    { char: "ㅎ", top: "80%", left: "18%", delay: "2s", size: "text-2xl" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#07080D]"
    >
      {/* 배경 오로라 조명 효과 (Aurora Glows) */}
      <div className="aurora-glow-1 w-[500px] h-[500px] top-[-100px] left-[-150px] rounded-full" />
      <div className="aurora-glow-2 w-[550px] h-[550px] top-[20%] right-[-180px] rounded-full" />
      <div className="aurora-glow-3 w-[600px] h-[600px] bottom-[-200px] left-[20%] rounded-full" />

      {/* 우주 은하수 별빛 텍스처 (도트 패턴) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 부유하는 한글 파티클 (Floating Hangul Letters) */}
      {floatingLetters.map((item, idx) => (
        <span
          key={idx}
          className={`absolute font-bold text-white/15 select-none pointer-events-none floating-hangul ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
          }}
        >
          {item.char}
        </span>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 왼쪽: 메인 카피 및 CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 상단 뱃지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold text-indigo-300 mb-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Korean-American & Multilingual Learners Program</span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-6">
              책과 이야기로 피어나는 <br />
              <span className="gradient-text-primary">우리 아이의 한국어 날개</span>
            </h1>

            {/* 서브 카피 (영문 및 국문 종합) */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              <strong>K Book WOW</strong>는 재미 한인 자녀와 다국어 어린이를 위한
              <span className="text-indigo-300 font-medium"> 창의적 한국어 융합 교육</span>입니다.
              단순 암기가 아닌 나만의 동화책 만들기, 흙을 만지는 도예, 글쓰기 워크숍,
              온라인 독서 토론을 통해 아이가 스스로 말하고 쓰는 한국어의 즐거움을 깨닫습니다.
            </p>

            {/* 핵심 특징 3가지 체크리스트 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>프로젝트 기반(PBL)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>소수 정예 맞춤 피드백</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>문화 자긍심 고취</span>
              </div>
            </div>

            {/* CTA 액션 버튼 그룹 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-pink-500 hover:to-indigo-600 shadow-[0_0_30px_rgba(147,51,234,0.45)] hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span>무료 체험 수업 신청하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <span>5대 프로그램 살펴보기</span>
              </a>
            </div>

            {/* 소셜 및 학부모 신뢰 통계 칩 */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-6 sm:gap-10">
              <div>
                <div className="text-2xl font-black text-white font-['Outfit']">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  직접 창작 참여율
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="text-2xl font-black text-white font-['Outfit']">
                  6 Domains
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  읽기·쓰기·말하기 통합
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="text-2xl font-black text-white font-['Outfit']">
                  5 Programs
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  도예·동화·공예 융합
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 인터랙티브 비주얼 카드 및 포토 프레임 */}
          <div className="lg:col-span-5 relative">
            {/* 카드 배경 글로우 링 */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-pink-500/20 to-cyan-500/30 blur-2xl opacity-80" />

            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-3 shadow-2xl group">
              {/* 메인 히어로 이미지 (getImagePath 적용) */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={getImagePath("/images/hero.jpg")}
                  alt="K Book WOW 한국어 마법 동화 읽기"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                {/* 오버레이 그라디언트 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080D] via-transparent to-transparent opacity-60" />

                {/* 플로팅 배지 1 (아이가 쓴 첫 책) */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-white shadow-lg">
                  <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                  <span>아이의 상상력이 담긴 한국어</span>
                </div>

                {/* 플로팅 배지 2 (인증 마크) */}
                <div className="absolute bottom-4 right-4 bg-indigo-900/80 backdrop-blur-md border border-indigo-400/30 px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-white shadow-xl">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <div>
                    <p className="text-[10px] text-indigo-200 font-normal">Creative Enrichment</p>
                    <p>K Book WOW</p>
                  </div>
                </div>
              </div>

              {/* 하단 캡션 카드 */}
              <div className="p-4 mt-1 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                  ✨ <strong>“내가 만든 동화책과 도예 작품에 한국어 이야기를 담아요!”</strong>
                  <br />
                  <span className="text-xs text-slate-400">
                    단어 암기 위주의 수업을 넘어, 아이 스스로 성취감을 느끼는 살아있는 한국어 교육.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 스크롤 다운 가이드 아이콘 */}
      <div className="relative mt-12 flex justify-center z-10">
        <a
          href="#programs"
          className="flex flex-col items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <span>더 알아보기</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-indigo-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
