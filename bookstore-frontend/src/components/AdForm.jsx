// src/components/AdForm.js
import React, { useState } from 'react';

const AdForm = () => {
  const [step, setStep] = useState(1);
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  return (
    <div className="container mx-auto p-4">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 1: Ad Information</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" placeholder="Enter title (40 characters max)" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-2">
              <option>Select an option</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}
      
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 2: Ad Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Price Type</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-2">
              <option>Select an option</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Currency</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" placeholder="Rs" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Item Condition</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-2">
              <option>Select an option</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Photos</label>
            <input type="file" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Original Price</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ad Description</label>
            <textarea className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
          </div>
          <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">Previous</button>
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}
      
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 3: User Information</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            {/* Add your Google Maps integration here */}
            <div className="w-full h-64 bg-gray-200"></div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Latitude</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Longitude</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">Previous</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      )}
    </div>
  );
};

export default AdForm;
