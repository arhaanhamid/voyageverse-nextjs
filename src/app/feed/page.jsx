import { getPosts, getUser } from "@/lib/data";
import FeedSearch from "@/components/FeedSearch";
import { format } from "date-fns";
import { auth } from "@/lib/auth";
import "core-js/features/promise";
import { Promise } from "core-js";

const Feed = async () => {
  const session = await auth();
  const userId = session.user.id;

  async function getData() {
    try {
      const posts = await getPosts();
      const userPromises = posts.map((post) => getUser(post.userId));
      const users = await Promise.all(userPromises);

      const postPromises = users.map((user, index) => ({
        ...posts[index].toObject(),
        createdDate: format(new Date(posts[index].createdAt), "dd/MM/yyyy, p"),
        userImg: user.img || "/noavatar.png",
        username: user.username,
      }));

      const postsWithUsers = await Promise.all(postPromises);

      const finalData = postsWithUsers.map((post) => {
        const userPrefs = post.userPrefs.find(
          (pref) => pref.userId === userId
        ) || {
          like: false,
          dislike: false,
          pending: true,
        };

        const postData = {
          like: userPrefs.like,
          dislike: userPrefs.dislike,
          pending: userPrefs.pending,
          likesCount: post.prefs.likes,
          dislikesCount: post.prefs.dislikes,
          userId,
          postId: post._id,
        };
        return { ...post, postData };
      });
      return finalData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  const data = await getData();

  return <FeedSearch posts={JSON.stringify(data)} userId={userId} />;
};

export default Feed;
