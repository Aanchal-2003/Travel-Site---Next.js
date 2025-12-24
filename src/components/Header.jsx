import Link from "next/link";

const Header = () => {
    const items = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Destinations",
            path: "/destination"
        },
        {
            name: "Packages",
            path: "/packages"
        },
        {
            name: "Contact",
            path: "/contact"
        }

    ]
    return (
        <header className="w-full bg-white shadow-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    ✈️ TripNest
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    {
                        items.map((item, index) => {
                            return (
                                <Link href={item.path} key={index} className="hover:text-blue-600 transition">
                                    {item.name}
                                </Link>
                            )
                        }
                        )
                    }
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Plan Your Trip
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="text-gray-700 text-2xl">☰</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

