"use client";
import React, { useEffect, useRef, useState } from "react";
import { like, dislike, share, flag } from "./PostSvg";
import { updateInteraction } from "@/lib/action";

const InteractionMenu = ({
  likes,
  dislikes,
  userPrefs = JSON.parse(userPrefs),
  userId,
}) => {
  // const [prefs, setPrefs] = useState[{ likes: likes, dislikes: dislikes }];
  const intMenu = [
    ["Like", like],
    ["Dislike", dislike],
    ["Share", share],
    ["Flag", flag],
  ];

  const [interaction, setInteraction] = useState({
    like: userPrefs.like,
    dislike: userPrefs.dislike,
    pending: userPrefs.pending,
    userId: userId,
  });

  // const isInitialMount = useRef(true);

  // useEffect(() => {
  //   console.log("inside useeffect");
  //   console.log(interaction);
  //   console.log(isInitialMount);
  //   async function updateData() {
  //     try {
  //       await updateInteraction(interaction);
  //     } catch (error) {
  //       console.error("Error updating interaction:", error);
  //     }
  //   }

  //   if (isInitialMount.current) {
  //     console.log("isInitialMount");
  //     isInitialMount.current = false;
  //   } else {
  //     console.log("updateinh datra");
  //     updateData();
  //   }
  // }, [interaction]);

  function handleClick(item) {
    const likeBtn = document.getElementById("Like_svg");
    const dislikeBtn = document.getElementById("Dislike_svg");

    switch (item) {
      case "Like":
        setInteraction({ like: true, dislike: false, pending: false });
        likeBtn.setAttribute("fill", "white");
        dislikeBtn.setAttribute("fill", "black");

        break;
      case "Dislike":
        setInteraction({ like: false, dislike: true, pending: false });
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
              {<SVG id={label + "_svg"} userPrefs={userPrefs} />}
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
