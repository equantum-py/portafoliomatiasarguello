const worksContext = require.context(
  './Assets/Trabajos',
  true,
  /\.(png|jpe?g|webp|avif|gif|mp4|webm|mov)$/i
)

const IMAGE_FILE = /\.(png|jpe?g|webp|avif|gif)$/i
const VIDEO_FILE = /\.(mp4|webm|mov)$/i
const COVER_FILE = /^00-portada\.(png|jpe?g|webp|avif|gif)$/i

const collator = new Intl.Collator('es', {
  numeric: true,
  sensitivity: 'base',
})

const projectTextByFolder = {
  'Edificio Alcántara': {
    tipo: 'Edificio residencial',
    ubicacion: 'Asunción, Paraguay',
    estado: 'En ejecución',
    rol: 'Supervisión de obra',
    descripcion:
      'Supervisión de trabajos en obra, control de avances, coordinación operativa y seguimiento de calidad durante el proceso constructivo.',
    responsabilidades: [
      'Supervisión diaria de trabajos',
      'Coordinación de cuadrillas',
      'Control de calidad',
      'Seguimiento de avances',
    ],
    resultado:
      'Registro visual del avance de obra y acompañamiento operativo del proceso constructivo.',
  },
  'Obra Altavida': {
    tipo: 'Edificio multifamiliar',
    ubicacion: 'Asunción, Paraguay',
    estado: 'En ejecución',
    rol: 'Supervisión y seguimiento de obra',
    descripcion:
      'Seguimiento técnico del avance constructivo, control de tareas ejecutadas y documentación visual del proceso de obra.',
    responsabilidades: [
      'Control de avances',
      'Supervisión de ejecución',
      'Coordinación operativa',
      'Revisión de terminaciones',
    ],
    resultado:
      'Documentación ordenada del proceso constructivo y control visual del avance.',
  },
}

const defaultProjectText = {
  tipo: 'Proyecto de obra',
  ubicacion: 'Asunción, Paraguay',
  estado: 'Documentado',
  rol: 'Supervisión y seguimiento de obra',
  descripcion:
    'Registro profesional del proceso de obra, seguimiento operativo y documentación visual del avance constructivo.',
  responsabilidades: [
    'Coordinación operativa',
    'Control de calidad',
    'Seguimiento de avances',
  ],
  resultado: 'Registro visual organizado del proceso constructivo.',
}

const projectsByFolder = worksContext.keys().reduce((folders, assetPath) => {
  const pathParts = assetPath.replace(/^\.\//, '').split('/')

  if (pathParts.length < 2) {
    return folders
  }

  const folderName = pathParts[0]
  const fileName = pathParts[pathParts.length - 1]

  const asset = {
    src: worksContext(assetPath),
    name: fileName,
  }

  if (!folders[folderName]) {
    folders[folderName] = {
      photos: [],
      videos: [],
    }
  }

  if (IMAGE_FILE.test(fileName)) {
    folders[folderName].photos.push(asset)
  }

  if (VIDEO_FILE.test(fileName)) {
    folders[folderName].videos.push(asset)
  }

  return folders
}, {})

const ProjectsData = Object.entries(projectsByFolder)
  .sort(([firstFolder], [secondFolder]) =>
    collator.compare(firstFolder, secondFolder)
  )
  .map(([folderName, assets], index) => {
    const photos = assets.photos.sort((firstAsset, secondAsset) =>
      collator.compare(firstAsset.name, secondAsset.name)
    )

    const videos = assets.videos.sort((firstAsset, secondAsset) =>
      collator.compare(firstAsset.name, secondAsset.name)
    )

    const cover =
      photos.find((photo) => COVER_FILE.test(photo.name))?.src ||
      photos[0]?.src ||
      ''

    const media = [
      ...photos.map((photo) => ({ ...photo, type: 'image' })),
      ...videos.map((video) => ({ ...video, type: 'video' })),
    ]

    const projectText = projectTextByFolder[folderName] || defaultProjectText

    return {
      id: folderName,
      name: folderName,
      slug: encodeURIComponent(folderName),
      cover,
      media,
      photos,
      videos,
      order: index + 1,

      tipo: projectText.tipo,
      ubicacion: projectText.ubicacion,
      estado: projectText.estado,
      rol: projectText.rol,
      descripcion: projectText.descripcion,
      responsabilidades: projectText.responsabilidades,
      resultado: projectText.resultado,

      concept: projectText.descripcion,
      explain: projectText.descripcion,
      role: projectText.rol,
      result: projectText.resultado,
      responsibilities: projectText.responsabilidades,
    }
  })

export { ProjectsData }
export default ProjectsData