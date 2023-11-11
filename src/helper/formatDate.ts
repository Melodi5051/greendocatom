export const formatData = (date: Date): string => {
  const day = addLeadingZero(date.getDate())
  const month = addLeadingZero(date.getMonth() + 1)
  const year = date.getFullYear()
  const hours = addLeadingZero(date.getHours())
  const minutes = addLeadingZero(date.getMinutes())
  const screenWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const isSmallScreen = screenWidth < 1200

  if (isSmallScreen) {
    return `${day}.${month}.${year}`
  } else {
    return `${day}.${month}.${year} ${hours}:${minutes}`
  }
}

export const extractFolderName = (path: string): string => {
  const parts = path.split("/")
  return parts.length > 1 ? parts[parts.length - 2] : "Unknown Folder"
}

const addLeadingZero = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`
}
