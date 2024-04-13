import Address from 'app/components/section/Address';
import Banner from 'app/components/section/Banner';
import Blog from 'app/components/section/Blog';
import Concept from 'app/components/section/Concept';
import Contact from 'app/components/section/Contact';
import Gallery from 'app/components/section/Gallery';
import Introduction from 'app/components/section/Introduction';
import Menu from 'app/components/section/Menu';
import Sale from 'app/components/section/Sale';

const Home = () => {
  return (
    <div>
      <Introduction />
      <Address />
      <Concept />
      <Menu />
      <Sale />
      <Gallery />
      <Blog />
    </div>
  );
};

export default Home;
