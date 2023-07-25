import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/login/login';
import NotFound from './pages/notFound/notFound';
import Inicio from './pages/start/start';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Inicio/>} exact/>
    <Route path='*' element={<NotFound/>} exact/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
