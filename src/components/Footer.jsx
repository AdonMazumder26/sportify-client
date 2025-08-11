import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ darkMode }) {
    return (
        <footer
            className={`py-10 transition-colors duration-300 ${darkMode
                ? "bg-gray-900 text-gray-300"
                : "bg-gray-100 text-gray-800"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary-500">Sportify</h2>
                        <p className="mt-4 text-sm leading-6">
                            Your one-stop destination for high-quality sports accessories.
                            Gear up and elevate your performance — whether you’re training, competing, or just having fun.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4 mt-5">
                            <a href="#" className="hover:text-primary-400"><FaFacebookF size={18} /></a>
                            <a href="#" className="hover:text-primary-400"><FaInstagram size={18} /></a>
                            <a href="#" className="hover:text-primary-400"><FaTwitter size={18} /></a>
                            <a href="#" className="hover:text-primary-400"><FaLinkedinIn size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/" className="hover:text-primary-400 transition">Home</a></li>
                            <li><a href="/equipment" className="hover:text-primary-400 transition">Equipment</a></li>
                            <li><a href="/about" className="hover:text-primary-400 transition">About Us</a></li>
                            <li><a href="/contact" className="hover:text-primary-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold">Customer Service</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/faq" className="hover:text-primary-400 transition">FAQs</a></li>
                            <li><a href="/shipping" className="hover:text-primary-400 transition">Shipping & Returns</a></li>
                            <li><a href="/privacy" className="hover:text-primary-400 transition">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-primary-400 transition">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-lg font-semibold">Stay Updated</h3>
                        <p className="mt-4 text-sm">
                            Subscribe to our newsletter for the latest sports gear updates & offers.
                        </p>
                        <form className="mt-4 flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`px-4 py-2 rounded focus:outline-none w-full ${darkMode
                                    ? "bg-gray-800 text-gray-200 placeholder-gray-500"
                                    : "bg-white text-gray-800 placeholder-gray-500 border border-gray-300"
                                    }`}
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Divider */}
                <div className={`border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-center sm:text-left ${darkMode ? "border-gray-700" : "border-gray-300"
                    }`}>
                    <p>© {new Date().getFullYear()} Sportify. All rights reserved.</p>
                    <p className="font-medium">Play Hard. Shop Smart.</p>
                </div>
            </div>
        </footer>
    );
}
