import Banner from 'app/components/section/Banner';
import Contact from 'app/components/section/Contact';
import MenuContent from 'app/components/section/MenuContent';

const Menu = () => {
  return (
    <div className="mb-[100px]">
      <Banner />
      <MenuContent />
      <Contact />
    </div>
  );
};

export default Menu;
