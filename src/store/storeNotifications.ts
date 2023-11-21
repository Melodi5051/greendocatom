import { makeAutoObservable } from "mobx"
interface Notification {
  title: string
  type: string
}
class StoreNotifications {
  constructor() {
    makeAutoObservable(this)
  }
  isVisible = false
  notifications: Notification[] = []
  setVisible = (status: boolean) => {
    this.isVisible = status
  }
  addNotification(notification: Notification) {
    this.notifications.push(notification)
  }

  removeNotification(notification: Notification) {
    console.log(notification)
    console.log(this.notifications[0])
    this.notifications = this.notifications.filter((item: any) => item.title !== notification.title)
  }
}

export const storeNotifications = new StoreNotifications()
