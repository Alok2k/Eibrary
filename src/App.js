import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard'
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import SurfEBooks from './components/pages/SurfEBooks';
import HarryPotter1Preview from './components/previews/harrypotterandthesorcerersstone';
import HarryPotter2Preview from './components/previews/HarryPotter2Preview';
import TakeQuiz from './components/pages/TakeQuiz';
import PieChart from './components/pages/Piechart';
import Notebook from './components/previews/theNotebook';

function App() {
  
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Sidebar' element={<Sidebar/>} />
      
        
          <Route path='/Dashboard'element={<Dashboard />} />
          <Route path='/SurfEBooks'element={<SurfEBooks/>} />
          <Route path='/TakeQuiz'element={<TakeQuiz/>} />
          <Route path='/Piechart'element={<PieChart/>} />
          <Route path="previews/harrypotterandthesorcerersstone" element={<HarryPotter1Preview/>} />
          <Route path='previews/harrypotterandthechamberofsecrets' element={<HarryPotter2Preview />} />
          <Route path='previews/thenotebook' element={<Notebook />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
