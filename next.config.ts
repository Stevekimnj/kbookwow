import type { NextConfig } from "next";

// GitHub Pages 배포 시 저장소(Repository) 이름(kbookwow)에 맞게 경로를 동적으로 지정합니다.
const isProd = process.env.NODE_ENV === "production";
const repoName = "kbookwow";

const nextConfig: NextConfig = {
  // 1. GitHub Pages 정적 웹 호스팅을 위한 정적 HTML 내보내기 설정
  output: "export",

  // 2. GitHub Pages에는 Node.js 이미지 서버가 없으므로 이미지를 정적 모드로 서비스
  images: {
    unoptimized: true,
  },

  // 3. GitHub Pages 서브패스(https://Stevekimnj.github.io/kbookwow/)에 맞춘 경로 접두어
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
