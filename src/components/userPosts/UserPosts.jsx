import { getUser, getUserPosts } from "@/lib/data";
import styles from "./userPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import UserPostCard from "../WidePostCard";

const UserPosts = async ({ userId }) => {
  const posts = await getUserPosts(userId);
  const user = await getUser(userId);
  return (
    <div className="mb-10">
      {/* <UserPostCard post={posts} />; */}
      {posts.length > 0 &&
        posts.map((post) => (
          <UserPostCard post={post} user={user} key={post._id} />
        ))}
    </div>
  );
};

export default UserPosts;
