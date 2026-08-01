
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/images/log.png"
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="bg-[#1f1b24] text-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

                {/* Company */}
                <div>
                    <img
                        src={logo}
                        alt="Habeeb.World"
                        className="h-16 w-auto"
                    />

                    <p className="mt-6 leading-7 text-gray-400">
                        Habeeb.World is a trusted matrimonial platform dedicated to
                        helping people find meaningful and lifelong relationships
                        through verified profiles and secure connections.
                    </p>

                    <div className="mt-8 flex gap-3">
                        <a
                            href="#"
                            className="rounded-full bg-[#b1275b] p-3 transition hover:bg-[#8f1d49]"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="rounded-full bg-[#b1275b] p-3 transition hover:bg-[#8f1d49]"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="rounded-full bg-[#b1275b] p-3 transition hover:bg-[#8f1d49]"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="#"
                            className="rounded-full bg-[#b1275b] p-3 transition hover:bg-[#8f1d49]"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

                    <ul className="space-y-4 text-gray-400">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/profiles">Browse Profiles</Link></li>
                        <li><Link to="/membership">Membership</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="mb-6 text-xl font-semibold">Contact Info</h3>

                    <div className="space-y-5 text-gray-400">

                        <div className="flex gap-3">
                            <FaMapMarkerAlt className="mt-1 text-[#b1275b]" />
                            <span>Nagpur, Maharashtra, India</span>
                        </div>

                        <div className="flex gap-3">
                            <FaPhoneAlt className="mt-1 text-[#b1275b]" />
                            <span>+91 XXXXX XXXXX</span>
                        </div>

                        <div className="flex gap-3">
                            <FaEnvelope className="mt-1 text-[#b1275b]" />
                            <span>support@habeeb.world</span>
                        </div>

                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="mb-6 text-xl font-semibold">
                        Newsletter
                    </h3>

                    <p className="mb-5 text-gray-400">
                        Subscribe to receive updates, success stories,
                        and new features.
                    </p>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="mb-4 w-full rounded-xl bg-white px-4 py-3 text-black outline-none"
                    />

                    <button className="w-full rounded-xl bg-[#b1275b] py-3 font-semibold transition hover:bg-[#8f1d49]">
                        Subscribe
                    </button>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">

                    <p>
                        © 2026 Habeeb.World. All Rights Reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white">
                            Privacy Policy
                        </Link>

                        <Link to="/terms" className="hover:text-white">
                            Terms & Conditions
                        </Link>

                        <Link to="/faq" className="hover:text-white">
                            FAQ
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;