import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/login/login'
import NotFound from './pages/notFound/notFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Login/>
    },
    {
      path: '*', element: <NotFound/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
