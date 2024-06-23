import Image from "next/image";

const UserPostCard = ({ post }) => {
  const createdDate = new Date(post.createdAt);

  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: 24 + "em" }}
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black/70"></div>
          <Image
            src={post.imageData[0].imageUrl}
            alt="asfsa"
            width={9999}
            height={9999}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Nutrition
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {post.title}
            </h2>
            <div className="flex mt-3">
              <Image
                alt="user_image"
                width={100}
                height={100}
                src={post.imageData[0].imageUrl}
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  Mike Sullivan{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">
            Advantage old had otherwise sincerity dependent additions. It in
            adapted natural hastily is justice. Six draw you him full not mean
            evil. Prepare garrets it expense windows shewing do an. She
            projection advantages resolution son indulgence. Part sure on no
            long life am at ever. In songs above he as drawn to. Gay was
            outlived peculiar rendered led six.
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

export default UserPostCard;
