"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  Heart,
  X,
} from "lucide-react";
import { InstagramIcon, ThreadsIcon } from "@/components/Icons";
import { getImagePath } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  likes: number;
  caption: string;
  source: "instagram" | "threads";
}

export default function SocialGallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "“숲속 친구들의 모험” 나만의 첫 한국어 동화책 완성!",
      category: "동화책 창작",
      image: getImagePath("/images/program_storybook.jpg"),
      likes: 128,
      caption:
        "7세 윤진 학생이 8주 동안 직접 쓰고 그린 첫 한국어 그림책! 책 제목부터 주인공 동물들의 대사까지 모두 예쁜 우리말로 완성했습니다 📖✨ #Kbookwow #그림책만들기",
      source: "instagram",
    },
    {
      id: "gal-2",
      title: "흙과 교감하는 도예 시간, 한글 도자기 그릇 빚기",
      category: "도예 융합",
      image: getImagePath("/images/program_pottery.jpg"),
      likes: 142,
      caption:
        "물레를 돌리며 부드러운 흙의 촉감을 느끼고, 그릇 바닥에 자신의 한글 이름을 새겨 넣었어요. 살아있는 오감 융합 한국어 수업 현장입니다 🏺💖 #도예한국어",
      source: "threads",
    },
    {
      id: "gal-3",
      title: "랜선 너머로 웃음꽃 피어나는 1:1 온라인 리딩 수업",
      category: "온라인 클래스",
      image: getImagePath("/images/program_online.jpg"),
      likes: 95,
      caption:
        "미국 동부와 서부 어디서든 편안하게 접속하는 화상 한국어! 선생님과 눈 맞추며 동화 속 어휘 카드를 맞추는 즐거운 시간 💻🌟 #재미한인한국어",
      source: "instagram",
    },
    {
      id: "gal-4",
      title: "알록달록 전통 한지와 부채 만들기 문화 체험",
      category: "전통 공예",
      image: getImagePath("/images/program_craft.jpg"),
      likes: 110,
      caption:
        "붓글씨로 써 내려간 소원과 오색 한지로 꾸민 전통 부채! 우리 조상들의 지혜와 한국의 전통 색채미를 직접 체험했습니다 🎎🎨 #한국문화체험",
      source: "instagram",
    },
    {
      id: "gal-5",
      title: "생각을 문장으로 꽃피우는 창의적 글쓰기 시간",
      category: "창의 글쓰기",
      image: getImagePath("/images/program_writing.jpg"),
      likes: 88,
      caption:
        "“나의 꿈꾸는 이야기 책” - 지우 학생의 반짝반짝 빛나는 상상력이 담긴 한글 일기장입니다. 스티커도 붙이고 문장도 예쁘게 다듬었어요 ✍️🌈 #글쓰기워크숍",
      source: "threads",
    },
    {
      id: "gal-6",
      title: "따사로운 햇살처럼 피어나는 우리 아이들의 한국어 여정",
      category: "Kbookwow 모먼트",
      image: getImagePath("/images/moment_bright.jpg"),
      likes: 175,
      caption:
        "책과 함께 따뜻한 오후의 햇살을 닮은 우리 아이들의 미소. KBookWoW와 함께 스스로 말하고 즐겁게 읽는 한국어의 기쁨을 시작해보세요! ✨📚 #KBookWoW",
      source: "threads",
    },
  ];

  return (
    <section id="gallery" className="relative py-28 bg-[#FFFDF8]">
      {/* 배경 장식 */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[var(--color-primary)]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-xs font-semibold text-[var(--color-primary)] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Classroom Moments & Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
              K Book WOW <span className="gradient-text-primary">수업 현장 & 학생 갤러리</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal mt-3 max-w-2xl">
              아이들이 직접 손으로 만들고 완성한 감동의 순간들!
              공식 Instagram과 Threads에서 더 많은 실시간 수업 소식을 만나보실 수 있습니다.
            </p>
          </div>

          {/* 공식 소셜 링크 버튼 */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/kbookwow/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(236,72,153,0.3)] hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@kbookwow Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.threads.com/@kbookwow?xmt=AQG0oellG63L68OHc9nkuXkxfX950WnVa-CCW6EoVWVH6s4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-navy bg-white hover:bg-gray-50 border border-gray-200 transition-all hover:scale-105 shadow-sm"
            >
              <ThreadsIcon className="w-4 h-4 text-slate-800" />
              <span>Threads</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 갤러리 사진 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden clean-card bg-white border border-gray-100 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* 이미지 썸네일 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-semibold text-navy bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                    🔍 크게 보기
                  </span>
                </div>

                {/* 소셜 배지 및 카테고리 */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-navy bg-white/90 backdrop-blur-md shadow-sm border border-white/50">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="p-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-white/50 flex items-center justify-center text-navy">
                    {item.source === "instagram" ? (
                      <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                    ) : (
                      <ThreadsIcon className="w-3.5 h-3.5 text-slate-800" />
                    )}
                  </span>
                </div>
              </div>

              {/* 본문 캡션 */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-navy mb-2 line-clamp-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                {/* 하단 좋아요 & 공유 */}
                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                  <div className="flex items-center gap-1 text-pink-500">
                    <Heart className="w-3.5 h-3.5 fill-pink-500" />
                    <span>{item.likes} Likes</span>
                  </div>
                  <span className="hover:text-[var(--color-primary)] transition-colors">
                    자세히 보기 &gt;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 라이트박스 모달 팝업 */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in-up"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-gray-500 hover:text-navy hover:bg-white border border-gray-200 shadow-sm"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 모달 이미지 */}
            <div className="relative md:w-3/5 aspect-square md:aspect-auto h-72 md:h-auto bg-gray-100">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
            </div>

            {/* 모달 텍스트 및 SNS 정보 */}
            <div className="p-6 md:w-2/5 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-['Outfit'] font-medium">
                    {activeItem.source === "instagram" ? "@kbookwow Instagram" : "@kbookwow Threads"}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 whitespace-pre-line font-medium">
                  {activeItem.caption}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href={
                    activeItem.source === "instagram"
                      ? "https://www.instagram.com/kbookwow/"
                      : "https://www.threads.com/@kbookwow"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-500 hover:text-pink-600"
                >
                  <span>공식 계정에서 확인</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
