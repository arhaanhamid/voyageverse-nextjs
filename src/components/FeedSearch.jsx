"use client";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import WidePostCard from "@/components/WidePostCard";
import { getPosts } from "@/lib/data";
import ShortPostCard from "./ShortPostCard";
import Skeleton from "./Skeleton";

const FeedSearch = ({ posts, userId }) => {
  const parsedPosts = JSON.parse(posts);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const filteredPosts = useMemo(() => {
    if (!searchText) return parsedPosts;

    const regex = new RegExp(searchText, "i");
    const posts = parsedPosts.filter((post) => regex.test(post.title));

    return posts;
  }, [searchText, parsedPosts]);

  return (
    <div className="flex-col w-[70%] mt-0 mb-0 mr-auto ml-auto">
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
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Suspense fallback={<Skeleton />} key={post._id}>
              <WidePostCard post={post} userId={userId} />
            </Suspense>
          ))
        ) : (
          <div className="text-black">
            <h1 className="text-4xl font-bold mb-8 text-center">
              No results for{" "}
              <span className="font-extrabold">&quot;{searchText}&quot;</span>
            </h1>
            {/* <p className="text-xl font-medium text-center">
              Try searching for something else, or check your Search settings to
              see if they’re protecting you from potentially sensitive content.
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedSearch;
