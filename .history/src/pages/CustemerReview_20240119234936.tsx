import React from 'react';
import '../style/review.css'
interface Review {
  id: number;
  username: string;
  comment: string;
  rating: number;
}

interface ReviewsProps {
  review: Review[];
}

const CustemerReview: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {review.map((review) => (
          <li key={review.id} style={reviewStyle}>
            <strong>{review.username}</strong>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const reviewStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  margin: '10px 0',
};

export default CustemerReview;
