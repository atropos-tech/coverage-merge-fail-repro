import React from 'react';

export type UnderTestProps = {
  /** Array of the current comments */
  value?: ReadonlyArray<string>;
}

/**
 * Some code to be tested
 */
export default function UnderTest({ value }: UnderTestProps) {
    if (value) return <span>Branch 1</span>; // tested by vitest
    return <span>Branch 2</span>; // tested by cypress
}
