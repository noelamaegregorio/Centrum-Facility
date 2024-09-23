import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className='fixed w-full  '>
      <div className='text-white bg-black-500 h-[50px] flex justify-between items-center w-[1000px] m-auto mt-2 rounded-[10px] px-5 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30' style={{ textShadow: '2px 3px 0 rgba(0, 0, 0, 0.5)' }}>
        <div>CENTRUM</div>
        <div className='flex gap-10'>
          <div>Home</div>
          <div>About</div>
          <div>Service</div>
          <div>Reviews</div>
          <div>Contacts</div>
          <div>Reservation</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
