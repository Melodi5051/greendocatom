import { observer } from "mobx-react-lite"
import "./Main.css"
import Aside from "../Aside/Aside"
import { storeAside } from "../../store/storeAside"
import MainHeader from "../MainHeader/MainHeader"
import { Outlet } from "react-router-dom"
import Notifications from "../Notifications/Notifications"
import { storeNotifications } from "../../store/storeNotifications"

const Main = () => {
  const handleClickDocument = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    if (!target.closest(".aside-open") && !target.closest(".aside-close")) {
      storeAside.setIsOpen(false)
    }
  }
  return (
    <main onClick={(event) => handleClickDocument(event)}>
      {storeNotifications.notifications.map((notification, index: number) => (
        <Notifications key={index} title={notification.title} type={notification.type} />
      ))}
      <Aside />
      <div className="main-content">
        <MainHeader />
        <Outlet />
      </div>
    </main>
  )
}

export default observer(Main)
