import PostCard from "@/components/postCard/PostCard";
import styles from "./feed.module.css";
import { getPosts } from "@/lib/data";
import UserPostForm from "@/components/userPostForm/UserPostForm";
import { auth } from "@/lib/auth";
import UserPostCard from "@/components/UserPostCard";

const Feed = async () => {
  const posts = await getPosts();
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.form}>
          <UserPostForm userId={session.user.id} />
        </div>
        {posts.map((post) => (
          <div className={styles.post} key={post._id}>
            {/* <PostCard post={post} /> */}
            {posts.length > 0 &&
              posts.map((post) => <UserPostCard post={post} key={post._id} />)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
