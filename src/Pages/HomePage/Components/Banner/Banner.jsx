//import React from "react";

const Banner = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-90"
        aria-hidden="true"
      >
        <img 
          src="/images/home/banner.jpg" 
          alt="" 
          className="w-full h-[40vh] sm:h-[50vh] lg:h-[125vh] object-cover" // Responsive height for the image
        />
      </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-48">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)' }}>
            <span className="text-lg sm:text-xl">Welcome to</span> <br />CENTRUM
          </h1>
          <p className="mt-4 text-lg leading-8 text-white" style={{ textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)' }}>
            where every corner feels like home.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+1rem)] aspect-[1155/678] w-[28rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+10rem)] sm:w-[50rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
