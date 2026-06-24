export const languages = {
  en: 'English',
  no: 'Norsk',
  es: 'Español',
} as const

export type Lang = keyof typeof languages

export const translations = {
  // ─── NAVBAR ───────────────────────────────────────────────────────────────
  nav: {
    work: {
      en: 'Work',
      no: 'Arbeid',
      es: 'Trabajo',
    },
    about: {
      en: 'About',
      no: 'Om oss',
      es: 'Nosotros',
    },
    services: {
      en: 'Services',
      no: 'Tjenester',
      es: 'Servicios',
    },
    contact: {
      en: 'Contact',
      no: 'Kontakt',
      es: 'Contacto',
    },
  },

  // ─── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    headline: {
      en: 'Cinematic visual experiences',
      no: 'Kinematiske visuelle opplevelser',
      es: 'Experiencias visuales cinematográficas',
    },
    subheadline: {
      en: 'for a new era of property marketing',
      no: 'for en ny æra innen eiendomsmarkedsføring',
      es: 'para una nueva era del marketing inmobiliario',
    },
    cta: {
      en: 'Learn About Us',
      no: 'Lær mer om oss',
      es: 'Conócenos',
    },
  },

  // ─── SERVICES ─────────────────────────────────────────────────────────────
  services: {
    label: {
      en: 'What we do',
      no: 'Hva vi gjør',
      es: 'Lo que hacemos',
    },
    title: {
      en: 'Services',
      no: 'Tjenester',
      es: 'Servicios',
    },
    items: {
      fpv: {
        title: {
          en: 'FPV Drone Filmmaking',
          no: 'FPV-dronefilming',
          es: 'Filmación con dron FPV',
        },
        description: {
          en: 'Fluid, immersive drone footage that reveals spaces from perspectives impossible with traditional cameras. We fly indoors, outdoors and through architectural transitions with precision.',
          no: 'Flytende, oppslukende droneopptak som avslører rom fra perspektiver som er umulige med tradisjonelle kameraer. Vi flyr innendørs, utendørs og gjennom arkitektoniske overganger med presisjon.',
          es: 'Imágenes de dron fluidas e inmersivas que revelan espacios desde perspectivas imposibles con cámaras tradicionales. Volamos en interiores, exteriores y a través de transiciones arquitectónicas con precisión.',
        },
      },
      video: {
        title: {
          en: 'Video Production',
          no: 'Videoproduksjon',
          es: 'Producción de vídeo',
        },
        description: {
          en: 'Full-service video for real estate and architecture — from cinematic walkthroughs to brand films. Concept, shoot, edit and colour grade, all under one roof.',
          no: 'Fullservice video for eiendom og arkitektur — fra kinematiske gjennomganger til brandfilmer. Konsept, opptak, redigering og fargegradering, alt under ett tak.',
          es: 'Vídeo integral para inmobiliaria y arquitectura — desde recorridos cinematográficos hasta películas de marca. Concepto, rodaje, edición y corrección de color, todo bajo un mismo techo.',
        },
      },
      photography: {
        title: {
          en: 'Photography',
          no: 'Fotografering',
          es: 'Fotografía',
        },
        description: {
          en: 'High-end architectural and interior photography that captures the true atmosphere of a space: its light, materiality and character.',
          no: 'Høyend arkitektur- og interiørfotografering som fanger den sanne atmosfæren i et rom: dets lys, materialitet og karakter.',
          es: 'Fotografía arquitectónica e interior de alto nivel que captura la verdadera atmósfera de un espacio: su luz, materialidad y carácter.',
        },
      },
      d3: {
        title: {
          en: 'Digital 3D',
          no: 'Digital 3D',
          es: 'Digital 3D',
        },
        description: {
          en: 'Photorealistic 3D renders and visualisations for projects under development, renovation or refurbishment — so clients can see what does not yet exist.',
          no: 'Fotorealistiske 3D-renders og visualiseringer for prosjekter under utvikling, renovasjon eller oppussing — slik at kunder kan se det som ennå ikke eksisterer.',
          es: 'Renders 3D fotorrealistas y visualizaciones para proyectos en desarrollo, renovación o reforma — para que los clientes vean lo que aún no existe.',
        },
      },
    },
  },

  // ─── WORK ─────────────────────────────────────────────────────────────────
  work: {
    label: {
      en: 'Portfolio',
      no: 'Portefølje',
      es: 'Portfolio',
    },
    title: {
      en: 'Selected work',
      no: 'Utvalgte arbeider',
      es: 'Trabajos seleccionados',
    },
    empty: {
      en: 'Projects coming soon',
      no: 'Prosjekter kommer snart',
      es: 'Proyectos próximamente',
    },
    emptySub: {
      en: 'Our portfolio is being prepared',
      no: 'Porteføljen vår er under utarbeidelse',
      es: 'Nuestro portfolio está en preparación',
    },
  },

  // ─── ABOUT ────────────────────────────────────────────────────────────────
  about: {
    label: {
      en: 'About us',
      no: 'Om oss',
      es: 'Sobre nosotros',
    },
    title: {
      en: 'A creative partnership',
      no: 'Et kreativt partnerskap',
      es: 'Una asociación creativa',
    },
    titleItalic: {
      en: 'born in Bergen',
      no: 'født i Bergen',
      es: 'nacida en Bergen',
    },
    p1: {
      en: 'Levitere is a young creative studio founded by Oscar and Emilio, aged 22 and 23, after meeting in Bergen, Norway.',
      no: 'Levitere er et ungt kreativt studio grunnlagt av Oscar og Emilio, 22 og 23 år gamle, etter at de møttes i Bergen, Norge.',
      es: 'Levitere es un joven estudio creativo fundado por Oscar y Emilio, de 22 y 23 años, tras conocerse en Bergen, Noruega.',
    },
    p2: {
      en: 'Oscar is an FPV drone pilot. Emilio is a photographer, videographer and editor. What started as a friendship became a creative partnership built around a shared way of seeing spaces, movement and visual storytelling.',
      no: 'Oscar er FPV-dronepilot. Emilio er fotograf, videograf og redaktør. Det som begynte som et vennskap ble et kreativt partnerskap bygget rundt en felles måte å se rom, bevegelse og visuell historiefortelling på.',
      es: 'Oscar es piloto de dron FPV. Emilio es fotógrafo, videógrafo y editor. Lo que empezó como una amistad se convirtió en una asociación creativa construida alrededor de una forma compartida de ver los espacios, el movimiento y la narrativa visual.',
    },
    p3: {
      en: 'Together, we created Levitere to produce high-end audiovisual content for real estate, architecture, brands and selected spaces that need to be presented with a more modern and immersive visual language.',
      no: 'Sammen skapte vi Levitere for å produsere høykvalitets audiovisuelt innhold for eiendom, arkitektur, merkevarer og utvalgte rom som trenger å presenteres med et mer moderne og oppslukende visuelt språk.',
      es: 'Juntos, creamos Levitere para producir contenido audiovisual de alto nivel para inmobiliaria, arquitectura, marcas y espacios seleccionados que necesitan presentarse con un lenguaje visual más moderno e inmersivo.',
    },
    p4: {
      en: 'Our approach combines a young creative perspective with technical precision — bringing together drone flight, video, photography, editing and digital 3D craft to help each project communicate with clarity, atmosphere and impact.',
      no: 'Vår tilnærming kombinerer et ungt kreativt perspektiv med teknisk presisjon — og bringer sammen droneflyging, video, fotografering, redigering og digital 3D-håndverk for å hjelpe hvert prosjekt med å kommunisere med klarhet, atmosfære og effekt.',
      es: 'Nuestro enfoque combina una perspectiva creativa joven con precisión técnica — reuniendo vuelo de dron, vídeo, fotografía, edición y técnica 3D digital para ayudar a cada proyecto a comunicar con claridad, atmósfera e impacto.',
    },
    oscarRole: {
      en: 'FPV Drone Pilot',
      no: 'FPV-dronepilot',
      es: 'Piloto de Dron FPV',
    },
    emilioRole: {
      en: 'Photographer & Editor',
      no: 'Fotograf og redaktør',
      es: 'Fotógrafo y Editor',
    },
  },

  // ─── CONTACT ──────────────────────────────────────────────────────────────
  contact: {
    label: {
      en: 'Contact',
      no: 'Kontakt',
      es: 'Contacto',
    },
    title: {
      en: "Let's work",
      no: 'La oss jobbe',
      es: 'Trabajemos',
    },
    titleItalic: {
      en: 'together',
      no: 'sammen',
      es: 'juntos',
    },
    subtitle: {
      en: "Tell us about your project. We'll get back to you within 24 hours.",
      no: 'Fortell oss om prosjektet ditt. Vi kommer tilbake til deg innen 24 timer.',
      es: 'Cuéntanos tu proyecto. Te responderemos en menos de 24 horas.',
    },
    namePlaceholder: {
      en: 'Name',
      no: 'Navn',
      es: 'Nombre',
    },
    emailPlaceholder: {
      en: 'Email',
      no: 'E-post',
      es: 'Correo electrónico',
    },
    messagePlaceholder: {
      en: 'Message',
      no: 'Melding',
      es: 'Mensaje',
    },
    button: {
      en: 'Send message',
      no: 'Send melding',
      es: 'Enviar mensaje',
    },
  },

  // ─── FOOTER ───────────────────────────────────────────────────────────────
  footer: {
    copyright: {
      en: '© 2026 Levitere',
      no: '© 2026 Levitere',
      es: '© 2026 Levitere',
    },
  },
} as const
