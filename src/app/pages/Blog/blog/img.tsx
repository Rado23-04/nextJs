import { useRouter } from 'next/router';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

const BlogImage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Utilisez l'API Lorem Picsum pour une image aléatoire
  const imageUrl = `https://picsum.photos/400/300?random=${id}`;

  return (
    <div>
      <Header />
      <h1>{`Blog-${id} Image`}</h1>
      <img src={imageUrl} alt={`Blog-${id}`} />
      <Footer />
    </div>
  );
};

export default BlogImage;
