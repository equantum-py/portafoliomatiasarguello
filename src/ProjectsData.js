const worksContext = require.context('./Assets/Trabajos', true, /\.(png|jpe?g|webp|avif|gif|mp4|webm|mov)$/i)

const IMAGE_FILE = /\.(png|jpe?g|webp|avif|gif)$/i
const VIDEO_FILE = /\.(mp4|webm|mov)$/i
const COVER_FILE = /^00-portada\.(png|jpe?g|webp|avif|gif)$/i
const collator = new Intl.Collator('es', { numeric: true, sensitivity: 'base' })

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
  .sort(([firstFolder], [secondFolder]) => collator.compare(firstFolder, secondFolder))
  .map(([folderName, assets], index) => {
    const photos = assets.photos.sort((firstAsset, secondAsset) => collator.compare(firstAsset.name, secondAsset.name))
    const videos = assets.videos.sort((firstAsset, secondAsset) => collator.compare(firstAsset.name, secondAsset.name))
    const cover = photos.find((photo) => COVER_FILE.test(photo.name))?.src || photos[0]?.src || ''

    const media = [
      ...photos.map((photo) => ({ ...photo, type: 'image' })),
      ...videos.map((video) => ({ ...video, type: 'video' })),
    ]

    return {
      id: folderName,
      name: folderName,
      slug: encodeURIComponent(folderName),
      cover,
      media,
      photos,
      videos,
      order: index + 1,
      concept: 'Registro fotográfico y audiovisual del trabajo realizado.',
      explain: 'Proyecto cargado automáticamente desde los archivos disponibles en su carpeta de trabajo.',
      role: 'Supervisión y seguimiento de obra',
      result: 'Avance documentado con material visual del proceso constructivo.',
      responsibilities: [
        'Coordinación operativa de tareas.',
        'Control de calidad en obra.',
        'Seguimiento del avance de los trabajos.',
      ],
    }
  })

export { ProjectsData }
export default ProjectsData
