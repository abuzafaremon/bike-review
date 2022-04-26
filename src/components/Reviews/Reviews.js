import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className='review-container'>
      {
        reviews.map(review =>
          <div key={review.id}>
            <img src={review.img} alt="" />
            <h3>Name: {review.name}</h3>
            <p>Review: {review.review}</p>
            <h5>Ratting:{review.ratting}</h5>
          </div>)
      }
    </div>
  );
};

export default Reviews;