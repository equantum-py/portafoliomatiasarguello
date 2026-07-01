const worksContext = require.context('./Assets/Trabajos', false, /\.(png|jpe?g|webp|avif|gif|mp4|webm|mov)$/i)

const imageExtensions = /\.(png|jpe?g|webp|avif|gif)$/i
const videoExtensions = /\.(mp4|webm|mov)$/i

const sortByName = (a, b) => a.name.localeCompare(b.name, 'es', { numeric: true, sensitivity: 'base' })

const worksMedia = worksContext.keys()
  .map((key) => {
    const name = key.replace('./', '')
    return {
      src: worksContext(key),
      type: videoExtensions.test(name) ? 'video' : 'image',
      name,
    }
  })
  .sort(sortByName)

const worksPhotos = worksMedia.filter((item) => imageExtensions.test(item.name))
const worksVideos = worksMedia.filter((item) => videoExtensions.test(item.name))

const sliceMedia = ({ photoIndexes = [], videoIndexes = [] }) => [
  ...photoIndexes.map((index) => worksPhotos[index]).filter(Boolean),
  ...videoIndexes.map((index) => worksVideos[index]).filter(Boolean),
]

const buildProject = (project) => {
  const media = sliceMedia(project.mediaMap)
  const photos = media.filter((item) => item.type === 'image')
  const videos = media.filter((item) => item.type === 'video')

  return {
    ...project,
    slug: encodeURIComponent(project.name),
    media,
    photos,
    videos,
    cover: photos[0]?.src || videos[0]?.src,
  }
}

const baseProjectsData = [
  {
    id: 1,
    name: 'Supervisión de obra y ejecución',
    concept: 'Seguimiento de ejecución en obra con foco en orden, avance de trabajos y control visual de terminaciones.',
    explain: 'La intervención se presenta como registro de obra y avance constructivo, priorizando la supervisión diaria, la coordinación de tareas y la revisión de calidad en cada etapa visible.',
    role: 'Supervisión de obra, seguimiento de ejecución y coordinación de personal.',
    responsibilities: [
      'Seguimiento de ejecución',
      'Coordinación de personal',
      'Control de avance de trabajos',
      'Revisión de condiciones de obra',
    ],
    result: 'Trabajos documentados con criterio profesional, orden de ejecución y control de calidad durante el proceso constructivo.',
    mediaMap: { photoIndexes: [0, 1, 2], videoIndexes: [0] },
  },
  {
    id: 2,
    name: 'Terminaciones y acabados',
    concept: 'Control de terminaciones, acabados y detalles finales para lograr una entrega prolija y consistente.',
    explain: 'El caso reúne registros asociados a terminaciones, revestimientos y pintura profesional, con una lectura centrada en precisión, limpieza visual y calidad de cierre.',
    role: 'Control de calidad, terminaciones, acabados y pintura profesional.',
    responsibilities: [
      'Control de calidad',
      'Revisión de terminaciones',
      'Seguimiento de acabados',
      'Pintura profesional',
    ],
    result: 'Terminaciones cuidadas y registro visual coherente con una ejecución responsable y orientada al detalle.',
    mediaMap: { photoIndexes: [3, 4], videoIndexes: [] },
  },
  {
    id: 3,
    name: 'Revestimientos y calidad constructiva',
    concept: 'Revisión de superficies, encuentros y revestimientos para asegurar una resolución constructiva uniforme.',
    explain: 'La documentación se enfoca en el control de calidad aplicado a trabajos de revestimiento, acabados y criterios de terminación en obra.',
    role: 'Control de calidad, revisión de revestimientos y seguimiento de terminaciones.',
    responsibilities: [
      'Control de calidad',
      'Revisión de revestimientos',
      'Verificación de acabados',
      'Seguimiento de ejecución',
    ],
    result: 'Ejecución revisada con atención a detalles visibles, alineación de trabajos y consistencia en las terminaciones.',
    mediaMap: { photoIndexes: [5, 6], videoIndexes: [1] },
  },
  {
    id: 4,
    name: 'Planificación y seguimiento de trabajos',
    concept: 'Organización de tareas de obra, control de avance y registro de trabajos ejecutados en campo.',
    explain: 'El proyecto sintetiza una metodología de trabajo basada en planificación, supervisión operativa y registro ordenado de la ejecución.',
    role: 'Planificación de trabajos, supervisión operativa y seguimiento de ejecución.',
    responsibilities: [
      'Planificación de trabajos',
      'Supervisión operativa',
      'Seguimiento de ejecución',
      'Coordinación de tareas',
    ],
    result: 'Proceso de obra documentado con una lectura clara de ejecución, responsabilidad y control profesional.',
    mediaMap: { photoIndexes: [7, 8], videoIndexes: [] },
  },
]

export const ProjectsData = baseProjectsData.map(buildProject)
export const WorksMedia = worksMedia
