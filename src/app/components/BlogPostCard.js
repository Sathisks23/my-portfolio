// components/BlogPostCard.js
import Link from 'next/link';

export default function BlogPostCard({ title, excerpt, slug }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
      <Link href={`/post/${slug}`}>
       Read more..
      </Link>
    </div>
  );
}
