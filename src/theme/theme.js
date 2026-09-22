import { createTheme } from '@mui/material/styles'

// Design tokens
export const tokens = {
  color: {
    ink: '#0A0F1E',        // navy quase preto — hero, detalhe, contato
    inkSurface: '#121A2E', // superfície de card sobre o ink
    inkBorder: '#22304A',
    paper: '#F7F8FB',      // seções claras — sobre, projetos
    paperSurface: '#FFFFFF',
    accent: '#3E6BFF',     // azul de destaque
    accentSoft: 'rgba(62, 107, 255, 0.12)',
    textOnInk: '#F3F5FA',
    textOnInkMuted: '#93A1BD',
    textOnPaper: '#111729',
    textOnPaperMuted: '#5B6478',
  },
  font: {
    display: "'Plus Jakarta Sans', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: tokens.color.accent },
    background: {
      default: tokens.color.ink,
      paper: tokens.color.inkSurface,
    },
    text: {
      primary: tokens.color.textOnInk,
      secondary: tokens.color.textOnInkMuted,
    },
  },
  typography: {
    fontFamily: tokens.font.display,
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.015em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, paddingInline: 20, paddingBlock: 10 },
      },
    },
  },
})

export default theme
