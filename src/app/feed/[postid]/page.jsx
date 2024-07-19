import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import DisqusCommentBlock from "@/components/Disqus/DisqusCommentBlock";
import PostCrousel from "@/components/PostCrousel";
import { Rating } from "@/components/Rating";
import InteractionMenu from "@/components/postMenu/InteractionMenu";

export const generateMetadata = async ({ params }) => {
  const { postid } = params;

  const post = await getPost(postid);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { postid } = params;
  const post = await getPost(postid);
  const plainPost = JSON.stringify(post);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <PostCrousel plainPost={plainPost} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className={styles.content}>{post.desc}</div>
        </div>
      </div>

      <InteractionMenu likes={10} dislikes={5} />

      <DisqusCommentBlock
        shortname="voyageverse-3"
        config={{
          url: "http://localhost:3000/" + "feed/" + postid,
          identifier: postid,
          title: post.title,
          language: "en",
        }}
      />
    </div>
  );
};

export default SinglePostPage;
