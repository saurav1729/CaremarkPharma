import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Reviews = ({ reviews }) => {
  const averageRating = reviews && reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="mt-16">
      <h2 className="text-lg font-medium text-gray-900">Customer Reviews</h2>
      <div className="mt-3 flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                averageRating > rating ? 'text-yellow-400' : 'text-gray-300',
                'h-5 w-5 flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-2 text-sm text-gray-900">{averageRating.toFixed(1)} out of 5 stars</p>
      </div>
      <div className="mt-6">
        <h3 className="sr-only">Review data</h3>
        <dl className="space-y-3">
          {reviews.map((review) => (
            <div key={review.user} className="flex items-center text-sm">
              <dt className="flex-1 flex items-center">
                <p className="w-3/12 font-medium text-gray-900">{review.user}</p>
                <div className="ml-1 flex flex-1 items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </dt>
              <dd className="ml-4 flex items-center">
                <span className="text-gray-600">{review.comment}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Reviews;

