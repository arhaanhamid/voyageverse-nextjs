import Image from "next/image";

const ShortPostCard = ({ post }) => {
  const createdDate = new Date(post.createdAt);

  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image
        src={post.imageData[0].imageUrl}
        alt="asfsa"
        width={9999}
        height={9999}
        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time className="block text-xs text-white/90">
            {" "}
            {createdDate.toLocaleString()}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{post.title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {post.desc}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ShortPostCard;
