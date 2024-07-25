"use client";
import React, { useEffect, useRef, useState } from "react";
import { like, dislike, share, flag } from "./PostSvg";
import { updateInteraction } from "@/lib/action";

const InteractionMenu = ({
  likes,
  dislikes,
  userPrefs,
  userId,
  postId,
  plainPost,
}) => {
  const post = JSON.parse(plainPost);
  // const [prefs, setPrefs] = useState[{ likes: likes, dislikes: dislikes }];
  const intMenu = [
    ["Like", like],
    ["Dislike", dislike],
    ["Share", share],
    ["Flag", flag],
  ];
  console.log(likes);
  console.log(userPrefs);
  const parsedUserPrefs = JSON.parse(userPrefs);

  const [interaction, setInteraction] = useState({
    like: parsedUserPrefs.like,
    dislike: parsedUserPrefs.dislike,
    pending: parsedUserPrefs.pending,
    userId: userId,
    postId,
  });

  useEffect(() => {
    async function updateData() {
      try {
        console.log("updateData");
        await updateInteraction(interaction);
      } catch (error) {
        console.error("Error updating interaction:", error);
      }
    }
    // Only update when like or dislike changes
    if (
      interaction.like !== parsedUserPrefs.like ||
      interaction.dislike !== parsedUserPrefs.dislike
    ) {
      updateData();

      parsedUserPrefs.like = interaction.like;
      parsedUserPrefs.dislike = interaction.dislike;
    }
  }, [interaction.like, interaction.dislike]);

  function handleClick(item) {
    const likeBtn = document.getElementById("Like_svg");
    const dislikeBtn = document.getElementById("Dislike_svg");

    switch (item) {
      case "Like":
        setInteraction({
          ...interaction,
          like: true,
          dislike: false,
          pending: false,
        });
        likeBtn.setAttribute("fill", "white");
        dislikeBtn.setAttribute("fill", "black");

        break;
      case "Dislike":
        setInteraction({
          ...interaction,
          like: false,
          dislike: true,
          pending: false,
        });
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
        return (
          <div
            key={index}
            onClick={() => handleClick(label)}
            className="flex items-center"
          >
            <button className="flex items-center px-6 py-5 border-2 bg-black rounded-full gap-3 w-full h-[40px]">
              {<SVG id={label + "_svg"} userPrefs={parsedUserPrefs} />}
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
