import React, { useState } from "react"
import { createFolders } from "./API/axios.api"
const App: React.FC = () => {
  const [nameFolder, setNameFolder] = useState("second")
  return (
    <div>
      <input type="text" name="" id="" onChange={(e) => setNameFolder(e.target.value)} />
      <button onClick={() => createFolders(nameFolder)}>Создать папку</button>
    </div>
  )
}

export default App
