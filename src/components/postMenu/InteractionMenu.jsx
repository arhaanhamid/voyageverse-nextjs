"use client";
import React, { useEffect, useState } from "react";
import { like, dislike, share, flag } from "./PostSvg";

const InteractionMenu = ({ likes, dislikes }) => {
  // const [prefs, setPrefs] = useState[{ likes: likes, dislikes: dislikes }];
  const intMenu = [
    ["Like", like],
    ["Dislike", dislike],
    ["Share", share],
    ["Flag", flag],
  ];

  const [vote, setVotes] = useState({
    like: false,
    dislike: false,
  });

  useEffect(() => {}, [vote]);

  function handleClick(item) {
    const likeBtn = document.getElementById("Like_svg");
    const dislikeBtn = document.getElementById("Dislike_svg");

    switch (item) {
      case "Like":
        setVotes({ like: true, dislike: false });
        likeBtn.setAttribute("fill", "white");
        dislikeBtn.setAttribute("fill", "black");
        break;
      case "Dislike":
        setVotes({ like: false, dislike: true });
        dislikeBtn.setAttribute("fill", "white");
        likeBtn.setAttribute("fill", "black");
        break;
      case "Share":
        break;
      case "Flag":
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex justify-center gap-10">
      {intMenu.map((item, index) => {
        const [label, SVG] = item;
        console.log(label !== "Like");
        return (
          <div
            key={index}
            onClick={() => handleClick(label)}
            className="flex items-center"
          >
            <button className="flex items-center px-6 py-5 border-2 bg-black rounded-full gap-3 w-full h-[40px]">
              {<SVG id={label + "_svg"} />}
              {
                <span id={label + "_span"} className="font-bold text-white">
                  {label !== "Like" && label !== "Dislike"
                    ? label
                    : label === "Like"
                    ? likes
                    : dislikes}
                </span>
              }
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default InteractionMenu;
{
  /* <object
  // id={item + "svg"}
  // type="image/svg+xml"
  data={item[1]}
></object> */
}
{
  /* <Image
  src={item[1]}
  alt={item[0]}
  width={30}
  height={30}
/> */
}
