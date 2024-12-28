// app/page.js
import BlogPostCard from "./components/BlogPostCard";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">Welcome to Satish Diaries</h1>
      <p className="text-lg mb-6">Freelancer | Blogger | Consultant</p>
      
      <h2 className="text-2xl font-medium mb-4">Recent Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example of how to display blog posts */}
        <BlogPostCard title="Blog Post 1" excerpt="Lorem ipsum..." slug="post-1" />
        <BlogPostCard title="Blog Post 2" excerpt="Lorem ipsum..." slug="post-2" />
        <BlogPostCard title="Blog Post 3" excerpt="Lorem ipsum..." slug="post-3" />
      </div>
    </div>
  );
}
