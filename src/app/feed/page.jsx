import styles from "./feed.module.css";
import { getPosts, getUser, getUsers } from "@/lib/data";
import WidePostCard from "@/components/WidePostCard";
import FeedSearch from "@/components/FeedSearch";
import { format } from "date-fns";

const Feed = async () => {
  async function getData() {
    const posts = await getPosts();
    const userPromises = posts.map((post) => getUser(post.userId));
    const users = await Promise.all(userPromises);

    const postsWithUsers = users.map((user, index) => {
      console.log(user);
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

  return <FeedSearch posts={JSON.stringify(data)} />;
};

export default Feed;
