"use client";
import React, { useEffect, useState } from "react";
import { like, dislike, share, flag, comment } from "../PostSvg";
import { updateInteraction } from "@/lib/action";

const InteractionMenu = ({ postData, feedPage }) => {
  const intMenu = [
    ["Like", like],
    ["Dislike", dislike],
    ["Comment", comment],
    ["Share", share],
    ["Flag", flag],
  ];

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
      case "Comment":
        window.location.href = `/feed/${postData.postId.toString()}#moveToBottom`;
        break;
      default:
        break;
    }
  }
  return (
    <div className="my-5 flex items-center justify-center text-xs md:text-sm text-white font-bold gap-1 md:gap-5">
      {intMenu.map((item, index) => {
        const [label, SVG] = item;
        if (!feedPage && label === "Comment") {
          return "";
        }

        return (
          <div key={index} onClick={() => handleClick(label)} className="">
            {/* <Link href={""} disabled="disabled"> */}
            <button className="flex items-center px-3 py-1 gap-1 w-full h-[30px]">
              {<SVG id={label + "_svg"} userPrefs={interaction} className="" />}
              {
                <span id={label + "_span"}>
                  {label !== "Like" && label !== "Dislike"
                    ? label
                    : label === "Like"
                    ? interaction.likesCount
                    : interaction.dislikesCount}
                </span>
              }
            </button>
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
};

export default InteractionMenu;
