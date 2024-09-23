import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex justify-center items-center px-4 py-2 sm:h-16 h-auto'>
      <p className='text-center'>Copyright &copy; {currentYear} Get Me A Coffee - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
