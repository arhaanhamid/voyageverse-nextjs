import { getUser, getUserPosts } from "@/lib/data";
import WidePostCard from "../WidePostCard";
import { format } from "date-fns";

const UserPosts = async ({ userId }) => {
  const posts = await getUserPosts(userId);
  const user = await getUser(userId);
  return (
    <div className="mb-10">
      {posts.length > 0 &&
        posts.map((post) => {
          post.createdDate = format(new Date(post.createdAt), "dd/MM/yyyy, p");
          post.username = user.username;
          post.userImg = user.img;
          return <WidePostCard post={post} key={post._id} />;
        })}
    </div>
  );
};

export default UserPosts;
