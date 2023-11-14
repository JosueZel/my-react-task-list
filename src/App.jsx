import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import Menu from './pages/Menu';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
function App() {
  return (
    <>
     <Router>
      <div>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<TaskList />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
      <div>
      </div>
    </>
  )
}
export default App
