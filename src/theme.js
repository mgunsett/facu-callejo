import { extendTheme } from '@chakra-ui/react'

// Paleta de marca — fuente única de verdad para los colores del proyecto
// Basada en la identidad de Cusco FC: oro viejo + negro cálido + champagne
const brand = {
  brown:      '#1A160E', // panel oscuro cálido (cajas, footer, tarjetas)
  brownDark:  '#110E09', // panel más profundo (fondos de secciones internas)
  brownLight: '#D9C88E', // champagne claro (acentos suaves, admin)
  amber:      '#B7995A', // oro del escudo — acento principal
  amber2:     '#b7995a8e', // oro con transparencia media (overlays)
  amberDark:  '#8C713B', // oro profundo/bronce (bordes, sombras de acento)
  amberLight: '#b7995a4f', // oro con transparencia suave (glows, bordes)
  dorado:     '#D9C88E', // oro champagne de la camiseta (highlights)
  orange:     '#C9AD62', // oro claro (hover de botones)
  orangeDark: '#8C713B', // bronce oscuro (hover de botones, active)
  orangeLight:'#D9C88E', // champagne (hover de botones, texto destacado)
  dark:       '#100e0b9f', // negro cálido (fondo principal)
  dark3:      '#100e0ba1', // negro cálido (navbar con blur)
  dark2:      '#B3AA95', // gris cálido claro (texto terciario)
  gray:       '#9C917A', // gris dorado (texto secundario)
  gray2:      '#5C4F33', // bronce apagado (bordes, divisores)
  bone:       '#F5F1E6', // marfil (texto principal)
  boneWarm:   '#E8DCB4', // champagne pálido (detalles, subtítulos)
  rec:        '#E5484D', // rojo del indicador REC
  bgRef:      '#b7995a1a', // bg de hover en cajas (oro muy tenue)
  accent:     '#B7995A', // alias del oro principal (scrollbar, detalles)
  accentMid:  '#C9AD62', // oro medio (gradientes de stats)
  accentDeep: '#8C713B', // bronce profundo (gradientes de stats)
  panel:      '#1A160E', // alias de panel oscuro (PressSection)
  rose:       '#D9C88E', // acento suave de galería (mapeado a champagne)
}

// Colores de la firma del desarrollador (crédito en el footer)
const dev = {
  green: '#2D5A47',
  cream: '#E8D5A3',
}

const theme = extendTheme({
  colors: { brand, dev },
  fonts: {
    heading:   `'Bebas Neue', sans-serif`,
    body:      `'Barlow', sans-serif`,
    mono:      `'Barlow Condensed', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        bg: '#100E0B',
        color: brand.bone,
        overflowX: 'hidden',
      },
      '::-webkit-scrollbar': { width: '4px' },
      '::-webkit-scrollbar-track': { bg: '#100E0B' },
      '::-webkit-scrollbar-thumb': { bg: brand.accent, borderRadius: '2px' },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export default theme
