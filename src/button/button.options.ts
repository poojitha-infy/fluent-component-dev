import { ButtonComponent } from "./button.component";

/**
 * ButtonAppearance constants
 * @public
 */
export const ButtonAppearance = {
    accent: 'accent',
    lightweight: 'lightweight',
    neutral: 'neutral',
    outline: 'outline',
    stealth: 'stealth',
} as const;

/**
 * A Button can be secondary, primary, outline, subtle, transparent
 * @public
 */
export type ButtonAppearance =  typeof ButtonAppearance[keyof typeof ButtonAppearance];



