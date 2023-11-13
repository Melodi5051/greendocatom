import React from 'react';
import { RouterProvider } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { RouterWeb } from "./router/router"
const App: React.FC = () => {
  return <RouterProvider router={RouterWeb} />
}

export default observer(App);
