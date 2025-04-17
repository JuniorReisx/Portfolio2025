export interface Sizes {
  deskScale: number;
  deskPosition: [number, number, number];
  cubePosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  reactLogoScale: [number, number, number];
  reactLogoRotation: [number, number, number];
  ringPosition: [number, number, number];
  targetPosition: [number, number, number];
}

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
): Sizes => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    reactLogoScale: isSmall
      ? [0.4, 0.4, 0.4]
      : isMobile
        ? [0.5, 0.5, 0.5]
        : isTablet
          ? [0.6, 0.6, 0.6]
          : [0.7, 0.7, 0.7],
    reactLogoRotation: [0, Math.PI / 2, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};
