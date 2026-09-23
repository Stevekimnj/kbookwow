import type { Metadata } from "next";
import "./globals.css";

// 웹사이트 메타데이터 및 검색엔진 최적화 (SEO) 설정
export const metadata: Metadata = {
  title: "K Book WOW | 재미 한인 및 다국어 어린이를 위한 창의적 한국어 교육",
  description:
    "K Book WOW는 한국계 미국인 어린이와 다국어 학습자를 위한 창의적 한국어 심화 프로그램입니다. 나만의 그림책 만들기, 도예 융합 수업, 창의적 글쓰기, 한국 문화 공예, 온라인 1:1 독서 토론을 통해 문해력과 자신감을 키웁니다.",
  keywords: [
    "K Book WOW",
    "케이북와우",
    "재미한인한국어",
    "어린이 한국어 교육",
    "Korean for kids",
    "Korean-American children",
    "그림책 만들기",
    "어린이 도예 수업",
    "온라인 한국어 리딩",
    "창의적 글쓰기",
    "PBL 한국어",
  ],
  openGraph: {
    title: "K Book WOW | 창의적 어린이 한국어 융합 교육 프로그램",
    description:
      "책과 이야기, 예술로 피어나는 우리 아이의 한국어 날개! 온라인 리딩, 그림책 창작, 도예와 문화 공예 활동으로 평생 가는 한국어 사랑을 심어줍니다.",
    url: "https://kbookwow.com",
    siteName: "K Book WOW",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "K Book WOW 한국어 창의 교육 프로그램",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Book WOW | 창의적 어린이 한국어 융합 교육 프로그램",
    description:
      "Korean-American children and multilingual learners creative Korean enrichment program.",
    images: ["/images/hero.jpg"],
  },
};

// 최상위 루트 레이아웃 컴포넌트
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* Google Fonts: 한글 가독성이 우수한 Noto Sans KR & 영어 Outfit 폰트 불러오기 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-[var(--bg-main)] text-[var(--text-primary)] min-h-screen flex flex-col selection:bg-[var(--color-primary)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
