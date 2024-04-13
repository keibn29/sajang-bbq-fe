import Banner from 'app/components/section/Banner';
import Contact from 'app/components/section/Contact';
import OffersContent from 'app/components/section/OffersContent';

const Offers = () => {
  return (
    <div className="mb-[100px]">
      <Banner />
      <OffersContent />
      <Contact />
    </div>
  );
};

export default Offers;
