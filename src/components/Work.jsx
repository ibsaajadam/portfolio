import React from 'react';
import './assets/WorkStyle.css';
import One from '../assets/project-one.png';
import Three from '../assets/project-three.png';
import Four from '../assets/project-four.png';
import Five from '../assets/project-five.png';
import Six from '../assets/project-six.png';
import Seven from '../assets/project-seven.png';
import Eight from '../assets/project-eight.png';
import Nine from '../assets/project-nine.png';
import WNBA from '../assets/wnba.png';
import BestBuy from '../assets/bestbuy.png';
import MoviesJS from '../assets/movies.png';
import VueSmoothies from '../assets/vuesmoothies.png';
import Map from '../assets/map.png'


const Work = () => {
  return (
    <div name='work' className='work w-full md:h-screen text-gray-300 bg-[#0a192f] md:pb-[50em] md:pt-[40em]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-300'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${WNBA})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                WNBA Jobs
              </span>
              <div className='pt-8 text-center'>
                <a href='https://react-jobs-500ec.web.app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/ibsaajadam/React.js-WNBA' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Three})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                PHP MySQL Dog Search
              </span>
              <div className='pt-8 text-center'>
                <a href='https://thatsmydog.000webhostapp.com/'  target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/ibsaajadam/hey-buddy-php-mysql'  target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Six})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Beaches
              </span>
              <div className='pt-8 text-center'>
                <a href='https://react-js-beaches.vercel.app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/ibsaajadam/reactJS-beaches' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Map})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.js Map
              </span>
              <div className='pt-8 text-center'>
                <a href='https://boisterous-sundae-6dbd4d.netlify.app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/ibsaajadam/MapsAPI-React' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
           </div>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Five})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Mystery Search
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mystery-movies-react-json.netlify.app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/ibsaajadam/react-mysteries-json' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${BestBuy})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Chrome Extension
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.bestbuy.com' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/ibsaajadam/bestBuy-chrome-extension' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Seven})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Adobe XD Banking App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://xd.adobe.com/view/f98f1e45-e4be-4e9b-af0b-aeb10b478896-acdc/?fullscreen' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://xd.adobe.com/view/f98f1e45-e4be-4e9b-af0b-aeb10b478896-acdc/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Eight})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Adobe XD Mass Tours
              </span>
              <div className='pt-8 text-center'>
                <a href='https://xd.adobe.com/view/5bd8cd65-4f86-46f1-af9f-5663e452e881-0e8b/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://xd.adobe.com/view/5bd8cd65-4f86-46f1-af9f-5663e452e881-0e8b/specs/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${MoviesJS})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              JavaScript MoviesAPI
            </span>
            <div className='pt-8 text-center'>
              <a href='https://tubular-pie-63af74.netlify.app/' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/ibsaajadam/moviesapi-JS' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${One})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              JavaScript Login
            </span>
            <div className='pt-8 text-center'>
              <a href='https://javascript-front-end-login.netlify.app/' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/ibsaajadam/javascript-login' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${Four})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
            PHP MySQL Nike Staff
            </span>
            <div className='pt-8 text-center'>
              <a href='https://nike-admin.000webhostapp.com/index.php' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/ibsaajadam/Nike-staff-php' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${VueSmoothies})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Vue Smoothies
            </span>
            <div className='pt-8 text-center'>
              <a href='https://your-recipes-vue.web.app/#/' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/ibsaajadam/vue-smoothies' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>







 

          

          

          
        </div>
      </div>
    </div>
  );
};

export default Work;