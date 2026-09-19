"use client";

import { useState } from "react";
import {
  BookOpenCheck,
  Edit3,
  Mic,
  Headphones,
  FileText,
  Brain,
  Sparkles,
  Check,
} from "lucide-react";

interface Competency {
  id: string;
  name: string;
  english: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  description: string;
  howWeNurture: string;
  milestones: string[];
}

/**
 * CompetencyRoadmap 컴포넌트
 * K Book WOW의 6대 핵심 언어 영역(읽기, 쓰기, 말하기, 듣기, 어휘, 독해)이
 * 프로젝트 기반 학습(PBL)을 통해 어떻게 유기적으로 성장하는지 시각화합니다.
 */
export default function CompetencyRoadmap() {
  const [activeTab, setActiveTab] = useState<string>("reading");

  // 6대 핵심 영역 데이터
  const competencies: Competency[] = [
    {
      id: "reading",
      name: "읽기",
      english: "Reading",
      icon: <BookOpenCheck className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
      description:
        "기초 한글 음가 결합부터 재미있는 동화, 전래동화의 맥락을 스스로 소리 내어 유창하게 읽어내는 능력을 기릅니다.",
      howWeNurture:
        "다양한 수준별 그림책을 교사와 함께 소리 내어 읽고(Read Aloud), 흥미진진한 대화형 독서로 활자에 대한 친근감을 심어줍니다.",
      milestones: [
        "자음·모음 및 받침 글자 정확한 식별 및 음독",
        "호흡과 억양을 살린 실감 나는 낭독 훈련",
        "문맥을 통한 미지의 단어 유추 능력",
      ],
    },
    {
      id: "writing",
      name: "쓰기",
      english: "Writing",
      icon: <Edit3 className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      glowColor: "rgba(147, 51, 234, 0.4)",
      description:
        "단순 베껴 쓰기를 넘어, 자신의 생각과 상상을 우리말 문장과 문단으로 구성하는 창의적 작문력을 키웁니다.",
      howWeNurture:
        "그림책 제작 프로젝트, 짧은 시 짓기, 친구에게 보내는 편지 쓰기 등 아이의 눈높이에 맞춘 살아있는 쓰기 활동을 진행합니다.",
      milestones: [
        "올바른 획순과 맞춤법, 띄어쓰기 기본 습득",
        "감정 표현과 오감 묘사가 담긴 문장 구성",
        "도입-전개-결말이 갖춰진 짧은 동화책 집필",
      ],
    },
    {
      id: "speaking",
      name: "말하기",
      english: "Speaking",
      icon: <Mic className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
      description:
        "한국어로 자신의 생각과 느낌을 당당하고 자연스럽게 표현할 수 있는 소통의 자신감을 길러줍니다.",
      howWeNurture:
        "친근하고 지지해주는 소그룹 분위기에서 책 이야기 나누기, 작품 발표회(Show & Tell), 즉흥 롤플레잉을 진행합니다.",
      milestones: [
        "일상 회화를 넘어 자신의 의견을 조리 있게 피력",
        "또래 친구들과 우리말로 활발하게 질문하고 답변",
        "완성된 자신의 프로젝트를 한국어로 자랑스럽게 발표",
      ],
    },
    {
      id: "listening",
      name: "듣기",
      english: "Listening",
      icon: <Headphones className="w-6 h-6" />,
      color: "from-amber-500 to-yellow-500",
      glowColor: "rgba(245, 158, 11, 0.4)",
      description:
        "한국어의 고유한 뉘앙스와 말하는 이의 의도, 이야기의 핵심 줄거리를 집중력 있게 경청하고 이해하는 귀를 엽니다.",
      howWeNurture:
        "선생님의 생동감 넘치는 구연동화와 전래이야기 오디오 스토리텔링을 통해 귀를 훈련하고 상상력을 자극합니다.",
      milestones: [
        "복합적인 지시사항을 우리말로 정확히 듣고 수행",
        "이야기의 인과관계와 화자의 감정 파악",
        "타인의 발표를 경청하고 공감하는 태도 형성",
      ],
    },
    {
      id: "vocabulary",
      name: "어휘",
      english: "Vocabulary",
      icon: <FileText className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      description:
        "일상 회화 단어뿐 아니라 감정 어휘, 자연과 문화 어휘, 비유적 표현을 폭넓게 습득하여 표현의 깊이를 더합니다.",
      howWeNurture:
        "도예와 공예 작업 중 촉각 어휘(미끌미끌, 찰진, 둥글둥글) 및 그림책 속 의성어·의태어를 온몸으로 체득합니다.",
      milestones: [
        "풍부한 형용사, 부사 및 감정 어휘 구사",
        "다양한 한국 문화 고유 명칭과 일상 언어 이해",
        "문맥에 어울리는 적절한 어휘 선택 능력",
      ],
    },
    {
      id: "comprehension",
      name: "독해",
      english: "Comprehension",
      icon: <Brain className="w-6 h-6" />,
      color: "from-violet-500 to-fuchsia-500",
      glowColor: "rgba(139, 92, 246, 0.4)",
      description:
        "글의 표면적 의미를 넘어 숨겨진 주제를 파악하고, 비판적·창의적으로 사고할 수 있는 깊이 있는 문해력을 완성합니다.",
      howWeNurture:
        "‘왜 주인공은 그렇게 행동했을까?’, ‘내가 주인공이라면?’ 등 깊이 있는 질문을 던져 아이 스스로 통찰하도록 유도합니다.",
      milestones: [
        "핵심 주제 및 중심 문장 파악",
        "글의 내용과 자신의 경험을 연결짓는 심층 독서",
        "열린 결말을 유추하고 새로운 전개를 상상하는 비판적 사고",
      ],
    },
  ];

  const currentComp =
    competencies.find((c) => c.id === activeTab) || competencies[0];

  return (
    <section id="roadmap" className="relative py-28 bg-[#07080D]">
      {/* 배경 장식 */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>6 Core Literacy Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            체계적인 <span className="gradient-text-korean">6대 핵심 언어 역량</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            언어의 모든 영역이 균형 있게 자라납니다.
            K Book WOW의 융합 커리큘럼은 6가지 언어 영역을 촘촘히 엮어 완전한 한국어 리터러시를 완성합니다.
          </p>
        </div>

        {/* 6대 역량 탭 버튼 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {competencies.map((comp) => {
            const isActive = activeTab === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setActiveTab(comp.id)}
                className={`relative p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border text-center ${
                  isActive
                    ? "bg-white/10 border-white/30 shadow-[0_0_25px_rgba(168,85,247,0.3)] scale-105"
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15 text-slate-400"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr ${comp.color} shadow-lg`}
                >
                  {comp.icon}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {comp.name}
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider font-['Outfit']">
                  {comp.english}
                </div>
                {isActive && (
                  <span className="absolute bottom-1 w-8 h-1 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* 선택된 역량 상세 인포그래픽 카드 */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          {/* 부드러운 백그라운드 오로라 링 */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-40 transition-colors duration-500"
            style={{ backgroundColor: currentComp.glowColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 왼쪽: 설명 및 교육 방법 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-pink-400" />
                {currentComp.english} Domain Mastery
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentComp.name} 역량:{" "}
                <span className="gradient-text-primary">
                  {currentComp.description}
                </span>
              </h3>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  💡 K Book WOW만의 교육 방식
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentComp.howWeNurture}
                </p>
              </div>
            </div>

            {/* 오른쪽: 핵심 도달 지표 (Milestones) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F1322] to-[#141A2E] p-6 rounded-2xl border border-white/10 shadow-xl">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>주요 성장 성취 지표</span>
              </h4>
              <div className="space-y-3">
                {currentComp.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {milestone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
