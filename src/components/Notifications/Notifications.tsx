import React, { useEffect, useState } from "react"
import "./Notifications.css"
import error from "./../../assets/icons/alert.png"
import success from "./../../assets/icons/success.png"
import { observer } from "mobx-react-lite"
import { storeNotifications } from "../../store/storeNotifications"
import ReactDOM from "react-dom"

interface IPropsNotions {
  title: string
  type: string
}

const Notifications = ({ title, type }: IPropsNotions) => {
  const typeNotificationsClasses: any = {
    fatal: { className: "fatal", icon: error },
    success: { className: "success", icon: success },
  }
  const notificationClass = typeNotificationsClasses[type]?.className || ""
  const notificationIcon = typeNotificationsClasses[type]?.icon || ""
  useEffect(() => {
    const timer = setTimeout(() => {
      storeNotifications.removeNotification({ title, type })
      storeNotifications.setVisible(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`notions ${storeNotifications.isVisible ? "" : "hidden"}`}>
      {storeNotifications.isVisible && (
        <div className={`notions-card ${notificationClass}`}>
          <img src={notificationIcon} alt="" />
          <div className={"notions-card__content"}>{title}</div>
          <button>Х</button>
        </div>
      )}
    </div>
  )
}

export default observer(Notifications)
