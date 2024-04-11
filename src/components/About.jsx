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
              <p>During my tenure as a Junior Web Developer at Worcester Polytechnic Institute (WPI) in Worcester, MA, I embraced a multifaceted role that extended beyond coding and design. Alongside the Lead Developer, I diligently managed bug fixes and orchestrated site improvements on the university's Drupal-powered front-facing website. Drawing on my entrepreneurial background and self-taught skills, I approached each task with a blend of creativity and technical acumen. Moreover, I collaborated closely with colleagues in the Marketing department, including the Web Designer, to brainstorm and implement changes aimed at optimizing the website's functionality and user experience. Additionally, I found great fulfillment in working directly with students, lending a helping hand to troubleshoot and resolve issues they encountered with the university's site. This holistic experience not only deepened my expertise in web development but also reinforced my commitment to fostering innovation and supporting others within the tech community.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
