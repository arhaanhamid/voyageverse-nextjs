import styles from "./feed.module.css";
import { getPosts, getUser } from "@/lib/data";
import WidePostCard from "@/components/WidePostCard";

const Feed = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <div className="relative mb-[50px] mt-[25px]">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-full transition-all focus:w-full outline-none"
          name="search"
          type="search"
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          stroke-width="1.5"
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
        {posts.length > 0 &&
          posts.map((post) => <WidePostCard post={post} key={post._id} />)}
      </div>
    </div>
  );
};

export default Feed;
