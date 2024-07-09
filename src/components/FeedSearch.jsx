"use client";
import React, { useEffect, useState } from "react";
import WidePostCard from "@/components/WidePostCard";
import { getPosts } from "@/lib/data";

const FeedSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getPosts();
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  // useEffect for Searching tag/username/email/prompt
  // useEffect(() => {
  //   const searchedPosts = posts.filter((post) => {
  //     const fullPost = post.title;
  //     const regex = new RegExp(searchText, "i");
  //     return regex.test(fullPost);
  //   });

  //   setFilteredPosts(searchedPosts);
  // }, [searchText]);

  // console.log(filteredPosts);

  return (
    <div className="flex-col w-[70%] max-w-[1000px] mt-0 mb-0 mr-auto ml-auto">
      <div className="relative mb-[50px] mt-[25px]">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-full transition-all focus:w-full text-black outline-none"
          name="search"
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <div>
        {/* {filteredPosts.length > 0 &&
          filteredPosts.map((post) => (
            <WidePostCard post={post} key={post._id} />
          ))} */}
      </div>
    </div>
  );
};

export default FeedSearch;
