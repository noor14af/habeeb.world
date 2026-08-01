import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
} from "react-icons/fa";
const Contact = () => {
    return (
        <section className="bg-[#fff8fb] py-24" id="contact">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-16 text-center">
                    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#b1275b]">
                        Contact Us
                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-gray-900">
                        We'd Love to Hear From You
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Have questions or need assistance? Our team is here to help
                        you find your perfect life partner.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="rounded-3xl bg-white p-10 shadow-xl">

                        <h3 className="mb-8 text-3xl font-bold text-gray-900">
                            Get In Touch
                        </h3>

                        <div className="space-y-8">

                            <div className="flex items-start gap-5">
                                <div className="rounded-full bg-[#b1275b] p-4 text-white">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Address</h4>
                                    <p className="text-gray-600">
                                        Nagpur, Maharashtra, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="rounded-full bg-[#b1275b] p-4 text-white">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p className="text-gray-600">
                                        +91 XXXXX XXXXX
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="rounded-full bg-[#b1275b] p-4 text-white">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-gray-600">
                                        support@habeeb.world
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="rounded-full bg-[#b1275b] p-4 text-white">
                                    <FaClock />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Working Hours</h4>
                                    <p className="text-gray-600">
                                        Mon - Sat : 9:00 AM - 7:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="rounded-3xl bg-white p-10 shadow-xl">

                        <h3 className="mb-8 text-3xl font-bold text-gray-900">
                            Send a Message
                        </h3>

                        <form className="space-y-6">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#b1275b]"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#b1275b]"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#b1275b]"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#b1275b]"
                            />

                            <textarea
                                rows={5}
                                placeholder="Write your message..."
                                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#b1275b]"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-[#b1275b] py-4 font-semibold text-white transition-all duration-300 hover:bg-[#8f1d49]"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </section>
    )

};
export default Contact;
