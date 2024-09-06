import './App.css'
import AxiosAndRouting from './components/axiosAndRouting/AxiosAndRouting';
import { Loader } from './components/Loader/Loader';


function App() {

  return (
    <div className="app">
      <Loader classList={['loader-centern']} />
      <AxiosAndRouting />
      
    </div>
  )
}

export default App



