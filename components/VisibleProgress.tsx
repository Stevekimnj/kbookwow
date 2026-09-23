"use client";

import { Sparkles } from "lucide-react";

export default function VisibleProgress() {
  const progresses = [
    {
      emoji: "🗣️",
      text: "한국어로 한두 마디라도 먼저 말해보려 해요."
    },
    {
      emoji: "📚",
      text: "책 속 단어를 집에서 다시 이야기해요."
    },
    {
      emoji: "🎨",
      text: "한국 문화가 낯선 숙제가 아니라 재미있는 경험이 돼요."
    },
    {
      emoji: "👨‍👩‍👧",
      text: "가족과 나누는 한국어 대화가 조금씩 늘어나요."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 장식용 배경 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            부모님이 발견하는 <br className="sm:hidden" /> 작지만 확실한 변화
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            거창한 성과가 아니라, 일상 속에서 관찰할 수 있는 성장을 약속합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {progresses.map((item, idx) => (
            <div 
              key={idx}
              className="clean-card p-6 flex items-start gap-4 hover:border-[var(--color-primary)]/30 hover:bg-indigo-50/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--bg-main)] flex items-center justify-center text-2xl shrink-0 shadow-sm border border-[var(--border-card)]">
                {item.emoji}
              </div>
              <div className="pt-2 flex-1">
                <p className="text-navy font-semibold text-[15px] sm:text-base leading-snug">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>KBookWoW와 함께하는 아이들의 실제 이야기입니다</span>
          </div>
        </div>
      </div>
    </section>
  );
}
