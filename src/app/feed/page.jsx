import PostCard from "@/components/postCard/PostCard";
import styles from "./feed.module.css";
import { getPosts } from "@/lib/data";
import UserPostForm from "@/components/userPostForm/UserPostForm";
import { auth } from "@/lib/auth";
import UserPostCard from "@/components/WidePostCard";
import Script from "next/script";

const Feed = async () => {
  const posts = await getPosts();
  const session = await auth();

  return (
    <div className={styles.container}>
      <div>
        <UserPostForm userId={session.user.id} />
      </div>
      <div>
        {posts.length > 0 &&
          posts.map((post) => <UserPostCard post={post} key={post._id} />)}
      </div>
    </div>
  );
};

export default Feed;
