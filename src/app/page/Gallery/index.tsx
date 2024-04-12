import Banner from 'app/components/section/Banner';
import Contact from 'app/components/section/Contact';
import GalleryContent from 'app/components/section/GalleryContent';

const Gallery = () => {
  return (
    <div className="mb-[100px]">
      <Banner />
      <GalleryContent />
      <Contact />
    </div>
  );
};

export default Gallery;
