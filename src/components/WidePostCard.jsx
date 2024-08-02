import Image from "next/image";
import Link from "next/link";
import InteractionMenu from "./postMenu/InteractionMenu";
import { uploadDataMany } from "@/lib/action";

const WidePostCard = async ({ post, userId }) => {
  const userPrefs = (await post.userPrefs.find(
    (pref) => pref.userId === userId
  )) || {
    like: false,
    dislike: false,
    pending: true,
  };

  const postData = JSON.stringify({
    like: userPrefs.like,
    dislike: userPrefs.dislike,
    pending: userPrefs.pending,
    likesCount: post.prefs.likes,
    dislikesCount: post.prefs.dislikes,
    userId,
    postId: post._id,
  });

  return (
    <div className="max-w-screen-xl mx-auto mb-10 bg-gray-950 rounded-2xl pb-5 p-2">
      <div className="w-full relative" style={{ height: 24 + "em" }}>
        <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black/70"></div>
        <Image
          src={post.imageData[0].imageUrl}
          alt="asfsa"
          width={9999}
          height={9999}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-tl-xl rounded-tr-xl "
        />
        <div className="pb-4 px-10 absolute bottom-0 left-0 z-20">
          <a
            href="#"
            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >
            {post.location}
          </a>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {post.title}
          </h2>
          <div className="flex mt-3">
            <Image
              alt="user_image"
              width={100}
              height={100}
              src={post.userImg ? post.userImg : "/noavatar.png"}
              className="h-10 w-10 rounded-full mr-2 object-cover "
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {" "}
                {post.username}{" "}
              </p>
              <p className="font-semibold text-gray-400 text-xs">
                {" "}
                {post.createdDate.toLocaleString()}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-10">
        <div className="mt-5 text-gray-400 max-w-screen-md text-lg leading-relaxed">
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {post.desc}...
          </p>
          <Link
            className="text-blue-600 underline font-bold"
            href={`/feed/${post._id.toString()}`}
          >
            Read More...
          </Link>
        </div>

        <InteractionMenu postRawData={postData} feedPage={true} />
      </div>
    </div>
  );
};

export default WidePostCard;
