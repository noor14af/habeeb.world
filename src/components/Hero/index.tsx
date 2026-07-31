import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.png";
const Hero = () => {
  return (
    // <section style={{ backgroundImage: `url(${heroImg})` }} className="bg-gradient-to-r from-[#fff5f8] via-white to-[#fff5f8]">
    //     <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 lg:flex-row">
    //         {/* Left Content */}
    //         <div className="flex-1">
    //             <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#b1275b]">
    //                 ❤️ Trusted Matrimony Platform
    //             </span>

    //             <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
    //                 Find Your
    //                 <span className="text-[#b1275b]"> Perfect Life Partner</span>
    //             </h1>

    //             <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
    //                 Join thousands of verified members looking for meaningful, lifelong
    //                 relationships built on trust, compatibility, and shared values.
    //             </p>

    //             <div className="mt-10 flex gap-4">
    //                 <Link
    //                     to="/register"
    //                     className="rounded-full bg-[#b1275b] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#8f1d49]"
    //                 >
    //                     Register Free
    //                 </Link>

    //                 <Link
    //                     to="/profiles"
    //                     className="rounded-full border-2 border-[#b1275b] px-8 py-4 font-semibold text-[#b1275b] transition hover:bg-[#b1275b] hover:text-white"
    //                 >
    //                     Browse Profiles
    //                 </Link>
    //             </div>
    //         </div>

    //         {/* Right Image */}

    //         <div className="mt-16 flex-1 lg:mt-0">
    //             <img
    //                 src={heroImg}
    //                 alt="Happy Couple"
    //                 className="mx-auto w-full max-w-lg rounded-[40px] shadow-2xl"
    //             />
    //         </div>
    //     </div>
    // </section>
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <span className="rounded-full bg-[#b1275b]/20 px-5 py-2 text-sm font-semibold text-pink-200 backdrop-blur-md">
            ❤️ Trusted Matrimony Platform
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-none text-white">
            Find Your <br />
            <span className="text-[#ff5c93]">Perfect Life Partner</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Join thousands of verified members looking for meaningful, lifelong
            relationships built on trust, compatibility, and shared values.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="rounded-full bg-[#b1275b] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#8f1d49]"
            >
              Register Free
            </Link>

            <Link
              to="/profiles"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#b1275b]"
            >
              Browse Profiles
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-10 text-white">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-300">Verified Profiles</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5K+</h2>
              <p className="text-gray-300">Successful Matches</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">100%</h2>
              <p className="text-gray-300">Privacy & Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
