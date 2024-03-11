import Link from 'next/link';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Home = () => {
  // Liste des blogs (remplacez par vos données réelles)
  const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
    // Ajoutez d'autres blogs au besoin
  ];

  return (
    <div>
      <Header />
      <h1>Home</h1>
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

export default Home;
