import { makeAutoObservable } from "mobx"

class StoreAddFIles {
  selectedFile: File | null = null
  selectedFolder: string = ""

  constructor() {
    makeAutoObservable(this)
  }

  setSelectedFile(file: File | null) {
    this.selectedFile = file
  }

  setSelectedFolder(folder: string) {
    this.selectedFolder = folder
  }

  clearSelections() {
    this.selectedFile = null
    this.selectedFolder = ""
  }
}
export const storeAddFiles = new StoreAddFIles()
