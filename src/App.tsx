import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css'
import AxiosAndQueryMount from './components/AxiosAndQueryMount/AxiosAndQueryMount';
import AxiosAndRouting from './components/axiosAndRouting/AxiosAndRouting';
import { CardsAndFilter } from './components/CardsAndFilter/CardsAndFilter';
import { Loader } from './components/Loader/Loader';
import PostDetail from './components/PostDetail/PostDetail';


function App() {

  // Типы для карточки и пропсов компонента
  interface Card {
    id: number;
    title: string;
    description: string;
  }

  const cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'This is the first card' },
    { id: 2, title: 'Card 2', description: 'This is the second card' },
    { id: 3, title: 'Card 3', description: 'This is the third card' },
  ];

  return (
    <div className="app">
      <Loader classList={['loader-centern']} />
      {/* <AxiosAndRouting /> */}
      

      {/* <Loader classList={['loader-centern']} />
      <AxiosAndRouting /> */}
      {/* <AxiosAndQueryMount /> */}
      {/* <Router>
            <Routes>
                <Route path="/" element={<AxiosAndQueryMount />} />
                <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
        </Router> */}
        <CardsAndFilter cards={cards} />
      
    </div>

  )
}

export default App



