"use client";

import { useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";

export function Rating({ ratingValue, ratingSize }) {
  const [rating, setRating] = useState(ratingValue);

  return (
    <ReactRating
      style={{ maxWidth: ratingSize }}
      value={rating}
      onChange={setRating}
      //   readOnly
    />
  );
}
