import styles from "./feed.module.css";
import { getPosts, getUser } from "@/lib/data";
import UserPostForm from "@/components/userPostForm/UserPostForm";
import { auth } from "@/lib/auth";
import WidePostCard from "@/components/WidePostCard";

const Feed = async () => {
  const posts = await getPosts();
  const session = await auth();
  const user = await getUser(session.user.id);

  return (
    <div className={styles.container}>
      {/* <div>
        <UserPostForm userId={session.user.id} />
      </div> */}
      <div>
        {posts.length > 0 &&
          posts.map((post) => (
            <WidePostCard post={post} user={user} key={post._id} />
          ))}
      </div>
    </div>
  );
};

export default Feed;
