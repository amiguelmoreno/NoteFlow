import Heroes from "./_components/Heroes";
import Heading from "./_components/Heading";
import Footer from "./_components/Footer";

const MarketingPage = () => {
  return (
    <div className='min-h-full flex flex-col dark:bg-[#1f1f1f]'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
        <Heading></Heading>
        <Heroes></Heroes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MarketingPage;
