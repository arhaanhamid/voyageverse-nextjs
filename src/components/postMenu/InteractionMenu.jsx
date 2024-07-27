"use client";
import React, { useEffect, useRef, useState } from "react";
import { like, dislike, share, flag } from "./PostSvg";
import { updateInteraction } from "@/lib/action";

const InteractionMenu = ({ postRawData }) => {
  const intMenu = [
    ["Like", like],
    ["Dislike", dislike],
    ["Share", share],
    ["Flag", flag],
  ];

  const postData = JSON.parse(postRawData);

  // interaction valuse that we pass to server function to update mongodb
  const [interaction, setInteraction] = useState({
    like: postData.like,
    dislike: postData.dislike,
    pending: postData.pending,
    likesCount: postData.likesCount,
    dislikesCount: postData.dislikesCount,
    userId: postData.userId,
    postId: postData.postId,
  });

  //useeffect to call updateData server function to update mongoDB
  useEffect(() => {
    async function updateData() {
      try {
        await updateInteraction(interaction);
      } catch (error) {
        console.error("Error updating interaction:", error);
      }
    }

    // Only update when like or dislike changes
    if (
      interaction.like !== postData.like ||
      interaction.dislike !== postData.dislike
    ) {
      updateData();
    }
  }, [interaction.like, interaction.dislike]);

  //onClick to handle like and dislike events
  function handleClick(item) {
    let prefs = {};
    switch (item) {
      case "Like":
        //if-else ladder to hadnle likes count depending on previous values
        if (interaction.like) {
          prefs = { ...interaction };
        } else if (interaction.dislike) {
          prefs = {
            ...interaction,
            likesCount: interaction.likesCount + 1,
            dislikesCount: interaction.dislikesCount - 1,
          };
        } else {
          prefs = { ...interaction, likesCount: interaction.likesCount + 1 };
        }

        setInteraction({
          ...prefs,
          like: true,
          dislike: false,
          pending: false,
        });

        break;
      case "Dislike":
        //if-else ladder to hadnle dislikes count depending on previous values
        if (interaction.dislike) {
          prefs = { ...interaction };
        } else if (interaction.like) {
          prefs = {
            ...interaction,
            likesCount: interaction.likesCount - 1,
            dislikesCount: interaction.dislikesCount + 1,
          };
        } else {
          prefs = {
            ...interaction,
            dislikesCount: interaction.dislikesCount + 1,
          };
        }

        setInteraction({
          ...prefs,
          like: false,
          dislike: true,
          pending: false,
        });

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
              {<SVG id={label + "_svg"} userPrefs={interaction} />}
              {
                <span id={label + "_span"} className="font-bold text-white">
                  {label !== "Like" && label !== "Dislike"
                    ? label
                    : label === "Like"
                    ? interaction.likesCount
                    : interaction.dislikesCount}
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
