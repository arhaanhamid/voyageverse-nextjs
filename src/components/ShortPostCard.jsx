import Image from "next/image";
import Link from "next/link";

const ShortPostCard = ({ post }) => {
  return (
    <article className="relative overflow-hidden rounded-none md:rounded-lg shadow transition hover:shadow-lg">
      <Image
        src={
          post.imageData.length > 0
            ? post.imageData[0].imageUrl
              ? post.imageData[0].imageUrl
              : "/noimage.png"
            : "/noimage.png"
        }
        alt={post.title}
        width={9999}
        height={9999}
        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-56 lg:pt-64">
        <div className="p-2 sm:p-4 md:p-6">
          <time className="block text-xs text-white/90">
            {new Date(post.createdAt).toLocaleString()}
          </time>

          <h3 className="mt-0.5 text-lg md:text-[30px] text-white font-bold">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed md:text-[16px] text-white/95">
            {post.desc}...
          </p>

          <Link
            className="text-blue-200 underline font-bold"
            href={`/feed/${post._id.toString()}`}
          >
            Read More...
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ShortPostCard;
