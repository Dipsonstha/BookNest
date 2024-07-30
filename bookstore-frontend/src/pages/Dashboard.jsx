import React from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
import AdForm from '../components/AdForm';
const Dashboard = () => {
  return (
    <>
      <div className="bg-white">
        

        <div className="relative isolate px-6 pt-14 lg:px-8">
          
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to BookNest</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">Online platform to buy and sell old books. Age of the book doesn't determines the knowledge it contains. So, keep learning keep sharing.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/adForm" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post Free Ad</Link>
                <Link to="" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        <HowItWorks/>
       
        </div>
      </div>
    </>
  );
};

export default Dashboard;
