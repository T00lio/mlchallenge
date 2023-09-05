import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const StarRating = (rating) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating * maxStars);
  const hasHalfStar = rating * maxStars - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < filledStars) {
        stars.push(<StarIcon key={i} style={{ color: "gold" }} />);
      } else if (i === filledStars && hasHalfStar) {
        stars.push(<StarHalfIcon key={i} style={{ color: "gold" }} />);
      } else {
        stars.push(<StarBorderIcon key={i} style={{ color: "gold" }} />);
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
