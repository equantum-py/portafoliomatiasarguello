const worksContext = require.context('./Assets/Trabajos', true, /\.(png|jpe?g|webp|avif|gif|mp4|webm|mov)$/i)

const imageExtensions = /\.(png|jpe?g|webp|avif|gif)$/i
const videoExtensions = /\.(mp4|webm|mov)$/i

// Agrupar archivos por carpeta
const filesByFolder = {}

worksContext.keys().forEach((key) => {
  // Extraer la carpeta (primer nivel después de ./)
  const parts = key.replace('./', '').split('/')
  
  // Ignorar archivos directamente en src/Assets/Trabajos/
  // Solo procesar archivos dentro de subcarpetas
  if (parts.length < 2) return
  
  const folderName = parts[0]
  const fileName = parts[parts.length - 1]
  
  if (!filesByFolder[folderName]) {
    filesByFolder[folderName] = {
      images: [],
      videos: [],
    }
  }
  
  const fileData = {
    src: worksContext(key),
    name: fileName,
  }
  
  if (imageExtensions.test(fileName)) {
    filesByFolder[folderName].images.push(fileData)
  } else if (videoExtensions.test(fileName)) {
    filesByFolder[folderName].videos.push(fileData)
  }
})

// Ordenar imágenes y videos alfabéticamente en cada carpeta
Object.values(filesByFolder).forEach((folder) => {
  folder.images.sort((a, b) => a.name.localeCompare(b.name, 'es', { numeric: true, sensitivity: 'base' }))
  folder.videos.sort((a, b) => a.name.localeCompare(b.name, 'es', { numeric: true, sensitivity: 'base' }))
})

// Crear proyectos automáticamente
const ProjectsData = Object.entries(filesByFolder).map(([folderName, { images, videos }], index) => {
  const allMedia = [
    ...images.map((img) => ({ ...img, type: 'image' })),
    ...videos.map((vid) => ({ ...vid, type: 'video' })),
  ]
  
  return {
    id: index + 1,
    name: folderName,
    slug: encodeURIComponent(folderName),
    media: allMedia,
    photos: images,
    videos,
    cover: images[0]?.src || videos[0]?.src,
  }
})

export { ProjectsData }
export default ProjectsData