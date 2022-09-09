import 'styled-components';
import type { ThemeInterface } from "./themes";

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {
  }
}
