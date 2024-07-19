"use client";
import React, { useEffect, useState } from "react";
import { like, dislike, follow, share, flag } from "./PostSvg";

const InteractionMenu = () => {
  const intMenu = [
    ["Like", like],
    ["Dislike", dislike],
    ["Follow", follow],
    ["Share", share],
    ["Flag", flag],
  ];

  const [vote, setVotes] = useState({
    like: false,
    dislike: false,
    follow: false,
  });

  useEffect(() => {}, [vote]);

  function handleClick(item) {
    const likeBtn = document.getElementById("Like_svg");
    const dislikeBtn = document.getElementById("Dislike_svg");
    const followBtn = document.getElementById("Follow_svg");
    const followSpan = document.getElementById("Follow_span");

    switch (item) {
      case "Like":
        setVotes({ like: true, dislike: false });
        likeBtn.setAttribute("fill", "blue");
        dislikeBtn.setAttribute("fill", "gray");
        break;
      case "Dislike":
        setVotes({ like: false, dislike: true });
        dislikeBtn.setAttribute("fill", "blue");
        likeBtn.setAttribute("fill", "gray");
        break;
      case "Follow":
        vote.follow
          ? (followBtn.setAttribute("fill", "gray"),
            (followSpan.innerText = "Follow"))
          : (followBtn.setAttribute("fill", "red"),
            (followSpan.innerText = "Unfollow"));
        setVotes({ ...setVotes, follow: !vote.follow });

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
        return (
          <div key={index} onClick={() => handleClick(label)}>
            <button className="flex flex-col items-center gap-2">
              {<SVG id={label + "_svg"} />}
              <span id={label + "_span"} className="text-xl">
                {label}
              </span>
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
