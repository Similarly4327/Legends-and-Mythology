export interface StepPosition {
  index: number;
  top: number;
  bottom: number;
}

/** Last step that has crossed the reading line wins, including in both scroll directions. */
export function selectActiveStep(positions: readonly StepPosition[], readingLine: number): number {
  if (positions.length === 0) return 0;
  const crossed = positions.filter((position) => position.top <= readingLine);
  return crossed.length ? crossed[crossed.length - 1].index : positions[0].index;
}
