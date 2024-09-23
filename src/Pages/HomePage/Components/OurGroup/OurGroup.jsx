// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import PropTypes from "prop-types";

const OurGroup = ({ animateOnce }) => {
  const people = [
    {
      name: "Noela Mae Gregorio",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Mae Delostrisimo",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Jake Hermosilla",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Kizzy Leigh Olimba",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Vincent Capa",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Airiez Baldemeca",

      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Mary Fyza Barriga",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Janica Capuyan",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Inakie Antolo",
      imageUrl: "/images/home/noela.jpg",
    },
    {
      name: "Dhemson Jan Tubod",
      imageUrl: "/images/home/noela.jpg",
    },
  ];

  return (
    <div className="bg-[#F0F8FF] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Group
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            aliquam aperiam neque nemo. Ratione ipsum reiciendis blanditiis
            iusto laborum ea voluptates nobis repellat distinctio. Esse natus
            velit iure ipsum. Porro sit iste consequatur soluta, atque obcaecati
            earum! Consequatur quia dolor quaerat enim! Tempora sequi qui sed
            est necessitatibus, iste cupiditate?
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: animateOnce, amount: 0.7 }}
                className="flex items-center gap-x-6"
              >
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

OurGroup.propTypes = {
  animateOnce: PropTypes.bool.isRequired,
};

export default OurGroup;
