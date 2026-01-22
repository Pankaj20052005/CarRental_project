import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets' 

const CarDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const currency = import.meta.env.VITE_CURRENCY
  const handleSubmit = async(e) =>{
    e.preventDefault();
  }

  useEffect(() => {
    if (dummyCarData) {
      const foundCar = dummyCarData.find(item => String(item._id) === String(id))
      setCar(foundCar)
    }
  }, [id])

  if (!car) {
    return <div className='p-20 text-center'>Finding car details...</div>
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'
      > 

        {assets?.arrow_icon ? (
          <img src={assets.arrow_icon} alt='' className='rotate-180 opacity-65 w-4' />
        ) : (
          <span>←</span>
        )}
        Back to all Cars
      </button>

      {/* Main Container with Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-start'>
        
        {/* Left Section: Image and Info */}
        <div className='lg:col-span-2'>
          <h1 className='text-3xl font-bold'>{car.name}</h1>
          <p className='text-gray-600 mt-2'>{car.type} - {car.transmission}</p>
          {car.image && (
            <img src={car.image} alt={car.name} className='w-full mt-6 rounded-lg' />
          )}
          <div className='mt-6'>
             <p className='text-xl font-semibold'>Price: ${car.price}</p>
             <p className='mt-4'>{car.description}</p>
          </div>
          
          <div className='mt-6'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {
                ["360 Camera", "Bluetooth", "GPS", "Heated Seats", "Rear view mirror"].map((item)=>(
                  <li key={item} className='flex items-center text-gray-500'>
                    <img src={assets.check_icon} className='h-4 mr-2' alt="" />
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        {/* Right Section: Pricing Box */}
        <div className='lg:col-span-1'>
          <form onSubmit={handleSubmit} className='shadow-lg h-max sticky top-24 rounded-xl p-6 space-y-6 text-gray-500'>
            <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>
              {currency}{car.pricePerDay} 
              <span className='text-base text-gray-400 font-normal'> per day</span>
            </p>

            <hr className='border-borderColor my-6' /> 

            <div className='flex flex-col gap-2'>
              <label htmlFor="pickup-date">Pickup Date</label>
              <input type="date" className='border border-borderColor px-3 py-2
              rounded-lg' required id='pickup-date' min={new Date().toISOString().split('T')[0]}/>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="return-date">Return Date</label>
              <input type="date" className='border border-borderColor px-3 py-2
              rounded-lg' required id='pickup-date' min={new Date().toISOString().split('T')[0]}/>
            </div>

            <button className='w-full bg-primary hover:bg-priary-dull
            transition-all py-3 font-medium text-white rounded-xl
            cursor-pointer'>Book Now</button>

            <p className='text-center text-sm'>No credit card required to reserve the car</p>

          </form>
        </div>

      </div>
    </div>
  )
}

export default CarDetails