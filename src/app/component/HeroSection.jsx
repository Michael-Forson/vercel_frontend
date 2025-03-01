export default function HeroSection() {
  return (
    <section
      className="mx-auto  mt-10 lg:mt-20  w-5/6 lg:w-4/6 h-200 flex items-center justify-center flex-col text-center 
    bg-[url('/bg-img-sm.png')] sm:bg-[url('/bg-img-md.png')] md:bg-[url('/bg-img-lg.png')] bg-contain bg-center  bg-no-repeat"
    >
      <h1 className="text-4xl lg:text-6xl font-bold relative sm:-top-10  lg:-top-30">
        Your complete platform for web
      </h1>
      <p className=" text-gray-300 sm:text-smd:text-md lg:text-lg hover:text-white relative  sm:-top-10 lg:-top-30 my-5 lg:my-8">
        Vercel provides the developer tool and cloud infrastructure <br /> to
        build ,scale and secure a faster,more personalized web
      </p>
      <div className="relative  sm:-top-10 lg:-top-30">
        <button className="text-black lg:w-44 bg-white px-5 py-3  mr-5 shadow-[0_0_0_1px_rgba(255,255,255,0.14)] rounded-4xl text-lg font-medium hover:opacity-90 transition-all  ">
          Start deploying
        </button>
        <button className=" text-gray-300 lg:w-44 bg-black px-5 py-3  shadow-[0_0_0_1px_rgba(255,255,255,0.14)] rounded-4xl text-lg font-medium hover:opacity-90 transition-all  ">
          Get a Demo
        </button>
      </div>
    </section>
  );
}
