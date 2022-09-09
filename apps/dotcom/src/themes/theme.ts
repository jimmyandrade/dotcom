import type { ThemeInterface } from "./ThemeInterface";

/**
 * Theme Name: Default Jimmy Andrade Theme
 * @see ThemeInterface
 */
export const theme: ThemeInterface = {
  fontFamily: {
    default: 'Inter',
    fallback: `ui-sans-serif,
      system-ui,
      -system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    variable: '"Inter var"'
  },
  lineHeight: {
    default: "1.5rem"
  }
};
