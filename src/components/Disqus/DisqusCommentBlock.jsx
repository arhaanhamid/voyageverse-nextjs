"use client";
import { DiscussionEmbed } from "disqus-react";
import React from "react";

const DisqusCommentBlock = ({ shortname, config }) => {
  return (
    <div className="">
      <DiscussionEmbed
        shortname={shortname}
        config={{
          url: config.url,
          identifier: config.identifier,
          title: config.title,
          language: config.language || "en_EN",
        }}
      />
    </div>
  );
};

export default DisqusCommentBlock;
