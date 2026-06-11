import React from 'react'
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero>
        <h1 className='text-5xl font-bold mb-4'>Welcome to Doraemon World</h1>
        <p className='text-xl mb-6'>Explore the amazing universe of Doraemon and friends</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Learn More
        </button>
      </Hero>
    </>
  );
}

export default Home