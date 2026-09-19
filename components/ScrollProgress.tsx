"use client";

import { useEffect, useState } from "react";

/**
 * ScrollProgress 컴포넌트
 * 사용자가 페이지를 아래로 스크롤할 때 최상단에 부드러운 네온 그라디언트 진행률 바를 표시합니다.
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 전체 스크롤 가능한 높이 계산
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        // 현재 스크롤 비율 (0 ~ 100%)
        const currentProgress = (window.scrollY / totalScrollHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(168,85,247,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
