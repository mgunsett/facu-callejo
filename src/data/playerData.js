import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdStats } from 'react-icons/io'

//Hero
import polaco1 from '@assets/polaco1.webp'

import argentina from '@assets/argentina.webp'
import cusco from '@assets/escudo_cusco.webp'
//Escudos trayectoria
import escudoAtlParana from '@assets/escudos/escudo_atlparana.webp'
import escudoNewells from '@assets/escudos/escudo_newells.webp'
import escudoAlhali from '@assets/escudos/escudo_alhali.webp'
import escudoCentralCordoba from '@assets/escudos/escudo_centralcordoba.webp'
import escudoChaco from '@assets/escudos/escudo_chaco.webp'
import escudoLigadequito from '@assets/escudos/escudo_ligadequito.webp'
import escudoSanjose from '@assets/escudos/escudo_sanjose.webp'
import escudoUcatolica from '@assets/escudos/escudo_ucatolica.webp'
import escudoAucas from '@assets/escudos/escudo_aucas.webp'
//Gallery
import image1 from '@assets/gallery/image1.webp'
import image2 from '@assets/gallery/image2.webp'
import image3 from '@assets/gallery/image3.webp'
import image4 from '@assets/gallery/image4.webp'
import image5 from '@assets/gallery/image5.webp'
import image6 from '@assets/gallery/image6.webp'
import image7 from '@assets/gallery/image7.webp'
import image8 from '@assets/gallery/image8.webp'
import image9 from '@assets/gallery/image9.webp'
import image10 from '@assets/gallery/image10.webp'
import image11 from '@assets/gallery/image11.webp'
import image12 from '@assets/gallery/image12.webp'
//Video
import photoGraph from '@assets/perfil_video.webp'
//Prensa
import logo1 from '@assets/logos/logo1.webp'
import logo2 from '@assets/logos/logo2.webp'
import logo3 from '@assets/logos/logo3.webp'
//Redes
import transfermkt from '@assets/contact2.svg'
import ledsports from '@assets/contact3.webp'
import moon from '@assets/contact4.webp'


const name = 'FACUNDO'
const fullName = 'CALLEJO'

export const playerData = {
  name,
  fullName,
  initials: `${name[0]}${fullName[0]}`, // iniciales para logos (PF)
  displayName: `${name} ${fullName}`,   // nombre completo para textos legales / alt
  number: 9,
  position: 'Delantero',
  positionShort: 'DEL',
  nationality: 'Argentina',
  nationalityFlag: argentina,
  age: 34,
  height: '1.78m',
  weight: '68kg',
  foot: 'Derecho',
  birthDate: '02 / 07 / 1992',
  birthPlace: 'Tandil, Argentina',
  currentClub: 'Cusco FC',
  logoCurrentClub: cusco,
  image: polaco1,
  

  stats: [
    { label: 'Velocidad',      value: 91 },
    { label: 'Definición',     value: 88 },
    { label: 'Regate',         value: 84 },
    { label: 'Pases Completos',    value: 79 },
    { label: 'Presión Alta',   value: 82 },
    { label: 'Visión de Juego',value: 79 },
  ],

  seasonStats: [
    { label: 'Partidos',    value: 16 },
    { label: 'Goles',       value: 3 },
    { label: 'Asistencias', value: 1  },
    { label: 'Tiros al árco', value: 8  },
    { label: 'Min / Part.', value: "1,022'" },
    { label: 'Valoración', value: 7.4  },

  ],

  clubs: [
    {
      name:    'Cusco FC',
      country: 'Perú',
      years:   '2025 — Actualidad',
      logo:    cusco,
      titles:  [],
      info:    '',
    },
    {
      name:    'Liga de Quito',
      country: 'Ecuador',
      years:   '2023 — 2025',
      logo:    escudoLigadequito,
      titles:  ['Serie A Ecuador 2023','Copa Sudamericana 2023', 'Serie A Ecuador 2024', 'Supercopa Ecuador 2024'],
      info:    '',
    },
    {
      name:    'Al-Hali Saudi',
      country: 'Arabia Saudita',
      years:   '2022',
      logo:    escudoAlhali,
      titles:  [],
      info:    '',
    },
    {
      name:    'Universidad Católica',
      country: 'Ecuador',
      years:   '2021 — 2022',
      logo:    escudoUcatolica,
      titles:  [],
      info:    '11 ideal de la Serie A de Ecuador 2021',
    },
    {
      name:    'S.D Aucas',
      country: 'Ecuador',
      years:   '2020',
      logo:    escudoAucas,
      titles:  [],
      info:    '',
    },
    {
      name:    'Central Córdoba',
      country: 'Argentina',
      years:   '2019',
      logo:    escudoCentralCordoba,
      titles:  [],
      info:    '',
    },
    {
      name:    'Newell\'s Old Boys',
      country: 'Argentina',
      years:   '2018',
      logo:    escudoNewells,
      titles:  [],
      info:    '',
    },
    {
      name:    'Chaco For Ever',
      country: 'Argentina',
      years:   '2013-2014 / 2017',
      logo:    escudoChaco,
      titles:  [],
      info:    '',
    },
    {
      name:    'San José',
      country: 'Argentina',
      years:   '2016 — 2017',
      logo:    escudoSanjose,
      titles:  [],
      info:    '',
    },
    {
      name:    'Atlético Paraná',
      country: 'Argentina',
      years:   '2011-2013 / 2015',
      logo:    escudoAtlParana,
      titles:  [],
      info:    '',
    },
  ],

  videos: [
    {
      id: 'v1',
      instagramId: 'DZN8RUSh3lg',
      title: 'Highlights 25/26',
      fullTitle: 'Facundo Callejo | Jugadas destacadas 2026',
      season: 'GOLES',
      league: 'highlights',
      thumbnail: image7,
      cover: image7,
      category: 'Highlights',
    },
    {
      id: 'v2',
      instagramId: 'DTjD4rUEXrh',
      title: "Goleador Torneo '25",
      fullTitle: 'Facundo Callejo | Compilado de goles',
      season: 'Compilado',
      league: 'CONMEBOL Libertadores 2025',
      thumbnail: image1,
      cover: image8,
      category: 'Goles',
    },
    {
      id: 'v3',
      instagramId: 'DVHk567kTIT',
      title: 'Gol de la fecha 4',
      fullTitle: 'Facundo Callejo | Asistencias y juego',
      season: 'Cusco FC',
      league: 'Liga 1 Perú 2025',
      thumbnail: image4,
      cover: image12,
      category: 'Goles',
    },
  ],

  press: [
    {
      media: 'Liga1 TeApuesto',
      logo:  logo3,
      title: '𝗘𝗹 𝗱𝘂𝗲𝗻̃𝗼 𝗱𝗲𝗹 𝗮́𝗿𝗲𝗮 🐂 \n Facundo Callejo posa con su premio de Goleador de la #Liga1TeApuesto 2025🏆',
      date:  'Enero 2026',
      url:   'https://www.instagram.com/p/DTbFwb2lNrQ/?hl=es',
    },
    {
      media: 'FC26 Perú',
      logo:  logo2,
      title: '🏅𝐓𝐄𝐀𝐌 𝐎𝐅 𝐓𝐇𝐄 𝐘𝐄𝐀𝐑 - 𝐋𝐈𝐆𝐀 𝟏 𝟐𝟎𝟐𝟓. Facundo Callejo dentro del 11 ideal de la 🏆@liga1teapuesto',
      date:  'Enero 2026',
      url:   'https://www.instagram.com/p/DTZYetHjeLH/?hl=es',
    },
    {
      media: 'ESPN Deportes',
      logo:  logo1,
      title: 'Facundo Callejo alcanzó el Top 5 de máximos goleadores de Cusco FC (exReal Garcilaso) con 25 anotaciones',
      date:  'Diciembre 2025',
      url:   'https://www.espn.com.ar/futbol/peru/nota/_/id/15678024/facundo-callejo-vs-jhonny-vidales-goleador-de-la-liga-1-de-peru',
    },
  ],

  gallery: [
    { id: 1, src: image1, alt: 'Facu Callejo', caption: 'Liga Profesional 2024', category: 'Partido', aspect: 'wide' },
    { id: 2, src: image2, alt: 'Facu Callejo', caption: 'Festejo ante Racing',    category: 'Festejo', aspect: 'tall' },
    { id: 3, src: image3, alt: 'Facu Callejo', caption: 'Pretemporada 2025',       category: 'Entrenamiento', aspect: 'square' },
    { id: 4, src: image4, alt: 'Facu Callejo', caption: 'Copa Argentina 2024',     category: 'Partido', aspect: 'wide' },
    { id: 5, src: image5, alt: 'Facu Callejo', caption: 'Plantel Talleres 2024',   category: 'Equipo',  aspect: 'wide' },
    { id: 6, src: image6, alt: 'Facu Callejo', caption: 'Foto oficial 2024',       category: 'Retrato', aspect: 'tall' },
    { id: 7, src: image7, alt: 'Facu Callejo', caption: 'Liga Profesional 2025', category: 'Partido', aspect: 'wide' },
    { id: 8, src: image8, alt: 'Facu Callejo', caption: 'Copa Libertadores 2025', category: 'Partido', aspect: 'wide' },
    { id: 9, src: image9, alt: 'Facu Callejo', caption: 'Festejo ante Nacional', category: 'Festejo', aspect: 'tall' },
    { id: 10, src: image10, alt: 'Facu Callejo', caption: 'Pretemporada 2025', category: 'Entrenamiento', aspect: 'square' },
    { id: 11, src: image11, alt: 'Facu Callejo', caption: 'Copa Argentina 2025', category: 'Partido', aspect: 'wide' },
    { id: 12, src: image12, alt: 'Facu Callejo', caption: 'Plantel Talleres 2025', category: 'Equipo', aspect: 'wide' },
  ],

  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@facu.callejo19',
      url: 'https://www.instagram.com/facu.callejo19/',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: transfermkt,
      iconBg: IoMdStats,
      handle: '@facundo-callejo',
      url: 'https://www.transfermarkt.com.ar/facundo-callejo/profil/spieler/268031',
      hoverColor: '#3d7aec',
    },
  ],

  contact: [
    {
      title:      'Representante Deportivo',
      label:      'Moon Sports Group',
      image:       moon,
      handle:     '@moonsportsgroup_',
      url:        'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(139,69,19,0.18)',
    },
    {
      title:      'Contacto Marketing',
      label:      'led sports marketing',
      image: ledsports,
      handle:     '@_ledsports',
      url:        'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(212,168,75,0.18)',
    },
  ],
}
