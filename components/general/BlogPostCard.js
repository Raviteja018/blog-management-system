import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ blog }) {

  return (
    <div className="group relative overflow-hidden rounded-lg border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${blog.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={blog.imageUrl}
            alt="image for blog"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {blog.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {blog.content}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={blog.authorImage}
                  alt={blog.authorName}
                  fill
                  className="object-cover "
                />
              </div>
              <p className="text-sm font-medium text-gray-700">{blog.authorName}</p>
            </div>
            <time className="text-sm text-gray-500">{new Intl.DateTimeFormat("en-us", {
                year: "numeric",
                month: 'short',
                day: 'numeric'
            }).format(new Date(blog.createdAt))}</time>
          </div>
        </div>
      </Link>
    </div>
  );
}
