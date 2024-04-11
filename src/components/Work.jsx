import React from 'react';
import './assets/WorkStyle.css';
import One from '../assets/project-one.png';
import Three from '../assets/project-three.png';
import Four from '../assets/project-four.png';
import Five from '../assets/project-five.png';
import Six from '../assets/project-six.png';
import MealFinder from '../assets/meal-finder.png';
import FormValidation from '../assets/form-validator.png';
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
            style={{ backgroundImage: `url(${Three})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                PHP MySQL Dog Search
              </span>
              <div className='pt-8 text-center'>
                <a href='https://thatsmydoggo.000webhostapp.com/'  target="_blank" rel="noreferrer">
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


          {/* <div
            style={{ backgroundImage: `url(${Six})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
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
          </div> */}


          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Five})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Mysteries
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
{/* 


          <div
            style={{ backgroundImage: `url(${BestBuy})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
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
          </div> */}


        {/* <div
          style={{ backgroundImage: `url(${Four})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        > */}
          {/* Hover Effects */}
          {/* <div className='opacity-0 group-hover:opacity-100'>
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
        </div> */}


        {/* <div
          style={{ backgroundImage: `url(${MealFinder})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        > */}
          {/* Hover Effects */}
          {/* <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Meal Finder API
            </span>
            <div className='pt-8 text-center'>
              <a href='https://find-me-meals.netlify.app/' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/ibsaajadam/meal-finder' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div> */}



        <div
          style={{ backgroundImage: `url(${FormValidation})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              JS Form Validator
            </span>
            <div className='pt-8 text-center'>
              <a href='https://form-validate-ibsaa.netlify.app/' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/ibsaajadam/form-validatorjs' target="_blank" rel="noreferrer">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>


        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WNBA})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                WNBA Jobs React JS
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


        {/* <div
          style={{ backgroundImage: `url(${VueSmoothies})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Vue JS Smoothies
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
        </div> */}
        

        {/* <div
            style={{ backgroundImage: `url(${Map})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Google Map
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
           </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Work;
