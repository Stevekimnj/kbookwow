"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Palette,
  PenTool,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle,
  X,
} from "lucide-react";
import { getImagePath } from "@/lib/utils";

interface Program {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  accentColor: string;
  badgeColor: string;
  details: {
    target: string;
    format: string;
    outcomes: string[];
    curriculum: string;
  };
}

interface ProgramSectionProps {
  onSelectProgram: (programName: string) => void;
}

export default function ProgramSection({ onSelectProgram }: ProgramSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      id: "online-reading",
      title: "온라인 한국어 읽기 & 쓰기",
      subtitle: "Online Korean Reading & Writing",
      badge: "핵심 기초 & 심화",
      badgeColor: "from-blue-400 to-cyan-300 text-white",
      accentColor: "border-cyan-100 hover:border-cyan-300",
      description:
        "재미 한인 및 다국어 학습자의 레벨에 맞춘 소수정예 인터랙티브 온라인 수업. 풍부한 한국어 그림책을 함께 읽고 질문하며, 독해력·어휘력·표현력을 탄탄하게 다집니다.",
      image: getImagePath("/images/program_online.jpg"),
      icon: <BookOpen className="w-5 h-5 text-cyan-500" />,
      details: {
        target: "유치부(K) ~ 초등/중등 (레벨별 맞춤 반 편성)",
        format: "실시간 Zoom 인터랙티브 화상 수업 (주 1~2회, 50분)",
        outcomes: [
          "자음/모음 기초 파닉스부터 문단 독해 완성",
          "동화 속 상황 토론을 통한 말하기 자신감 향상",
          "스스로 문장을 구성하고 간단한 일기/독후감 쓰기",
        ],
        curriculum:
          "선정 도서 낭독 → 어휘 탐구 및 문맥 파악 → 질문 기반 생각 나누기 → 독후 워크시트 작성 & 발표",
      },
    },
    {
      id: "storybook-creation",
      title: "나만의 그림책 창작 워크숍",
      subtitle: "Storybook Creation Project",
      badge: "인기 시그니처",
      badgeColor: "from-pink-400 to-rose-300 text-white",
      accentColor: "border-pink-100 hover:border-pink-300",
      description:
        "아이가 작가이자 일러스트레이터가 됩니다! 스스로 이야기를 짓고 우리말로 문장을 다듬으며, 직접 그린 그림과 함께 실물 책으로 출판하는 특별한 성취감을 선물합니다.",
      image: getImagePath("/images/program_storybook.jpg"),
      icon: <Palette className="w-5 h-5 text-pink-500" />,
      details: {
        target: "만 6세 이상 어린이 및 청소년",
        format: "8주 ~ 12주 정규 프로젝트 워크숍 (온/오프라인)",
        outcomes: [
          "세상에 단 하나뿐인 실제 하드커버 그림책 출간",
          "서사 구조(발단-전개-결말)를 이해하는 스토리텔링 역량",
          "내 생각과 감정을 우리말 언어와 그림으로 종합 표현",
        ],
        curriculum:
          "캐릭터 & 플롯 구상 → 스토리보드 스케치 → 한글 텍스트 작성 & 퇴고 → 채색 및 제본 완성",
      },
    },
    {
      id: "creative-writing",
      title: "창의적 글쓰기 워크숍",
      subtitle: "Creative Writing Workshops",
      badge: "표현력 강화",
      badgeColor: "from-amber-400 to-orange-300 text-white",
      accentColor: "border-amber-100 hover:border-amber-300",
      description:
        "시, 짧은 동화, 편지, 일기 등 자유로운 글쓰기를 통해 우리말의 뉘앙스를 체득합니다. 틀에 갇히지 않은 개성 넘치는 문장력을 길러줍니다.",
      image: getImagePath("/images/program_writing.jpg"),
      icon: <PenTool className="w-5 h-5 text-amber-500" />,
      details: {
        target: "초등 2학년 이상 어린이 및 이중언어 학습자",
        format: "소그룹 온라인 & 오프라인 워크숍",
        outcomes: [
          "다양한 감정과 오감을 묘사하는 풍부한 어휘 구사",
          "한국어 맞춤법, 띄어쓰기, 문장 부호 자연스러운 체득",
          "자신의 의견을 논리적이고 창의적으로 서술하는 힘",
        ],
        curriculum:
          "매주 새로운 창작 주제 제시 → 브레인스토밍 마인드맵 → 글쓰기 실습 → 또래 친구들과 작품 공유 및 교정",
      },
    },
    {
      id: "culture-craft",
      title: "한국 문화 & 전통 공예 활동",
      subtitle: "Korean Culture & Craft Activities",
      badge: "문화적 자긍심",
      badgeColor: "from-emerald-400 to-teal-300 text-white",
      accentColor: "border-emerald-100 hover:border-emerald-300",
      description:
        "전통 한지 공예, 전통 부채 만들기, 매듭, 명절 민속놀이와 전래동화를 결합하여 우리 문화의 아름다움을 온몸으로 느끼는 생생한 체험형 수업입니다.",
      image: getImagePath("/images/program_craft.jpg"),
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
      details: {
        target: "유아 및 초등 전 연령 (가족 동반 가능)",
        format: "시즌별 테마 특강 & 공예 키트 배송 결합",
        outcomes: [
          "한국 전통 문화와 역사에 대한 흥미와 친밀감 형성",
          "손끝으로 만드는 조형 감각과 창의적 두뇌 발달",
          "다문화 환경 속에서 확고한 문화적 정체성 확립",
        ],
        curriculum:
          "한국 설날/추석/전래동화 스토리텔링 → 전통 미술 기법 체험 → 나만의 전통 공예품 완성",
      },
    },
    {
      id: "pottery-learning",
      title: "도예 기반 한국어 융합 수업",
      subtitle: "Pottery-based Learning",
      badge: "Kbookwow 독창적 융합",
      badgeColor: "from-purple-400 to-indigo-300 text-white",
      accentColor: "border-purple-100 hover:border-purple-300",
      description:
        "초벌 도자기 컵과 그릇을 캔버스 삼아, 한국어 글귀와 그림으로 나만의 작품을 완성합니다.우리말을 눈으로 보고 손으로 표현하며, 언어와 예술이 만나는 시간을 경험해 보세요.",
      image: getImagePath("/images/program_pottery.jpg"),
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      details: {
        target: "만 5세 이상 어린이 및 청소년",
        format: "오프라인 아틀리에 스튜디오 소수 정예 세션",
        outcomes: [
          "입체적인 도자기 표면에 그림을 그리며 미적 감각 향상",
          "예쁜 우리말 단어와 문장을 디자인하며 한글과 친밀감 형성",
          "실제 실생활에서 쓸 수 있는 나만의 도자기 식기/오브제 제작",
        ],
        curriculum:
          "초벌 기물(컵/그릇) 선택 → 한국어 문구 및 디자인 스케치 → 도자기 전용 물감 페인팅 → 나만의 작품 완성",
      },
    },
  ];

  return (
    <section id="programs" className="relative py-28 bg-[var(--bg-main)]">
      {/* 장식용 은은한 배경 광원 */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-primary)]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 상단 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-xs font-semibold text-[var(--color-primary)] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5 Enriching Core Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            오감을 깨우는 <span className="gradient-text-primary">K Book WOW의 5대 프로그램</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            책 읽기부터 그림책 출판, 글쓰기, 전통 공예, 그리고 흙을 만지는 도예까지—
            아이들의 상상력과 흥미에 맞춰 입체적으로 설계된 프리미엄 한국어 커리큘럼입니다.
          </p>
        </div>

        {/* 5대 프로그램 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`group relative rounded-3xl overflow-hidden clean-card border bg-white transition-all duration-300 flex flex-col ${prog.accentColor}`}
            >
              {/* 카드 상단 이미지 영역 */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* 뱃지 */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${prog.badgeColor} shadow-sm`}
                  >
                    {prog.badge}
                  </span>
                </div>
              </div>

              {/* 카드 본문 영역 */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-['Outfit']">
                    {prog.icon}
                    <span>{prog.subtitle}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-6">
                    {prog.description}
                  </p>
                </div>

                {/* 하단 인터랙션 버튼 */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:text-pink-500 transition-colors"
                  >
                    <span>커리큘럼 상세 보기</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onSelectProgram(prog.title)}
                    className="px-4 py-2 rounded-full text-xs font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    수업 신청
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 프로그램 상세 보기 팝업 모달 */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm animate-fade-in-up">
          <div className="relative w-full max-w-2xl bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-gray-500 hover:text-navy border border-gray-200 shadow-sm"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 모달 상단 헤더 이미지 */}
            <div className="relative h-56 w-full">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold text-[var(--color-secondary)] tracking-wider">
                  {selectedProgram.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            {/* 모달 본문 상세 */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  프로그램 소개
                </h4>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {selectedProgram.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                  <div className="text-xs font-bold text-[var(--color-primary)] mb-1">
                    추천 대상
                  </div>
                  <div className="text-sm font-semibold text-navy">
                    {selectedProgram.details.target}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-pink-50 border border-pink-100">
                  <div className="text-xs font-bold text-pink-500 mb-1">
                    수업 방식
                  </div>
                  <div className="text-sm font-semibold text-navy">
                    {selectedProgram.details.format}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  기대 학습 효과
                </h4>
                <div className="space-y-2">
                  {selectedProgram.details.outcomes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  주요 커리큘럼 흐름
                </h4>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-medium text-[var(--text-secondary)]">
                  {selectedProgram.details.curriculum}
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  닫기
                </button>
                <button
                  onClick={() => {
                    const name = selectedProgram.title;
                    setSelectedProgram(null);
                    onSelectProgram(name);
                  }}
                  className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[var(--color-primary)] shadow-md hover:bg-[#585ca3] hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  이 프로그램 상담 신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
