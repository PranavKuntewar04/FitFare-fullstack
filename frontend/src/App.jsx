import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componenets/pages/Home'
import Gyms from './componenets/pages/Gyms'
import Location from './componenets/pages/Location'
import Feedback from './componenets/pages/Feedback'
import Test from './componenets/pages/Test'
import { FormProvider } from './context/FormContext'

function App() {

  return (
    <FormProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    </FormProvider>
  )
}

export default App
