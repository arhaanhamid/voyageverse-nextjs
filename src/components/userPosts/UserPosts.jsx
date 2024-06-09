import { getUserPosts } from "@/lib/data";
import styles from "./userPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const UserPosts = async ({ userId }) => {
  const posts = await getUserPosts(userId);
  console.log(posts);
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            {post.imageData.map((data) => {
              return (
                <Image
                  src={data.imageUrl || "/noimage.png"}
                  alt=""
                  key={data.imageId}
                  width={200}
                  height={200}
                />
              );
            })}
            <span className={styles.postTitle}>{post.title}</span>
            {/* <span className={styles.postDesc}>{post.desc}</span> */}
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
