import AddressContent from 'app/components/section/AddressContent';
import Banner from 'app/components/section/Banner';
import Contact from 'app/components/section/Contact';

const Address = () => {
  return (
    <div className="mb-[100px]">
      <Banner />
      <AddressContent />
      <Contact />
    </div>
  );
};

export default Address;
