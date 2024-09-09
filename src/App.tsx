import './App.css'
import AxiosAndRouting from './components/axiosAndRouting/AxiosAndRouting';
import { CardsAndFilter } from './components/CardsAndFilter/CardsAndFilter';
import { Loader } from './components/Loader/Loader';


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
      <CardsAndFilter cards={cards} />

    </div>
  )
}

export default App



