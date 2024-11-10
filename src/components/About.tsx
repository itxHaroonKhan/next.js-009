import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

const About = () => {
  return (
    <div className='p-36 flex items-center justify-center' id='about'>
      <div className='max-w-lg text-center'>
        {/* Use Image component instead of <img> */}
        <Image
          src="https://i.pinimg.com/736x/aa/3d/37/aa3d3786d6ead67f131663cdda34f264.jpg" // Image URL
          alt="About Me"
          className="rounded-full mx-auto mb-4"
          width={128} // Define width (32*4 for scaling)
          height={128} // Define height (32*4 for scaling)
          objectFit="cover" // Ensure the image maintains aspect ratio without stretching
          data-aos="zoom-in-up"
        />
        
        {/* About Content */}
        <h2 className='text-2xl font-semibold mb-2' data-aos="zoom-in-up">About Me</h2>
        <p className='text-gray-700' data-aos="zoom-in-up">
          I am a web developer with a passion for creating interactive and user-friendly applications.
          With a background in programming and design, I aim to deliver high-quality solutions 
          that meet client needs and exceed expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
