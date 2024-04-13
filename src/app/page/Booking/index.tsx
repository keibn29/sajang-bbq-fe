import Banner from 'app/components/section/Banner';
import BookingContent from 'app/components/section/BookingContent';
import Contact from 'app/components/section/Contact';

const Booking = () => {
  return (
    <div className="mb-[100px]">
      <Banner />
      <BookingContent />
      <Contact />
    </div>
  );
};

export default Booking;
