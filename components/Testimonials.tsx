"use client";

import { Star, Quote, Heart } from "lucide-react";

/**
 * Testimonials 컴포넌트
 * K Book WOW 프로그램을 수강한 재미 한인 및 다문화 가정 학부모님들의 솔직한 감동 후기입니다.
 */
export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      author: "Sarah K. 학부모님",
      child: "7세 에이든 (미국 캘리포니아)",
      program: "나만의 그림책 창작 워크숍",
      stars: 5,
      content:
        "집에서는 매일 영어만 쓰던 아이라 한글을 가르치는 게 늘 큰 숙제였어요. 그런데 Kbookwow에서 직접 스토리를 짜고 만든 동화책을 한국에 계신 할머니께 영상통화로 또박또박 읽어드릴 때 온 가족이 감동했습니다. 아이가 자기가 쓴 책이라며 매일 밤 안고 자요!",
    },
    {
      id: 2,
      author: "민경 M. 학부모님",
      child: "9세 지후 & 6세 하은 (미국 뉴욕)",
      program: "온라인 리딩 & 도예 융합 수업",
      stars: 5,
      content:
        "일반 주말 한글학교는 지루해해서 금방 그만뒀는데, Kbookwow는 도예와 공예, 동화책 만들기가 함께 들어가니까 아이들이 먼저 '선생님 언제 만나?' 하고 물어봅니다. 선생님의 따뜻한 칭찬과 피드백 덕분에 한국어에 대한 거부감이 완전히 사라졌어요.",
    },
    {
      id: 3,
      author: "Jennifer P. 학부모님",
      child: "8세 올리비아 (미국 텍사스)",
      program: "창의적 글쓰기 워크숍",
      stars: 5,
      content:
        "온라인으로 진행되는 글쓰기 수업인데도 선생님의 밀착 피드백이 정말 훌륭합니다. 단순한 단어 암기가 아니라 아이의 감정과 상상력을 한국어로 풀어낼 수 있게 이끌어주셔서 어휘력과 표현력이 눈에 띄게 풍부해졌습니다.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 bg-[#07080D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-4">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            <span>Stories from Our Families</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            학부모님들이 전하는 <br />
            <span className="gradient-text-primary">K Book WOW의 생생한 변화</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            아이의 얼굴에 피어나는 환한 미소와 한국어에 대한 자긍심,
            K Book WOW와 함께한 가정의 진솔한 이야기를 확인해보세요.
          </p>
        </div>

        {/* 리뷰 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-pink-500/30 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-white/10 group-hover:text-pink-400/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 별점 */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* 후기 내용 */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-8">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* 작성자 정보 */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-md text-sm">
                  {rev.author.substring(0, 1)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                  <p className="text-xs text-indigo-300 font-medium">{rev.child}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{rev.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
