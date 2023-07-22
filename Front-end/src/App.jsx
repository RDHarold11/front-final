import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/login/login';
import NotFound from './pages/notFound/notFound';
import Inicio from './pages/start/start';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Inicio/>
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
