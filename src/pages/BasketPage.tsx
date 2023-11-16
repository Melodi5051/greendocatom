import { observer } from "mobx-react-lite"
import { appStore } from "../store/store"
import { useEffect } from "react"
import { getTrash } from "../API/axios.api"

const BasketPage = () => {
  useEffect(() => {
    getTrash()
  }, [])
  return (
    <div>
      {appStore.arrayTrashItems.map((el) => (
        <div>{el.name}</div>
      ))}
    </div>
  )
}

export default observer(BasketPage)
