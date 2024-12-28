// app/blog/page.js
import BlogPostCard from "../components/BlogPostCard";

const posts = [
  { title: 'My First Blog Post', content: 'This is my first post. Stay tuned for more!' },
  { title: 'Learning Full-Stack Development', content: 'I am currently learning full-stack development using various technologies.' }
];

export default function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <BlogPostCard key={index} title={post.title} content={post.content} />
      ))}
    </section>
  );
}
