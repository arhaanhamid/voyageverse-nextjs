"use client";
import { DiscussionEmbed } from "disqus-react";
import React from "react";

const DisqusCommentBlock = ({ shortname, config }) => {
  console.log(shortname, config);
  return (
    <div>
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
