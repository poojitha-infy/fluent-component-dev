
export const ButtonAppearance = {
    accent: 'accent',
    lightweight: 'lightweight',
    neutral: 'neutral',
    outline: 'outline',
    stealth: 'stealth',
} as const;


export type ButtonAppearance =  typeof ButtonAppearance[keyof typeof ButtonAppearance];

export const OrientationTypes = {
    vertical: 'vertical',
    horizontal: 'horizontal',
} as const;


export type OrientationTypes =  typeof OrientationTypes[keyof typeof OrientationTypes];

export const AutoCompleteTypes = {
    off:"off",
    both:"both"
} as const;

export type AutoCompleteTypes =  typeof AutoCompleteTypes[keyof typeof AutoCompleteTypes];

export const TabsList = {
    apps:"apps",
    entrees:"entrees",
    desserts:"desserts"
} as const;

export type TabsList =  typeof TabsList[keyof typeof TabsList];

export const LabelPosition = {
  above: 'above',
  after: 'after',
  before: 'before',
} as const;

/** @public */
export type LabelPosition = typeof LabelPosition[keyof typeof LabelPosition];


export const ValidationFlags = {
    badInput: 'bad-input',
    customError: 'custom-error',
    patternMismatch: 'pattern-mismatch',
    rangeOverflow: 'range-overflow',
    rangeUnderflow: 'range-underflow',
    stepMismatch: 'step-mismatch',
    tooLong: 'too-long',
    tooShort: 'too-short',
    typeMismatch: 'type-mismatch',
    valueMissing: 'value-missing',
    valid: 'valid',
  } as const;
  
  /** @public */
  export type ValidationFlags = typeof ValidationFlags[keyof typeof ValidationFlags];




