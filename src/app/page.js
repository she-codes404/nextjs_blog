// app/page.js
import { getAllPosts } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {""}
        {posts.map((post) => (
          <li key={post.slug}>
            < a href={`/posts/${post.slug}`}>{post.title}</a>
            <p>{post.date}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
           
          </li>
        ))}
      </ul>
    </div>
  );
}