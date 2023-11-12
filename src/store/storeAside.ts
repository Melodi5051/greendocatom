import { makeAutoObservable } from "mobx"

class StoreAside {
  isOpen: boolean = false
  constructor() {
    makeAutoObservable(this)
  }
  setIsOpen(status: boolean) {
    this.isOpen = status
  }
}

export const storeAside = new StoreAside()
