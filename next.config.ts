import type { NextConfig } from "next";

const repoName = "kbookwow";

const nextConfig: NextConfig = {
  // 1. GitHub Pages 정적 웹 호스팅을 위한 정적 HTML 내보내기
  output: "export",

  // 2. GitHub Pages에는 Node.js 동적 이미지 처리 서버가 없으므로 정적 서빙 모드 설정
  images: {
    unoptimized: true,
  },

  // 3. GitHub Pages 서브디렉토리 배포 경로 (https://stevekimnj.github.io/kbookwow/)
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
