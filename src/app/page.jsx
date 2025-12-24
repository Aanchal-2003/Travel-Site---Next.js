const Home = () => {
  return (
    <main className="pt-24">

      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center text-white flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plan Smarter. Travel Better.
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Discover destinations, plan trips, and create unforgettable travel experiences.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="px-4 py-3 rounded-md text-gray-800 w-full md:w-64"
              />
              <button className="bg-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                Start Planning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose TripNest?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Planning",
                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                desc: "Create day-wise itineraries easily.",
              },
              {
                title: "Top Destinations",
                img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                desc: "Explore popular travel locations.",
              },
              {
                title: "Easy Organization",
                img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
                desc: "Keep all your trip details in one place.",
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
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
              { name: "Bali", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
              { name: "Dubai", img: "https://images.unsplash.com/photo-1526495124232-a04e1849168c" },
              { name: "Maldives", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
              { name: "London", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
              { name: "Goa", img: "https://images.pexels.com/photos/740808/pexels-photo-740808.jpeg" },
            ].map((place, index) => (
              <div
                key={index}
                className="relative h-56 rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{place.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Next Trip?
          </h2>
          <p className="mb-6">
            Start organizing your travel journey with TripNest today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

    </main>
  );
};

export default Home;
