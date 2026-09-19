"use client";

import {
  Sparkles,
  Smile,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Compass,
} from "lucide-react";

/**
 * PBLHighlights 컴포넌트
 * K Book WOW의 교육 철학인 프로젝트 기반 학습(PBL)과
 * 아이들이 자라나는 5가지 핵심 가치(자신감, 문해력, 소통, 창의성, 문화 사랑)를 보여줍니다.
 */
export default function PBLHighlights() {
  const pillars = [
    {
      icon: <Smile className="w-6 h-6 text-pink-400" />,
      title: "자신감 (Confidence)",
      description:
        "틀릴까 봐 주저하던 아이도 환하게 웃으며 먼저 한국어로 말을 건네는 따뜻하고 긍정적인 교육 환경을 만듭니다.",
      color: "from-pink-500/20 to-rose-500/5",
      border: "border-pink-500/20",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "창의성 (Creativity)",
      description:
        "정형화된 교재를 넘어 직접 동화책을 쓰고 도예를 빚으며 아이만의 독창적인 상상력을 우리말로 펼쳐냅니다.",
      color: "from-yellow-500/20 to-amber-500/5",
      border: "border-yellow-500/20",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-indigo-400" />,
      title: "소통과 공감 (Communication)",
      description:
        "또래 친구들과 협업하고 선생님과 끊임없이 상호작용하며 언어를 통한 건강한 사회적 유대감을 형성합니다.",
      color: "from-indigo-500/20 to-purple-500/5",
      border: "border-indigo-500/20",
    },
    {
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      title: "평생의 문화 사랑 (Lifelong Love)",
      description:
        "한국어는 단순한 숙제가 아닌 나의 뿌리이자 자랑스러운 날개입니다. 아이의 마음속에 평생 이어질 한국 문화에 대한 애정을 심어줍니다.",
      color: "from-cyan-500/20 to-blue-500/5",
      border: "border-cyan-500/20",
    },
  ];

  return (
    <section className="relative py-28 bg-[#090A10] overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/10 via-pink-600/10 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-semibold text-yellow-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Why Project-Based Learning?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            단순 주입이 아닌, <br />
            <span className="gradient-text-warm">아이 스스로 주인이 되는 PBL 학습</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            책을 읽고 끝나는 것이 아니라 결과물을 직접 만들어내는 성취감!
            K Book WOW의 지지적이고 몰입감 넘치는 환경에서 아이들의 한국어는 날마다 새롭게 성장합니다.
          </p>
        </div>

        {/* 4대 기둥 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl glass-card border bg-gradient-to-b ${item.color} ${item.border} flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Kbookwow Core Value</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
