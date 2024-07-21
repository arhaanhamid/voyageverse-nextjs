import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import DisqusCommentBlock from "@/components/Disqus/DisqusCommentBlock";
import PostCrousel from "@/components/PostCrousel";
import InteractionMenu from "@/components/postMenu/InteractionMenu";
import { auth } from "@/lib/auth";

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

  const session = await auth();
  const userId = session.user.id;

  const userPrefs = await post.userPrefs.filter(
    (item) => userId === item.userId
  );

  // await updateManyData();

  function handleClick() {
    console.log("follow clicked");
    // case "Follow":
    //   vote.follow
    //     ? (followBtn.setAttribute("fill", "gray"),
    //       (followSpan.innerText = "Follow"))
    //     : (followBtn.setAttribute("fill", "red"),
    //       (followSpan.innerText = "Unfollow"));
    //   setVotes({ ...setVotes, follow: !vote.follow });

    //   break;
  }

  return (
    <div>
      <div className={styles.container}>
        <div>
          <PostCrousel plainPost={plainPost} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className="flex gap-32 items-center">
            <div className="flex gap-10">
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
            <div className="flex items-center justify-center bg-black text-white w-[100px] h-[40px] rounded-full font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black cursor-pointer">
              Follow
            </div>
          </div>
          <div className={styles.content}>{post.desc}</div>
        </div>
      </div>

      <InteractionMenu
        likes={post.prefs.likes}
        dislikes={post.prefs.dislikes}
        userPrefs={
          userPrefs.length > 0
            ? JSON.stringify(userPrefs[0])
            : { like: false, dislike: false, pending: true }
        }
        userId={userId}
      />

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
