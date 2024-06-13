import { getUserPosts } from "@/lib/data";
import styles from "./userPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import UserPostCard from "../UserPostCard";

const UserPosts = async ({ userId }) => {
  const posts = await getUserPosts(userId);
  // console.log(posts);

  return (
    <div className="mb-10">
      {/* <UserPostCard post={posts} />; */}

      {posts.length > 0 &&
        posts.map((post) => <UserPostCard post={post} key={post._id} />)}
    </div>
  );
};

export default UserPosts;
