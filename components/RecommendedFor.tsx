"use client";

import { CheckCircle2 } from "lucide-react";

export default function RecommendedFor() {
  const painPoints = [
    "아이가 한국말은 조금 알아듣지만, 대답은 영어로 해요.",
    "할머니·할아버지와 더 자연스럽게 대화하길 바라요.",
    "한글을 억지로 외우기보다 놀이처럼 즐겁게 시작했으면 해요.",
    "한국 문화와 가족의 이야기를 아이가 자기 경험으로 느끼면 좋겠어요.",
    "바쁜 일정 속에서도 꾸준히 참여할 수 있는 수업이 필요해요.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            이런 고민, 해보신 적 있나요?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            KBookWoW는 미주 한인 부모님들의 고민에서 출발했습니다.
          </p>
        </div>

        <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-12 border border-[var(--color-primary)]/10 shadow-sm relative overflow-hidden">
          {/* 장식용 따옴표 */}
          <div className="absolute -top-6 -left-6 text-[120px] text-[var(--color-primary)]/5 font-serif leading-none select-none">
            "
          </div>
          
          <ul className="space-y-6 relative z-10">
            {painPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span className="text-navy font-medium text-base sm:text-lg">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-[var(--text-secondary)]">
              우리 수업은 <strong className="text-navy">‘한국어가 서툰 아이’</strong>도 부담 없이 참여할 수 있습니다. <br className="hidden sm:block" />
              아이의 성향과 속도에 맞춰 자연스럽게 한국어와 연결되도록 돕습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
