"use client";

import { useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";

export function Rating({ ratingValue }) {
  const [rating, setRating] = useState(ratingValue);

  return (
    <ReactRating
      style={{ maxWidth: 100 }}
      value={rating}
      onChange={setRating}
      //   readOnly
    />
  );
}
