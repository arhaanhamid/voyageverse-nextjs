import { getUser } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const WidePostCard = async ({ post }) => {
  const createdDate = new Date(post.createdAt);
  const user = await getUser(post.userId);

  return (
    <div className="max-w-screen-xl mx-auto mb-10 bg-gray-950 rounded-2xl pb-10 p-2 shadow-custom-shadow">
      <main>
        <div className="w-full relative" style={{ height: 24 + "em" }}>
          <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black/70"></div>
          <Image
            src={post.imageData[0].imageUrl}
            alt="asfsa"
            width={9999}
            height={9999}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-tl-xl rounded-tr-xl"
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
                src={user.img}
                className="h-10 w-10 rounded-full mr-2 object-cover "
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  {user.username}{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  {" "}
                  {createdDate.toLocaleString()}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-400 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">
            {post.desc}...
            <Link
              className="text-blue-600 underline font-bold"
              href={`/feed/${post._id.toString()}`}
            >
              Read More...
            </Link>
          </p>
        </div>
      </main>
    </div>

    // <div className="bg-white mx-auto max-w-7xl py-6 px-6 lg:px-8">
    //   <div className="mx-auto w-full lg:mx-0">
    //     <Image
    //       src={post.imageData[0].imageUrl}
    //       alt=""
    //       width="9999"
    //       height="9999"
    //       className="h-full w-full bg-gray-50"
    //     />
    //   </div>

    //   <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //     <article className="flex max-w-xl flex-col items-start justify-between">
    //       <div className="flex items-center gap-x-4 text-xs">
    //         <time className="text-gray-500">
    //           {createdDate.toLocaleString()}
    //         </time>
    //         <a
    //           href="#"
    //           className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
    //         >
    //           Travelling
    //         </a>
    //       </div>
    //       <div className="group relative">
    //         <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
    //           <a href="#">
    //             <span className="absolute inset-0"></span>
    //             {post.title}
    //           </a>
    //         </h3>
    //         <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
    //           {post.desc}
    //         </p>
    //       </div>
    //       <div className="relative mt-8 flex items-center gap-x-4">
    //         <Image
    //           src={post.imageData[0].imageUrl}
    //           alt=""
    //           className="h-10 w-10 rounded-full bg-gray-50"
    //           width={100}
    //           height={100}
    //         />
    //         <div className="text-sm leading-6">
    //           <p className="font-semibold text-gray-900">
    //             <a href="#">
    //               <span className="absolute inset-0"></span>
    //               Michael Foster
    //             </a>
    //           </p>
    //           <p className="text-gray-600">Co-Founder / CTO</p>
    //         </div>
    //       </div>
    //     </article>
    //   </div>
    // </div>
  );
};

export default WidePostCard;
