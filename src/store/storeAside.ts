import { makeAutoObservable } from "mobx"

class StoreAside {
  isOpen: boolean = false
  editedValueInputAdd: string = ""

  constructor() {
    makeAutoObservable(this)
  }

  setIsOpen(status: boolean) {
    this.isOpen = status
  }

  setEditedValueInputAdd(value: string) {
    this.editedValueInputAdd = value
  }
}

export const storeAside = new StoreAside()
