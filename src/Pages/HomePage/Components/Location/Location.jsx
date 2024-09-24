// import React from 'react'

const Location = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#F0F8FF] px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[#F0F8FF] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#F0F8FF] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
            <img alt="" src="/flat-icons/location.gif" className="h-12" />
            <div className="text-[35px] font-bold text-[#3949AB]">Where to find us?</div>
        </div>
        
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Located at the Gun city of cebu where etc etc etc”
            </p>
          </blockquote>
        </figure>
      </div>
    <figcaption className="mt-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1054.805816787286!2d124.03011235886652!3d10.50395894866301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9bb579f5392eb%3A0x81c13607194fd818!2sCTU%20-%20Danao%20Hometel!5e1!3m2!1sen!2sph!4v1725676260726!5m2!1sen!2sph" width="100%" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </figcaption>
    </section>
  )
}

export default Location
