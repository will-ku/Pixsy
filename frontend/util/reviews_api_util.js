export const fetchAllReviews = () => {
  return $.ajax({
    url: "/api/reviews",
  });
};

export const fetchReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
  });
};

export const createReview = (review) => {
  return $.ajax({
    url: "/api/reviews",
    method: "post",
    data: { review },
  });
};

export const updateReview = (review) => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: "patch",
    data: { review },
  });
};

export const deleteReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "delete",
  });
};
