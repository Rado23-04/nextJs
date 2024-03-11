import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
  ];

  const currentBlog = blogs.find((blog) => blog.id === parseInt(id));

  if (!currentBlog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <Header />
      <h1>{`Blog-${currentBlog.id}`}</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Blog;
