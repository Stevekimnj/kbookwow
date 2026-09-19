"use client";

import { BookOpen, Heart, ArrowUp } from "lucide-react";
import { InstagramIcon, ThreadsIcon } from "@/components/Icons";

/**
 * Footer 컴포넌트
 * K Book WOW 브랜드 정보, 소셜 채널 링크, 저작권 및 상단 이동 버튼을 포함합니다.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05060A] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* 브랜드 정보 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-['Outfit']">
                K Book <span className="text-pink-400">WOW</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              K Book WOW는 한국계 미국인 어린이와 다국어 학습자를 위한
              창의적 한국어 융합 교육 프로그램입니다. 책과 글쓰기, 예술과 문화 체험을 통해
              평생 이어지는 한국어 사랑을 심어줍니다.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/kbookwow/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-pink-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.threads.com/@kbookwow?xmt=AQG0oellG63L68OHc9nkuXkxfX950WnVa-CCW6EoVWVH6s4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-cyan-400 hover:text-white transition-colors"
                aria-label="Threads"
              >
                <ThreadsIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 5대 프로그램 빠른 링크 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              5대 프로그램
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#programs" className="hover:text-indigo-300 transition-colors">
                  온라인 읽기 & 쓰기
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-indigo-300 transition-colors">
                  나만의 그림책 창작
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-indigo-300 transition-colors">
                  창의적 글쓰기 워크숍
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-indigo-300 transition-colors">
                  한국 문화 & 전통 공예
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-indigo-300 transition-colors">
                  도예 기반 융합 수업
                </a>
              </li>
            </ul>
          </div>

          {/* 주요 카테고리 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              안내 및 바로가기
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-indigo-300 transition-colors">
                  K Book WOW 소개
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-indigo-300 transition-colors">
                  6대 언어 역량 로드맵
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-indigo-300 transition-colors">
                  수업 현장 & 학생 갤러리
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-indigo-300 transition-colors">
                  학부모 추천 후기
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-300 transition-colors">
                  무료 체험 수업 신청
                </a>
              </li>
            </ul>
          </div>

          {/* 교육 철학 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              교육 철학
            </h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Project-Based Learning (PBL) 방식으로 아이가 스스로 성취감을 느끼는
              즐겁고 따뜻한 한국어 배움의 터전을 지향합니다.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ✨ 1:1 맞춤 피드백 시스템
              </span>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 & 맨 위로 가기 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {new Date().getFullYear()} K Book WOW. All rights reserved. Creative Korean Language Enrichment.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for bilingual children
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              aria-label="맨 위로 이동"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
