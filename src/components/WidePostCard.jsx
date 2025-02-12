"use client";
import Image from "next/image";
import Link from "next/link";
import InteractionMenu from "@/components/postMenu/InteractionMenu";

const WidePostCard = ({ post }) => {
  return (
    <div className="bg-gray-950 md:rounded-lg mx-1 md:mx-20 md:p-2 lg:p-3 lg:mx-36 xl:mx-80 mb-20">
      <div className="w-full relative min-h-[400px]">
        <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black/70"></div>
        <Image
          src={post.imageData[0].imageUrl}
          alt="asfsa"
          width={9999}
          height={9999}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover md:rounded-tl-xl md:rounded-tr-xl"
        />
        <div className="pb-4 px-5 md:px-10 lg:px-20 absolute bottom-0 left-0 z-20">
          <a
            href="#"
            className="px-4 py-1 mb-2 md:font-semibold uppercase text-xs lg:text-sm tracking-[1px] bg-black text-gray-200 inline-flex items-center justify-center"
          >
            {post.location}
          </a>
          <h2 className="text-2xl md:text-4xl lg:text-5xl uppercase font-semibold text-gray-100 leading-tight tracking-[1px]">
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

      <div className="flex flex-col px-5 md:px-10 lg:px-20">
        <div className="mt-5 max-w-screen-md">
          <p className="my-2 line-clamp-3 text-sm/relaxed md:text-base text-gray-400">
            {post.desc}...
          </p>
          <Link
            className="text-blue-600 underline font-bold uppercase text-xs md:text-sm"
            href={`/feed/${post._id.toString()}`}
          >
            Read More...
          </Link>
        </div>

        <InteractionMenu postData={post.postData} feedPage={true} />
      </div>
    </div>
  );
};

export default WidePostCard;
