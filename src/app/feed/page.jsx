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

    const postsWithUsers = users.map((user, index) => ({
      ...posts[index].toObject(),
      createdDate: format(new Date(posts[index].createdAt), "dd/MM/yyyy, p"),
      userImg: user.img || "/noavatar.png",
      username: user.username,
    }));

    return postsWithUsers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

  const data = await getData();

  return <FeedSearch posts={JSON.stringify(data)} userId={userId} />;
};

export default Feed;
