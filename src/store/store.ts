import { makeAutoObservable } from "mobx"
import { IYandexDiskFile, IYandexDiskFolders } from "../types/Files"

class AppStore {
  arrayItems: IYandexDiskFile[] = []
  categoryFilter: string = ""
  arrayFolders: any = []
  updateWeb: boolean = true
  searchSubstring: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setArrayFolders(newArrayFolders: []) {
    this.arrayFolders = newArrayFolders
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
      const foundItems = arrayItems.filter((item) => item.name.toLowerCase().includes(this.searchSubstring.toLowerCase()))
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
