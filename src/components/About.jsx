import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full sm:pt-[10em]'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-300'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>After pursuing therapy and reading some self-help books to better understand myself, I rediscovered
              a passion of mine growing up which was entrepreneurship.
              Finding ways to make complex tasks easier and create solutions to common problems has always been a huge interest of mine.  
              On break from college I was first introduced to web development after building a successful dog walking business and needing a website, but stopped the business to focus on school.
              It took some years to connect the dots, but here I am today, a self-taught web developer and designer whose goal is to land a job in the tech field.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
