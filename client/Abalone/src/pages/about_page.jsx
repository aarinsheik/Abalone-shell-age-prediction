import React from 'react'
import PopupComp from '../components/popup'

import abaloneImage1 from '../assets/abalone_shell_img3.jpeg';
import abaloneImage2 from '../assets/abalone_shell_img4.jpeg';
import abaloneImage3 from '../assets/abalone_shell_img5.jpeg';

const about_page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">About Abalone Shells</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <img src={abaloneImage1} alt="Abalone Shell 1" className="rounded-lg shadow-lg" />
          <div>
            <p className="text-lg mb-5">
              Abalone shells are one of nature’s most remarkable creations, celebrated for their stunning iridescence
              and unique structure. These marine mollusks are found in coastal waters around the globe, with their shells
                being a prized possession due to their striking, multicolored sheen. The iridescent inner layer, often referred
                to as mother-of-pearl, is a result of the microscopic structure of the shell and the way it interacts with light.
                This natural beauty has made abalone shells highly sought after for jewelry, decoration, and various artisanal crafts.            
            </p>
            <p className="text-lg mb-5">
            Abalone themselves are fascinating creatures. They have a single, flat, and ear-shaped shell with a row of respiratory pores.
             These mollusks adhere strongly to rocks in coastal waters, using their muscular foot to move and feed on algae.
              Abalone play a significant role in their ecosystems, contributing to the marine food chain and serving as indicators of environmental
               health.</p>            
            <p className="text-lg">
            Beyond their aesthetic appeal, abalone shells are incredibly strong and resilient. They are composed of microscopic tiles of calcium
             carbonate, held together by a flexible protein matrix. This composition makes the shells both hard and resistant to fractures, providing
              effective protection against predators.</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-5 text-center">Features Used in Age Prediction</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Gender</h3>
            <p className="text-lg">The gender of the abalone (Male, Female, or Infant) can impact growth rates and, consequently, age prediction.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Length</h3>
            <p className="text-lg">The length of the abalone shell measured in millimeters.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Height</h3>
            <p className="text-lg">The height of the abalone shell measured in millimeters.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Diameter</h3>
            <p className="text-lg">The diameter of the abalone shell measured in millimeters.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Whole Weight</h3>
            <p className="text-lg">The whole weight of the abalone including the shell, measured in milligrams.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Shucked Weight</h3>
            <p className="text-lg">The weight of the abalone's meat after the shell has been removed, measured in milligrams.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Viscera Weight</h3>
            <p className="text-lg">The weight of the abalone's gut, measured in milligrams.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Shell Weight</h3>
            <p className="text-lg">The weight of the shell after drying, measured in milligrams.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <img src={abaloneImage2} alt="Abalone Shell 2" className="rounded-lg shadow-lg" />
          <img src={abaloneImage3} alt="Abalone Shell 3" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default about_page;
