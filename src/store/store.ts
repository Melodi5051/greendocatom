import { makeAutoObservable } from "mobx"
import { IYandexDiskFile } from "../types/Files"
class AppStore {
  arrayItems: IYandexDiskFile[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setArrayItems(newArrayItems: IYandexDiskFile[]) {
    this.arrayItems = newArrayItems
  }
}

export const appStore = new AppStore()
