import { useState } from "react";
import { StarRating } from "./StarRating";

// Типы для карточки и пропсов компонента
interface Card {
    id: number;
    title: string;
    description: string;
    rating: number;
  }
  
  interface CardListProps {
    cards: Card[];
  }
  
  // Компонент CardList с фильтром по заголовку карточки
  export const CardsAndFilter: React.FC<CardListProps> = ({ cards }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [cardRatings, setCardRatings] = useState<{ [key: number]: number }>(
      cards.reduce((acc, card) => ({ ...acc, [card.id]: card.rating }), {})
    );
  
    // Фильтрация карточек по введённому тексту в input
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Обновление рейтинга карточки
    const handleRate = (id: number, rating: number) => {
      setCardRatings((prevRatings) => ({ ...prevRatings, [id]: rating }));
      console.log(cardRatings);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        <div>
          {filteredCards.map((card) => (
            <div key={card.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '8px 0' }}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <StarRating rating={cardRatings[card.id]} onRate={(rating) => handleRate(card.id, rating)} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  