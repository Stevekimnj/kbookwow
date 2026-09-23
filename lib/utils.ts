/**
 * utils.ts
 * GitHub Pages 서브디렉토리 배포(https://stevekimnj.github.io/kbookwow/) 환경에서
 * 모든 이미지 에셋 경로 앞에 /kbookwow 접두어를 확실하게 붙여주는 헬퍼 함수입니다.
 */

// GitHub Pages 저장소 경로
export const basePath = "/kbookwow";

/**
 * 이미지 경로 앞에 /kbookwow를 결합하여 반환합니다.
 * 예: getImagePath("/images/hero.jpg") -> "/kbookwow/images/hero.jpg"
 */
export function getImagePath(path: string): string {
  if (!path) return "";
  // 이미 전체 URL이거나 이미 /kbookwow로 시작하는 경우 그대로 반환
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath.startsWith("/kbookwow/")) {
    return cleanPath;
  }
  return `/kbookwow${cleanPath}`;
}
