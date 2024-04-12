import Banner from 'app/components/section/Banner';
import BlogContent from 'app/components/section/BlogContent';
import Contact from 'app/components/section/Contact';


const Blog = () => {
  return (
    <div className="mb-[100px]">
      <Banner />
      <BlogContent />
      <Contact />
    </div>
  );
};

export default Blog;
