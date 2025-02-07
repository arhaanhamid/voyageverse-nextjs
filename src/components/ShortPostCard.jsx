import Image from "next/image";
import Link from "next/link";

const ShortPostCard = ({ post }) => {
  const postUrl = `/feed/${post._id.toString()}`;

  return (
    <article className="relative h-[450px] w-full overflow-hidden rounded-none md:rounded-lg shadow transition hover:shadow-lg">
      {/* Wrap the image with Link and an <a> tag */}
      <Image
        src={
          post.imageData.length > 0
            ? post.imageData[0].imageUrl || "/noimage.png"
            : "/noimage.png"
        }
        alt={post.title}
        width={9999}
        height={9999}
        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
      />

      <div className="relative w-full h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-56 lg:pt-64  cursor-pointer">
        <div className="absolute left-0 bottom-0 w-full p-2 sm:p-6 lg:px-4 xl:px-8">
          <time className="block text-xs text-white/90">
            {new Date(post.createdAt).toLocaleString()}
          </time>

          {/* Wrap the title with Link and an <a> tag */}
          <Link href={postUrl}>
            <h3 className="mt-0.5 text-lg md:text-[30px] text-white font-bold cursor-pointer">
              {post.title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed md:text-[16px] text-white/95">
            {post.desc}...
          </p>

          <Link href={postUrl}>
            <span className="text-blue-200 underline font-bold">
              Read More...
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ShortPostCard;
