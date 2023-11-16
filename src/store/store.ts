import { makeAutoObservable } from "mobx"
import { IYandexDiskFile, IYandexDiskFolders, IYandexTrashItems } from "../types/Files"
import { storeAddFiles } from "./storeAddFiles"

class AppStore {
  arrayItems: IYandexDiskFile[] = []
  categoryFilter: string = ""
  arrayFolders: IYandexDiskFolders[] = []
  updateWeb: boolean = true
  limitItems: number = Math.floor((window.innerHeight - 320) / (window.innerWidth < 620 ? 70 : 65))
  currentPage: number = 1
  searchSubstring: string = ""
  categoryTemp: string = ""
  arrayTrashItems: IYandexTrashItems[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setCategoryTemp(newTemp: string) {
    this.categoryTemp = newTemp
  }
  setCurrentPage(newCurrent: number) {
    this.currentPage = newCurrent
  }
  setLimitItems(newLimit: number) {
    this.limitItems = newLimit
  }
  setArrayFolders(newArrayFolders: IYandexDiskFolders[]) {
    this.arrayFolders = newArrayFolders
    storeAddFiles.setSelectedFolder(newArrayFolders[0].name)
  }
  setArrayTrashItems(newArrayTrashItems: IYandexTrashItems[]) {
    this.arrayTrashItems = newArrayTrashItems
  }
  setCategoryFilter(newCategoryFilter: string) {
    this.categoryFilter = newCategoryFilter
  }

  setArrayItems(newArrayItems: IYandexDiskFile[]) {
    this.arrayItems = newArrayItems
  }

  updateAllComponents(newStatus: boolean) {
    this.updateWeb = newStatus
  }

  findItems(arrayItems: IYandexDiskFile[]) {
    if (arrayItems && this.searchSubstring) {
      const foundItems = arrayItems.filter((item) =>
        item.name.toLowerCase().includes(this.searchSubstring.toLowerCase()),
      )
      return foundItems
    } else {
      return arrayItems
    }
  }

  setSubstring(substring: string) {
    this.searchSubstring = substring
  }
}

export const appStore = new AppStore()
