import { makeAutoObservable } from "mobx"
import { IYandexDiskFile, IYandexDiskFolders } from "../types/Files"

class AppStore {
  arrayItems: IYandexDiskFile[] = []
  categoryFilter: string = ""
  arrayFolders: any = []
  updateWeb: boolean = true
  limitItems: number = Math.floor((window.innerHeight - 320) / (window.innerWidth < 620 ? 70 : 65))
  constructor() {
    makeAutoObservable(this)
  }
  setLimitItems(newLimit: number) {
    this.limitItems = newLimit
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
