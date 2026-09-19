/**
 * utils.ts
 * GitHub Pages 서브디렉토리 배포(/kbookwow) 및 로컬 환경에서
 * 이미지 에셋 경로를 안전하게 연결해주는 유틸리티 함수입니다.
 */

// GitHub Pages 저장소 이름에 따른 basePath 설정
export const basePath = process.env.NODE_ENV === "production" ? "/kbookwow" : "";

/**
 * 이미지 경로 앞에 basePath(/kbookwow)를 붙여 반환합니다.
 * 예: getImagePath("/images/hero.jpg") -> "/kbookwow/images/hero.jpg" (배포 시)
 */
export function getImagePath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
