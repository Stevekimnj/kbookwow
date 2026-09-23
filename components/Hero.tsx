"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import { getImagePath } from "@/lib/utils";

interface HeroProps {
  onOpenContact: () => void;
}

/**
 * Hero 컴포넌트
 * KBookWoW의 "Storybook Discovery" 감성을 전달하는 메인 랜딩 페이지 상단 섹션입니다.
 * 밝고 따뜻한 아이보리 배경, 라벤더 네이비 톤의 텍스트, 그리고 아이들의 실제 활동 모습(또는 창작물)을
 * 배치하여 부모에게 신뢰감과 편안함을 제공합니다.
 */
export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[var(--bg-main)]"
    >
      {/* 부드러운 파스텔 장식 원형 (Background Blobs) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      
      {/* 귀여운 장식 요소 (별, 행성, 책 등) */}
      <div className="absolute top-[20%] right-[10%] w-8 h-8 opacity-60 soft-float" style={{ animationDelay: '0s' }}>
        <Sparkles className="text-yellow-400 w-full h-full" />
      </div>
      <div className="absolute top-[60%] left-[5%] w-6 h-6 opacity-60 soft-float" style={{ animationDelay: '1.5s' }}>
        <Heart className="text-pink-300 w-full h-full fill-pink-300/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* 왼쪽: 메인 카피 및 CTA */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* 상단 뱃지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--color-primary)]/20 text-xs sm:text-sm font-semibold text-[var(--color-primary)] mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span>3–10세 · 소그룹 · 창작 활동 중심</span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] mb-6 text-navy">
              책과 이야기로 피어나는 <br />
              <span className="gradient-text-primary">우리 아이의 한국어 날개</span>
            </h1>

            {/* 서브 카피 */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed mb-4 max-w-xl">
              놀이처럼 즐겁게, 가족과 더 깊이 연결되는 한국어 시간. <br className="hidden sm:block" />
              <span className="text-[var(--color-primary)] font-semibold">한국어가 처음이어도 괜찮아요.</span> 
            </p>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-10 max-w-xl">
              이야기, 만들기, 대화로 자연스럽게 시작합니다.
            </p>

            {/* 핵심 특징 아이콘 가이드 */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-10">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-1">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-navy">소그룹 맞춤</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 mb-1">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-navy">그림책 베이스</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-400 mb-1">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-navy">가족과의 연결</span>
              </div>
            </div>

            {/* CTA 액션 버튼 */}
            <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[var(--color-primary)] hover:bg-[#585ca3] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group w-full sm:w-auto"
              >
                <span>무료 체험 수업 신청하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 오른쪽: 이미지 포토 프레임 (실사 중심) */}
          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            {/* 장식용 프레임 배경 */}
            <div className="absolute top-4 -right-4 w-full h-full bg-[var(--color-secondary)]/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-[var(--color-accent)]/30 rounded-3xl -z-10" />
            
            <div className="relative rounded-3xl overflow-hidden clean-card p-2 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                {/* 
                  NOTE: 추후 실제 수업 사진이나 아이가 책/도자기를 들고 웃는 실사 이미지로 교체 권장. 
                  임시로 기존 hero.jpg 사용 (또는 새로 생성된 이미지 사용)
                */}
                <Image
                  src={getImagePath("/images/moment_bright.jpg")}
                  alt="KBookWoW 그림책 만들기 수업"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                
                {/* 플로팅 리뷰 배지 */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg max-w-[220px]">
                  <div className="flex-shrink-0">
                    <span className="text-xl">👩‍👧</span>
                  </div>
                  <p className="text-[11px] font-medium text-navy leading-tight">
                    "자기가 만든 책이라며<br/>할머니한테 먼저 한국어로 자랑해요!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
