import styles from "./feed.module.css";
import { getPosts, getUser } from "@/lib/data";
import WidePostCard from "@/components/WidePostCard";
import FeedSearch from "@/components/FeedSearch";

const Feed = async () => {
  // const posts = await getPosts();
  // console.log(posts);
  return <FeedSearch />;
};

export default Feed;
