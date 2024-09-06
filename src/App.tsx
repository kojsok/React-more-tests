import './App.css'
import AxiosAndQueryMount from './components/AxiosAndQueryMount/AxiosAndQueryMount';
import AxiosAndRouting from './components/axiosAndRouting/AxiosAndRouting';
import { Loader } from './components/Loader/Loader';


function App() {

  return (
    <div className="app">
      {/* <Loader classList={['loader-centern']} />
      <AxiosAndRouting /> */}
      <AxiosAndQueryMount />
      
    </div>
  )
}

export default App



