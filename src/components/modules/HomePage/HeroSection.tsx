
const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Your Ultimate Ride-Sharing Solution
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience seamless and comfortable rides with our reliable and affordable service.
          Get to your destination quickly and safely.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Book Your Ride Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
