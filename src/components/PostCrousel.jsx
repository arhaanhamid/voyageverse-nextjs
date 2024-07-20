"use client";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const PostCrousel = ({ plainPost }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const post = JSON.parse(plainPost);

  function handleClickImage(e) {
    setSelectedImage(post.imageData[e].imageUrl);
  }

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  // const handleEnlargedImageClick = (e, imageUrl) => {
  //   e.stopPropagation(); // Prevent the overlay click handler from firing
  //   window.open(imageUrl, "_blank");
  // };

  return (
    <div>
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        stopOnHover
        swipeable
        useKeyboardArrows
        showThumbs={false}
        onClickItem={handleClickImage}
      >
        {post.imageData.map((img, index) => {
          return (
            <div
              key={index}
              className="flex-1 relative"
              style={{ height: "calc(100vh - 200px)" }}
            >
              <Image
                src={img.imageUrl ? img.imageUrl : "/noimage.png"}
                alt={post.title}
                fill
              />
            </div>
          );
        })}
      </Carousel>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <Image
            src={selectedImage}
            alt={post.title}
            className="object-contain"
            fill
          />
        </div>
      )}
    </div>
  );
};

export default PostCrousel;
