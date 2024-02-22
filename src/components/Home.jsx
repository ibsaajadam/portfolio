import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#0a192f]" >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full sm:pt-[10em]'>
        <p className='text-blue-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ibsaa Adam
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm A Junior Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          My passion in life is personal development. On my journey of bettering and understanding myself I discovered my career passion of web design and development.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-300 hover:border-blue-300'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
