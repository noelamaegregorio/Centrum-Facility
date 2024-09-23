// import React from 'react'
import PropTypes from 'prop-types';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

const Introduction = ({ animateOnce }) => {

  const features = [
      {
          name: 'Push to deploy.',
          description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: CloudArrowUpIcon,
      },
      {
          name: 'CI/CD Pipelines.',
          description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
          icon: LockClosedIcon,
      },
      {
          name: 'Full-Stack Development.',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
          icon: ServerIcon,
      },
  ]

  return (
    <div className="overflow-hidden bg-[#F0F8FF] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div 
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: animateOnce, amount: 0.7}}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Short Introduction</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">CTU FACILITY CENTRUM</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                  Welcome to CTU Facility Centrum, your premier destination for booking a variety of spaces within our school! 
                  Whether you are looking for a meeting room, accommodation for guests, or a refreshing pool for recreational activities, we have you covered. 
                  Our facility is designed to cater to the diverse needs of students, staff, and the community, providing a seamless and convenient experience for all your reservation needs. 
                  Explore our range of amenities and make your next event a success at CTU Facility Centrum!.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: animateOnce, amount: 0.7}}
            className=''
          >
            <img
              alt="Product screenshot"
              src="/images/home/banner.jpg"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

Introduction.propTypes = {
  animateOnce: PropTypes.bool.isRequired,
};

export default Introduction
