const DestinationDetails = () => {
  return (
    <main className="pt-24">

      {/* Hero Image */}
      <section
        className="h-[70vh] bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34)",
        }}
      >
        <div className="bg-black/50 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Paris, France
            </h1>
            <p className="max-w-2xl text-lg">
              The city of love, art, fashion, and timeless culture.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">About Paris</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Paris is the capital city of France and one of the most popular
              travel destinations in the world. Known for its iconic landmarks,
              rich history, art museums, and romantic atmosphere, Paris offers
              an unforgettable experience to every traveler.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              From the Eiffel Tower and Louvre Museum to charming cafes and
              scenic streets, the city blends tradition with modern life
              beautifully.
            </p>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1522098543979-ffc7f79d5c6c"
                alt="Paris street"
                className="rounded-xl h-56 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                alt="Eiffel Tower"
                className="rounded-xl h-56 w-full object-cover"
              />
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md h-fit">
            <h3 className="text-xl font-bold mb-4">Trip Information</h3>

            <ul className="space-y-3 text-gray-700">
              <li><strong>Country:</strong> France</li>
              <li><strong>Best Time to Visit:</strong> April – June</li>
              <li><strong>Popular For:</strong> Culture, Food, Romance</li>
              <li><strong>Average Budget:</strong> ₹90,000 – ₹1,50,000</li>
            </ul>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Plan This Trip
            </button>
          </div>

        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Top Attractions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Eiffel Tower",
                img: "https://images.pexels.com/photos/2563984/pexels-photo-2563984.jpeg",
              },
              {
                name: "Louvre Museum",
                img: "https://images.pexels.com/photos/4452037/pexels-photo-4452037.jpeg",
              },
              {
                name: "Seine River",
                img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 text-center font-semibold">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default DestinationDetails;
