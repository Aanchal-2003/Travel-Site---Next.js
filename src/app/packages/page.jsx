const PackageDetails = () => {
  return (
    <main className="pt-24">

      {/* Hero Image */}
      <section
        className="h-[70vh] bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
        }}
      >
        <div className="bg-black/50 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bali Adventure Package
            </h1>
            <p className="text-lg max-w-2xl">
              Experience tropical beaches, cultural heritage, and thrilling adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Package Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This Bali Adventure Package is designed for travelers who want to
              explore the best of Bali. From pristine beaches and lush rice
              terraces to vibrant nightlife and cultural experiences, this
              package offers a perfect balance of relaxation and adventure.
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <img
                src="https://images.unsplash.com/photo-1552733407-5d3a7bfb0b73"
                alt="Bali beach"
                className="rounded-xl h-56 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1541417904950-b855846fe074"
                alt="Bali temple"
                className="rounded-xl h-56 w-full object-cover"
              />
            </div>

            {/* Itinerary */}
            <h3 className="text-2xl font-bold mb-4">Trip Itinerary</h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong>Day 1:</strong> Arrival & leisure time</li>
              <li><strong>Day 2:</strong> Beach activities & local sightseeing</li>
              <li><strong>Day 3:</strong> Cultural tour & temples</li>
              <li><strong>Day 4:</strong> Adventure activities</li>
              <li><strong>Day 5:</strong> Departure</li>
            </ul>
          </div>

          {/* Price Card */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md h-fit">
            <h3 className="text-xl font-bold mb-4">Package Details</h3>

            <ul className="space-y-3 text-gray-700">
              <li><strong>Duration:</strong> 5 Days / 4 Nights</li>
              <li><strong>Price:</strong> ₹79,999</li>
              <li><strong>Includes:</strong> Hotel, Transport, Sightseeing</li>
              <li><strong>Best Time:</strong> April – October</li>
            </ul>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Book Now
            </button>
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Package Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beach Resorts",
                img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
              },
              {
                title: "Cultural Tours",
                img: "https://images.unsplash.com/photo-1541417904950-b855846fe074",
              },
              {
                title: "Adventure Activities",
                img: "https://images.pexels.com/photos/9303994/pexels-photo-9303994.jpeg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 text-center font-semibold">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default PackageDetails;
