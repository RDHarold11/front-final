import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './login/login'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
