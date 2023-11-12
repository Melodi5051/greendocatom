import { makeAutoObservable } from "mobx"
import { IYandexDiskFile } from "../types/Files"

class AppStore {
  arrayItems: IYandexDiskFile[] = []
  categoryFilter: string = ""
  arrayFolders: [] = []
  updateWeb: boolean = true
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
}

export const appStore = new AppStore()
