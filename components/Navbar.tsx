"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, BookOpen } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

/**
 * Navbar 컴포넌트
 * 반투명 블러 효과(Glassmorphism)가 적용된 반응형 상단 헤더입니다.
 * 사용자가 스크롤을 내릴 때 배경이 더 짙어지며 은은한 네온 경계선이 나타납니다.
 */
export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 20px 이상 스크롤되면 헤더 스타일 강화
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 네비게이션 메뉴 항목 리스트
  const navLinks = [
    { name: "소개", href: "#about" },
    { name: "5대 프로그램", href: "#programs" },
    { name: "6대 역량 로드맵", href: "#roadmap" },
    { name: "수업 현장 & 갤러리", href: "#gallery" },
    { name: "학부모 후기", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080D]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 브랜드 로고 */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[2px] shadow-[0_0_20px_rgba(147,51,234,0.4)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] transition-all duration-300">
              <div className="w-full h-full bg-[#090A10] rounded-[10px] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-indigo-300 group-hover:text-pink-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                  K Book
                </span>
                <span className="px-1.5 py-0.5 text-xs font-black rounded bg-gradient-to-r from-pink-500 to-indigo-500 text-white tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                  WOW
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 tracking-wide">
                창의적 어린이 한국어
              </span>
            </div>
          </a>

          {/* 데스크톱 메뉴 링크 */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* 오른쪽 액션 버튼 (상담 및 무료 체험 신청) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500" />
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="w-4 h-4 relative z-10 text-yellow-300 animate-spin-slow" />
              <span className="relative z-10">무료 체험 신청하기</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* 모바일 햄버거 토글 버튼 */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="메뉴 열기/닫기"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-pink-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 슬라이드 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D15]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-indigo-600 to-pink-600 shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                무료 체험 및 수강 상담 신청
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
