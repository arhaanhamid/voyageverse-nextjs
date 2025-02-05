import { getRecentPosts } from "@/lib/data";
import ShortPostCard from "../ShortPostCard";

const RecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <div className="mx-auto my-16 sm:px-5 lg:px-40 flex flex-col gap-10">
      <div className="text-center">
        <h1 className="font-extrabold text-black text-2xl ">Recent Activity</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:p gap-4">
        {posts.length > 0 &&
          posts.map((post) => <ShortPostCard post={post} key={post._id} />)}
      </div>
    </div>
  );
};

export default RecentPosts;
