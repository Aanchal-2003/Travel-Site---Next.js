const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">✈️ TripNest</h2>
                    <p className="text-sm leading-relaxed">
                        Plan smarter journeys, explore top destinations, and create
                        unforgettable travel experiences with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Destinations</a></li>
                        <li><a href="#" className="hover:text-white transition">Trip Planner</a></li>
                        <li><a href="#" className="hover:text-white transition">Packages</a></li>
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
                    <p className="text-sm mb-3">
                        Subscribe to get travel tips and exclusive deals.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-l-md text-gray-900 focus:outline-none"
                        />
                        <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700 transition text-white">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 mt-10 py-4 text-center text-sm">
                © {new Date().getFullYear()} TripNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
