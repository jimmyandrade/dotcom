import { CSSProperties } from "styled-components";

export interface ThemeInterface {
  fontFamily: Record<"default" | "fallback" | "variable", CSSProperties["fontFamily"]>,
  lineHeight: {
    default: CSSProperties["lineHeight"]
  }
}
