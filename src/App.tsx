import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css'
import AxiosAndQueryMount from './components/AxiosAndQueryMount/AxiosAndQueryMount';
import AxiosAndRouting from './components/axiosAndRouting/AxiosAndRouting';
import { Loader } from './components/Loader/Loader';
import PostDetail from './components/PostDetail/PostDetail';


function App() {

  return (
    <div className="app">
      {/* <Loader classList={['loader-centern']} />
      <AxiosAndRouting /> */}
      {/* <AxiosAndQueryMount /> */}
      <Router>
            <Routes>
                <Route path="/" element={<AxiosAndQueryMount />} />
                <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
        </Router>
      
    </div>

  )
}

export default App



