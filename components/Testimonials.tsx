"use client";

import { Star, Quote, Heart } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      author: "Sarah K.",
      child: "7세 에이든 (미국 캘리포니아)",
      program: "나만의 그림책 창작 워크숍",
      stars: 5,
      content:
        "집에서는 매일 영어만 쓰던 아이라 한글을 가르치는 게 늘 큰 숙제였어요. 그런데 KBookWoW에서 직접 스토리를 짜고 만든 동화책을 할머니께 영상통화로 읽어드릴 때 온 가족이 감동했습니다. 자기가 만든 책이라며 잠잘 때도 껴안고 자요!",
    },
    {
      id: 2,
      author: "민경 M.",
      child: "9세 지후 & 6세 하은 (미국 뉴욕)",
      program: "도예 융합 온라인 수업",
      stars: 5,
      content:
        "일반 주말 한글학교는 지루해했는데, 여기서는 도예와 공예 활동이 함께 들어가니까 아이들이 먼저 '선생님 언제 만나?' 하고 물어봅니다. 선생님의 따뜻한 피드백 덕분에 한국어에 대한 거부감이 완전히 사라졌어요.",
    },
    {
      id: 3,
      author: "Jennifer P.",
      child: "8세 올리비아 (미국 텍사스)",
      program: "창의적 글쓰기 워크숍",
      stars: 5,
      content:
        "온라인 글쓰기 수업인데 선생님의 밀착 케어가 정말 훌륭합니다. 단순 단어 암기가 아니라 아이의 감정과 상상력을 한국어로 풀어낼 수 있게 이끌어주셔서 어휘력과 표현력이 눈에 띄게 풍부해졌습니다.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 bg-[#FFFDF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs font-semibold text-pink-500 mb-4">
            <Heart className="w-3.5 h-3.5 fill-pink-500" />
            <span>Stories from Our Families</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            가족의 이야기로 채워진 <br />
            <span className="gradient-text-primary">KBookWoW의 후기</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
            아이의 얼굴에 피어나는 환한 미소와 한국어에 대한 자긍심,<br className="hidden sm:block"/>
            수많은 미주 한인 가정의 생생한 변화를 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="clean-card rounded-3xl p-8 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-[var(--color-primary)]/10 group-hover:text-[var(--color-primary)]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed italic mb-8 relative z-10">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-secondary)] flex items-center justify-center font-bold text-navy shadow-sm text-sm">
                  {rev.author.substring(0, 1)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">{rev.author} 엄마</h4>
                  <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">{rev.child}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
