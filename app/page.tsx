"use client";

import { useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecommendedFor from "@/components/RecommendedFor";
import ProcessSteps from "@/components/ProcessSteps";
import VisibleProgress from "@/components/VisibleProgress";
import ProgramSection from "@/components/ProgramSection";
import SocialGallery from "@/components/SocialGallery";
import Testimonials from "@/components/Testimonials";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

/**
 * KBookWoW 메인 랜딩 페이지 (app/page.tsx)
 * 
 * 미주 한인 부모님들의 니즈에 맞춘 'Storybook Discovery' 테마 랜딩페이지.
 * "따뜻함(감성) + 명확한 신뢰성(정보)"을 중심으로 정보 구조를 재배치했습니다.
 */
export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProgramName, setSelectedProgramName] = useState<string>("무료 체험 수업 신청");

  const handleOpenContact = (programName?: string) => {
    if (programName) {
      setSelectedProgramName(programName);
    } else {
      setSelectedProgramName("무료 체험 수업 신청");
    }
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      <ScrollProgress />
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main>
        {/* 1. 첫 5초의 결정을 돕는 히어로 섹션 */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 2. 부모의 고민을 직접적으로 짚어주는 섹션 */}
        <RecommendedFor />

        {/* 3. KBookWoW만의 차별화된 4단계 교육 방식 */}
        <ProcessSteps />

        {/* 4. 부모가 일상에서 확인하는 작지만 확실한 성과 */}
        <VisibleProgress />

        {/* 5. 프로그램 상세 (대상 연령, 온라인/오프라인 구분 등 신뢰 요소) */}
        <ProgramSection onSelectProgram={(progName) => handleOpenContact(progName)} />

        {/* 6. 아이들의 실제 작품 및 활동 갤러리 */}
        <SocialGallery />

        {/* 7. 학부모 후기 */}
        <Testimonials />

        {/* 8. 최종 콜투액션 (CTA) */}
        <ConsultationSection preselectedProgram={selectedProgramName} />
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        defaultProgram={selectedProgramName}
      />
    </div>
  );
}
