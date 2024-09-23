import { useState } from "react";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQ = ({ animateOnce }) => {
  const Icon = ({ id, open }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  };

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const faqs = [
    {
        id: 1,
        question: "How do I make a reservation online?",
        answer:
          `To make a reservation online, visit our website and click on the "Book Now" button. 
            Select your desired check-in and check-out dates, the number of guests, and choose your preferred room type. 
            Follow the prompts to complete your reservation, and you’ll receive a confirmation via email.`
    },
    {
        id: 2,
        question: "Can I modify or cancel my reservation after booking?",
        answer:
          `Yes, you can modify or cancel your reservation. Simply log into your account on our website, go to "My Reservations," 
          and select the option to modify or cancel. Please note that changes or cancellations may be subject to our cancellation policy.`
    },
    {
        id: 3,
        question: "What is your cancellation policy?",
        answer:
          `Cancellations made at least 48 hours before the check-in date will receive a full refund. 
          Cancellations made within 48 hours of the check-in date may incur a cancellation fee. 
          Please refer to the terms and conditions at the time of booking for details.`
    },
    {
        id: 4,
        question: "Is a deposit required to secure my reservation?",
        answer:
          `Yes, a deposit may be required to secure your reservation. 
          The deposit amount will be deducted from the total cost of your stay and is usually refundable if 
          the reservation is canceled according to our cancellation policy.`
    },
    {
        id: 5,
        question: "How can I pay for my reservation?",
        answer:
          `We currently only accept GCash as the payment method. You can complete your payment 
          securely using GCash during the booking process.`
    },
    {
        id: 6,
        question: "Will I receive a confirmation after booking?",
        answer:
          `Yes, once your reservation is completed, you will receive an email confirmation with your booking details, 
          including the reservation number, room type, and check-in/check-out dates. 
          Please check your spam folder if you don’t see the email.`
    },
    {
        id: 7,
        question: "Can I book multiple rooms in one reservation?",
        answer:
          `Yes, you can book multiple rooms in a single reservation. When making your reservation, 
          you will be given the option to select the number of rooms you need, as well as the room types.`
    },
    {
        id: 8,
        question: "What if I arrive late for check-in?",
        answer:
          `If you plan to arrive late for check-in, please inform us in advance by contacting our front desk. 
          We will ensure your reservation is held for late arrival.`
    },
    {
        id: 9,
        question: "Are there any discounts available for online reservations?",
        answer:
          `Occasionally, we offer special promotions and discounts for online reservations. 
          Please check our website or subscribe to our newsletter to stay updated on our latest offers.`
    },
    {
        id: 10,
        question: "What if I encounter technical issues while booking?",
        answer:
          `If you encounter any technical difficulties during the booking process, 
          please contact our customer support team at 09090909090 or call [support phone number], 
          and we’ll assist you in completing your reservation.`
    },
    {
        id: 11,
        question: "Do you offer group bookings for events or corporate stays?",
        answer:
          `Yes, we offer group booking options for events and corporate stays. For more information, 
          please contact our group reservation team at [group booking email] or fill out the inquiry form on our website.`
    }
  ]

  return (
    <div className="mb-20 my-10 px-10">
        <div className="flex justify-start items-center">
            <div className="text-[25px] md:text-[35px] font-bold text-[#3949AB]">Frequently Asked Questions</div>
        </div>
        <div className="md:px-10 md:py-5 mx-auto max-w-[1400px]">
            {faqs.map((faq) => (
                <motion.div 
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: animateOnce, amount: 0.7}}
                    key={faq.id}
                    className="border-t-2"
                >
                    <Accordion 
                        open={open === faq.id} 
                        icon={<Icon id={faq.id} open={open} />}
                    >
                        <AccordionHeader 
                            onClick={() => handleOpen(faq.id)}
                            className="flex items-start text-start text-base"
                        >
                            {faq.question}
                        </AccordionHeader>
                        <AccordionBody className="ml-3 md:ml-10 max-w-[90%]">
                            {faq.answer}
                        </AccordionBody>
                    </Accordion> 
                </motion.div>
            ))}
            
        </div>
    </div>
    
  );
};

FAQ.propTypes = {
    animateOnce: PropTypes.bool.isRequired,
};

export default FAQ;
