import { getPosts, getUser } from "@/lib/data";
import FeedSearch from "@/components/FeedSearch";
import { format } from "date-fns";
import { auth } from "@/lib/auth";

const Feed = async () => {
  const session = await auth();
  const userId = session.user.id;

  async function getData() {
    const posts = await getPosts();
    const userPromises = posts.map((post) => getUser(post.userId));
    const users = await Promise.all(userPromises);

    const postsWithUsers = users.map((user, index) => {
      return {
        ...posts[index].toObject(),
        createdDate: format(new Date(posts[index].createdAt), "dd/MM/yyyy, p"),
        userImg:
          user.img !== undefined || user.img ? user.img : "/noavatar.png",
        username: user.username,
      };
    });

    return postsWithUsers;
  }

  const data = await getData();

  return <FeedSearch posts={JSON.stringify(data)} userId={userId} />;
};

export default Feed;
