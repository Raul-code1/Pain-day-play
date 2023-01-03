import { BrowserRouter,Route,Routes } from 'react-router-dom'

import { AboutPage, HomePage, CompaniesPage, ErrorPage } from './pages'
import { NavBar } from './components/layout'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/companies' element={ <CompaniesPage /> } />
        <Route path='/*' element={ <ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
