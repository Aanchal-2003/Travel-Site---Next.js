const Contact = () => {
    return (
        <main className="pt-24">

            {/* Page Header */}
            <section className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
                    <p className="text-lg">
                        Have questions or need help planning your trip? Get in touch with us.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">
                            We’re here to help you plan your next journey. Reach out to us anytime.
                        </p>

                        <div className="space-y-4 text-gray-700">
                            <p><strong>Email:</strong> support@tripnest.com</p>
                            <p><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Address:</strong> New Delhi, India</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your message"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Contact;
