import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutImg from "../../../../assets/images/about.jpg"
const About = () => {
    return (
        <section className="bg-white py-24" id="about">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left Image */}
                <div className="relative">
                    <img
                        src={aboutImg}
                        alt="Happy Couple"
                        className="w-full rounded-3xl shadow-2xl"
                    />

                    <div className="absolute -bottom-8 -right-8 rounded-2xl bg-[#b1275b] p-6 text-white shadow-xl">
                        <h3 className="text-3xl font-bold">10K+</h3>
                        <p>Verified Profiles</p>
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#b1275b]">
                        About Us
                    </span>

                    <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
                        Connecting Hearts,
                        <br />
                        Creating Forever Stories
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Habeeb.World is a trusted matrimonial platform dedicated to
                        helping individuals and families find meaningful, lifelong
                        relationships. Our mission is to create a safe, secure,
                        and welcoming environment where genuine connections can grow.
                    </p>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#b1275b]" />
                            <span>Verified Member Profiles</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#b1275b]" />
                            <span>100% Privacy & Security</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#b1275b]" />
                            <span>Trusted by Families</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#b1275b]" />
                            <span>Dedicated Customer Support</span>
                        </div>

                    </div>

                    <Link
                        to="/about"
                        className="mt-10 inline-block rounded-full bg-[#b1275b] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#8f1d49] hover:scale-105"
                    >
                        Learn More
                    </Link>

                </div>

            </div>
        </section>
    )
}
export default About;