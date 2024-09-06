const getStarRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="material-symbols-rounded rate">star_rate</span>
      ))}
      {/* Half Star */}
      {hasHalfStar && (
        <span className="material-symbols-rounded rate">star_rate_half</span>
      )}
      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="material-symbols-rounded unset">star_rate</span>
      ))}
    </>
  );
};

export default getStarRating;