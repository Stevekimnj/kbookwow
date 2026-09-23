"use client";

import { BookOpen, MessageCircle, Paintbrush, HeartHandshake } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      id: "01",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "책을 만나요",
      description: "한국어 그림책과 이야기에 빠져들어요. 억지로 글자를 외우는 대신, 흥미로운 스토리가 아이의 상상력을 자극합니다.",
      bgColor: "bg-indigo-500",
    },
    {
      id: "02",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "말로 표현해요",
      description: "질문하고, 듣고, 내 이야기를 말해요. 소그룹 환경에서 선생님의 따뜻한 피드백을 받으며 자신감이 자라납니다.",
      bgColor: "bg-pink-400",
    },
    {
      id: "03",
      icon: <Paintbrush className="w-8 h-8 text-white" />,
      title: "손으로 만들어요",
      description: "미술, 공예, 도자기 활동으로 이야기를 확장해요. 아이가 직접 만든 결과물은 한국어 학습에 강력한 성취감을 줍니다.",
      bgColor: "bg-[var(--color-secondary)]", // 하늘빛
    },
    {
      id: "04",
      icon: <HeartHandshake className="w-8 h-8 text-white" />,
      title: "가족과 이어져요",
      description: "집에서도 이어지는 단어와 대화가 생겨요. 수업에서 배운 내용이 자연스럽게 할머니, 할아버지와의 대화로 이어집니다.",
      bgColor: "bg-[var(--color-primary)]",
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase mb-2 block">
            Core Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            KBookWoW만의 차별화된 4단계 여정
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            단순히 언어 능력만 키우는 것이 아닙니다.<br/>
            언어, 창작, 정체성, 그리고 가족의 연결을 하나의 경험으로 묶어냅니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              {/* 연결선 (데스크탑에서만) */}
              {step.id !== "04" && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-200 -z-10" />
              )}
              
              <div className="clean-card p-8 h-full flex flex-col items-center text-center relative overflow-hidden">
                {/* 배경 워터마크 숫자 */}
                <div className="absolute -bottom-4 -right-2 text-8xl font-black text-gray-50 opacity-50 select-none pointer-events-none">
                  {step.id}
                </div>
                
                <div className={`w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 shadow-md transform group-hover:-translate-y-2 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
