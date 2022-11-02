import React from 'react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { BiMapPin } from 'react-icons/bi';

const Menu = ({ active }) => {
  return (
    <div className='pt-8'>
      <div className='fle flex-col space-y-4'>
        <div
          className={`item flex text-blue-600 hover:cursor-pointer hover:text-blue-800`}
        >
          <AiOutlineHome className='mr-4 text-blue-600' size={24} />
          <p className='text-base font-medium '>Dashboard</p>
        </div>
        <div className='item flex text-gray-400 hover:cursor-pointer hover:text-blue-600'>
          <BiMapPin className='mr-4' size={24} />
          <p className='text-base font-normal '>Map</p>
        </div>
        <div className='item flex text-gray-400 hover:cursor-pointer hover:text-blue-600'>
          <AiOutlineLogout className='mr-4' size={24} />
          <p className='text-base font-normal '>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
