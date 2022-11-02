import React from 'react';
import Logo from '../../atoms/Logo';
import Menu from './Menu';

const Sidebar = ({ activeMenu }) => {
  return (
    <>
      <section className='hidden w-2/12 flex-col bg-[#EEF2F3] px-4 pt-2 sm:flex'>
        <Logo />
        <Menu />
      </section>
    </>
  );
};

export default Sidebar;
