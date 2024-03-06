import Login from './pages/Login'
import Logup from './pages/Logup'
import Rutas from './constants/Routes'
import './styles/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'

function App() {
   return (
      <>
         <div>
            <BrowserRouter basename='/integradoranorma'>
            {/* <BrowserRouter basename='/'> */}
               <Routes>
                  <Route exact path='*' element={<h1>Hola Mundo</h1>} />
                  <Route exact path={Rutas.sesion.path} element={<Index />} />
                  <Route exact path={Rutas.login.path} element={<Login />} />
                  <Route exact path={Rutas.logup.path} element={<Logup />} />
               </Routes>
            </BrowserRouter>
         </div>
         {/* <Logup /> */}
         {/* <Login /> */}
         {/* <Input 
        nombre="Hola" 
        maxLength={50}
        attributs={{
          tipo: 'text',
          minLength: '0',
          name: 'InputLogupSpelitM',
          required: true
        }}
      /> */}
         {/* <h1>Hola mundo</h1> */}
         {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola Mundo De React</h1>
      <p>
        Alan Eduardo
        Adrian Oziel
        Brian Michel
      </p> */}
      </>
   )
}

export default App
