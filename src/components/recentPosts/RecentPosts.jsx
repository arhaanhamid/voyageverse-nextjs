import { getRecentPosts } from "@/lib/data";
import ShortPostCard from "../ShortPostCard";

const RecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <div className="container mx-auto p-4 pt-0 flex flex-col gap-10">
      <div className="text-center mb-0">
        <h1 className="font-extrabold text-black text-4xl ">Recent Activity</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {posts.length > 0 &&
          posts.map((post) => <ShortPostCard post={post} key={post._id} />)}
      </div>
    </div>
  );
};

export default RecentPosts;
