export const toVector3 = (arr?: number[]): [number, number, number] => [
    arr?.[0] ?? 0,
    arr?.[1] ?? 0,
    arr?.[2] ?? 0,
  ];
  