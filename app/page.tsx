"use client";

import { useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramSection from "@/components/ProgramSection";
import CompetencyRoadmap from "@/components/CompetencyRoadmap";
import PBLHighlights from "@/components/PBLHighlights";
import SocialGallery from "@/components/SocialGallery";
import Testimonials from "@/components/Testimonials";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

/**
 * K Book WOW 메인 랜딩 페이지 (app/page.tsx)
 * Next.js 및 TailwindCSS 기반의 다크 모드 랜딩 페이지 최상위 페이지 컴포넌트입니다.
 * 
 * 주요 구성 요소:
 * 1. ScrollProgress: 페이지 스크롤 진행률 인디케이터
 * 2. Navbar: 상단 글래스모피즘 네비게이션 및 모달 연동
 * 3. Hero: 메인 비주얼, 오로라 글로우 및 핵심 가치 소개
 * 4. ProgramSection: 5대 핵심 프로그램 (도예, 그림책, 글쓰기, 공예, 온라인 독서)
 * 5. CompetencyRoadmap: 6대 언어 핵심 영역 (읽기/쓰기/말하기/듣기/어휘/독해) 인터랙티브 로드맵
 * 6. PBLHighlights: 프로젝트 기반 학습(PBL)의 교육 철학
 * 7. SocialGallery: Instagram 및 Threads 공식 채널 연동 실시간 작품 갤러리
 * 8. Testimonials: 재미 한인 학부모님들의 진솔한 감동 후기
 * 9. ConsultationSection: 무료 체험 수업 신청 및 1:1 상담 폼
 * 10. Footer: 브랜드 정보, 소셜 링크, 저작권
 * 11. ContactModal: 간편 팝업 상담 신청 모달
 */
export default function Home() {
  // 상담 신청 팝업 모달 열림 상태 관리
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // 특정 프로그램 카드에서 신청하기를 눌렀을 때 전달할 프로그램 이름
  const [selectedProgramName, setSelectedProgramName] = useState<string>("전체 프로그램 상담");

  // 모달 열기 핸들러
  const handleOpenContact = (programName?: string) => {
    if (programName) {
      setSelectedProgramName(programName);
    } else {
      setSelectedProgramName("전체 프로그램 상담");
    }
    setIsContactModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#07080D] text-slate-100 selection:bg-purple-600 selection:text-white">
      {/* 1. 상단 스크롤 진행 바 */}
      <ScrollProgress />

      {/* 2. 네비게이션 헤더 */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* 3. 메인 히어로 섹션 */}
      <main>
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 4. 5대 핵심 프로그램 섹션 */}
        <ProgramSection onSelectProgram={(progName) => handleOpenContact(progName)} />

        {/* 5. 6대 언어 역량 인터랙티브 로드맵 */}
        <CompetencyRoadmap />

        {/* 6. PBL(Project-Based Learning) 교육 철학 */}
        <PBLHighlights />

        {/* 7. 수업 현장 & 학생 작품 갤러리 (Instagram/Threads) */}
        <SocialGallery />

        {/* 8. 학부모 감동 후기 */}
        <Testimonials />

        {/* 9. 무료 체험 수업 신청 폼 섹션 */}
        <ConsultationSection preselectedProgram={selectedProgramName} />
      </main>

      {/* 10. 푸터 */}
      <Footer />

      {/* 11. 간편 상담 팝업 모달 */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        defaultProgram={selectedProgramName}
      />
    </div>
  );
}
