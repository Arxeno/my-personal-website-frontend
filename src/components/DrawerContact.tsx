import React from 'react';

const DrawerContact = () => {
  return (
    <div id='drawerContact'>
      <a href='https://github.com/Raisyam/' target='_blank'>
        <img
          id='github'
          src='images/github.webp'
          alt='Github'
          className='button-effect'
        />
      </a>

      <button
        onClick={() => {
          alert('My email: rmfbkw04@gmail.com');
        }}
      >
        <img
          id='email'
          src='images/email.webp'
          alt='Email'
          className='button-effect'
        />
      </button>

      <a
        href='https://www.linkedin.com/in/raisyam-burhani-19994b210/'
        target='_blank'
      >
        <img
          id='linkedin'
          src='images/linkedin.webp'
          alt='LinkedIn'
          className='button-effect'
        />
      </a>
    </div>
  );
};

export default DrawerContact;
