import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-slate-50 text-center px-4'>
      
      <h1 className='text-4xl md:text-5xl font-semibold'>Luxury Cars on Rent</h1>

      <form className='flex flex-col md:flex-row items-center justify-between p-4 md:p-2 rounded-xl md:rounded-full w-full max-w-md md:max-w-4xl bg-white shadow-lg border border-gray-100'>
        
        <div className='flex flex-col items-start md:ml-6 w-full md:w-auto'>
          <select 
            required 
            className="bg-transparent outline-none font-medium text-gray-700 cursor-pointer w-full md:w-auto"
            value={pickupLocation} 
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            <option value="" disabled>Pickup Location</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <p className='px-1 text-xs text-gray-400'>
            {pickupLocation ? `Selected: ${pickupLocation}` : 'Please select location'}
          </p>
        </div>

        <div className='flex flex-col items-start md:ml-6 w-full md:w-auto'>
            <label htmlFor='pickup-date'>Pick-up Date </label>
            <input type='date' id="pickup-date" min={new Date().toISOString().
                split('T')[0]} className='text-sm text-gray-500' required/>
        </div>

        <div className='flex flex-col items-start md:ml-6 w-full md:w-auto'>
            <label htmlFor='return-date'>Return Date </label>
            <input type='date' id="return-date" className='text-sm text-gray-500' required/>
        </div>

        <button className='mt-4 md:mt-0 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all'>
          Search Car
        </button>
      </form>

      <img 
        src={assets.main_car} 
        alt='Luxury Car' 
        className='w-full max-w-3xl object-contain drop-shadow-2xl'
      />
    </div>
  );
};

export default Hero;