export default function BannerSection() {
  return (
    <section className="mx-auto mb-5 mt-10 w-5/6 lg:w-4/6 py-10 px-6 shadow-[0_0_0_1px_rgba(255,255,255,0.14)] text-white not-visited:flex flex-col md:flex-row justify-between items-centerder-gray-800">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold">
          <span className="text-white">Ready to deploy?</span> Start building
          with a free account.
        </h2>
        <p className="text-gray-400 mt-2">
          Speak to an expert for your{" "}
          <span className="text-blue-400 font-medium">Pro</span> or{" "}
          <span className="text-purple-400 font-medium">Enterprise</span> needs.
        </p>
        <div className="mt-5 flex flex-col md:flex-row gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200">
            Start Deploying
          </button>
          <button className=" text-white px-6 py-2 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.14)] bg-[#1a1a1a] font-medium  hover:bg-gray-800">
            Talk to an Expert
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-8 p-6  shadow-[0_0_0_1px_rgba(255,255,255,0.14)]">
        <h3 className="text-lg font-semibold text-white">
          Explore Vercel Enterprise
        </h3>
        <p className="text-gray-400 mt-2">
          with an interactive product tour, trial, or a personalized demo.
        </p>
        <button className="mt-4  text-white px-6 py-2 rounded-full font-medium bg-[#1a1a1a] hover:bg-gray-800">
          Explore Enterprise
        </button>
      </div>
    </section>
  );
}
