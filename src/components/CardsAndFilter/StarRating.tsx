// Компонент для отображения звёздочек рейтинга
export const StarRating: React.FC<{ rating: number; onRate: (rating: number) => void }> = ({ rating, onRate }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onRate(star)}
          style={{
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray',
            fontSize: '24px',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};