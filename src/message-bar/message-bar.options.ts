
/**
 * @public
 * The `layout` variations for the MessageBar component.
 */
export const MessageBarLayout = {
  multiline: 'multiline',
  singleline: 'singleline',
} as const;

export type MessageBarLayout = typeof MessageBarLayout[keyof typeof MessageBarLayout];

/**
 * @public
 * The `shape` variations for the MessageBar component.
 */
export const MessageBarShape = {
  rounded: 'rounded',
  square: 'square',
} as const;

export type MessageBarShape = typeof MessageBarShape[keyof typeof MessageBarShape];

/**
 * @public
 * The `intent` variations for the MessageBar component.
 */
export const MessageBarIntent = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
} as const;

export type MessageBarIntent = typeof MessageBarIntent[keyof typeof MessageBarIntent];
