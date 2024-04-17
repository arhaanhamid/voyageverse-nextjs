import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   console.log("INSIDE BLOG PAGE BEFORE FETCHING DATA...");
//   const res = await fetch(`${process.env.DOMAIN}/api/blog`, {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();
  // console.log("INSIDE BLOG PAGE AFTER FETCHING DATA");
  // console.log(posts);

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
